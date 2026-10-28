import { NextResponse } from "next/server";

// In-memory sliding window rate limiter (5 requests per 10 minutes per IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) {
    return false;
  }
  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "local";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      name = "",
      organization = "",
      contact = "",
      product = "",
      productOrService = "",
      message = "",
      locale = "kk",
      website_hp = "",
    } = body ?? {};

    // Honeypot check: bots fill hidden website_hp field
    if (typeof website_hp === "string" && website_hp.trim().length > 0) {
      return NextResponse.json({ ok: true, configured: true, mode: "filtered" });
    }

    const cleanName = String(name).trim().slice(0, 120);
    const cleanOrg = String(organization).trim().slice(0, 160);
    const cleanContact = String(contact).trim().slice(0, 160);
    const cleanProduct = String(product || productOrService).trim().slice(0, 200);
    const cleanMessage = String(message).trim().slice(0, 3000);
    const cleanLocale = String(locale).trim().slice(0, 10).toUpperCase();

    if (!cleanName || !cleanContact || !cleanMessage) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text = [
      `🚀 <b>New Portfolio / B2B Inquiry (${escapeHtml(cleanLocale)})</b>`,
      ``,
      `👤 <b>Name:</b> ${escapeHtml(cleanName)}`,
      `🏢 <b>Organization:</b> ${escapeHtml(cleanOrg || "—")}`,
      `📬 <b>Contact:</b> ${escapeHtml(cleanContact)}`,
      `📦 <b>Product / Scope:</b> ${escapeHtml(cleanProduct || "General")}`,
      ``,
      `📝 <b>Message:</b>`,
      escapeHtml(cleanMessage),
    ].join("\n");

    if (botToken && chatId) {
      const tgRes = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
        }
      );

      if (!tgRes.ok) {
        const errText = await tgRes.text();
        console.error("Telegram API error:", errText);
        return NextResponse.json(
          { ok: false, error: "Telegram delivery failed" },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, mode: "telegram" });
    }

    return NextResponse.json({ ok: true, mode: "fallback" });
  } catch (error) {
    console.error("Contact endpoint error:", error);
    return NextResponse.json(
      { ok: false, error: "Invalid request payload" },
      { status: 500 }
    );
  }
}
