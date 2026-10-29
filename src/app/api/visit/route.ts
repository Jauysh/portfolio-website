import { NextRequest, NextResponse } from "next/server";

const BOT_UA_REGEX =
  /bot|crawler|spider|crawling|googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|ahrefs|semrush|mj12bot|dotbot|petalbot|bytespider|facebookexternalhit|facebot|twitterbot|linkedinbot|telegrambot|whatsapp|discordbot|slackbot|applebot|pinterest|lighthouse|pagespeed|gtmetrix|pingdom|uptimerobot|headlesschrome|phantomjs|prerender|vercel|curl|wget|python-requests|axios|go-http-client/i;

const RECENT_VISITOR_CACHE = new Map<string, number>();
const COOLDOWN_MS = 30 * 60 * 1000; // 30 minutes per IP to prevent refresh spam

function countryCodeToFlag(code: string): string {
  if (!code || code.length !== 2) return "🌍";
  const upper = code.toUpperCase();
  const offset = 127397;
  return String.fromCodePoint(
    upper.charCodeAt(0) + offset,
    upper.charCodeAt(1) + offset
  );
}

function parseUserAgent(ua: string): { device: string; browser: string; os: string } {
  const isMobile = /Mobile|Android|iP(hone|od|ad)/i.test(ua);
  const device = isMobile ? "📱 Mobile" : "💻 Desktop";

  let os = "Unknown OS";
  if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/Mac OS X|Macintosh/i.test(ua)) os = "macOS";
  else if (/Windows NT/i.test(ua)) os = "Windows";
  else if (/Linux/i.test(ua)) os = "Linux";

  let browser = "Browser";
  if (/Telegram/i.test(ua)) browser = "Telegram In-App";
  else if (/Instagram/i.test(ua)) browser = "Instagram In-App";
  else if (/LinkedInApp/i.test(ua)) browser = "LinkedIn App";
  else if (/Edg\//i.test(ua)) browser = "Edge";
  else if (/OPR\/|Opera/i.test(ua)) browser = "Opera";
  else if (/YaBrowser/i.test(ua)) browser = "Yandex Browser";
  else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = "Chrome";
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = "Safari";
  else if (/Firefox\//i.test(ua)) browser = "Firefox";

  return { device, browser, os };
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const ua = req.headers.get("user-agent") || "";

    // 1. Ignore bots, crawlers, and headless browsers
    if (!ua || BOT_UA_REGEX.test(ua)) {
      return NextResponse.json({ skipped: "bot" });
    }

    // 2. Ignore owner cookie if set
    const ownerCookie = req.cookies.get("niaz_owner")?.value;
    if (ownerCookie === "1" || ownerCookie === "true") {
      return NextResponse.json({ skipped: "owner_cookie" });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // 3. Ignore localhost / private network IPs
    if (
      ip === "unknown" ||
      ip === "127.0.0.1" ||
      ip === "::1" ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.")
    ) {
      return NextResponse.json({ skipped: "local_network" });
    }

    // 4. Ignore configured Owner IPs (optional env var OWNER_IPS="1.2.3.4,5.6.7.8")
    const ownerIps = (process.env.OWNER_IPS || "178.168.107.86")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (ownerIps.includes(ip)) {
      return NextResponse.json({ skipped: "owner_ip" });
    }

    // 5. Deduplicate per IP within 30-minute window
    const now = Date.now();
    for (const [cachedIp, ts] of RECENT_VISITOR_CACHE.entries()) {
      if (now - ts > COOLDOWN_MS) {
        RECENT_VISITOR_CACHE.delete(cachedIp);
      }
    }
    const lastSeen = RECENT_VISITOR_CACHE.get(ip);
    if (lastSeen && now - lastSeen < COOLDOWN_MS) {
      return NextResponse.json({ skipped: "cooldown" });
    }
    RECENT_VISITOR_CACHE.set(ip, now);

    const body = await req.json().catch(() => ({}));
    if (body?.isOwner) {
      return NextResponse.json({ skipped: "owner_flag" });
    }

    // Extract Vercel Geo Headers
    const countryCode = req.headers.get("x-vercel-ip-country") || "";
    const rawCity = req.headers.get("x-vercel-ip-city") || "";
    const city = rawCity ? decodeURIComponent(rawCity) : "";
    const region = req.headers.get("x-vercel-ip-country-region") || "";
    const timezone = req.headers.get("x-vercel-ip-timezone") || body?.timezone || "";
    const flag = countryCodeToFlag(countryCode);

    const locationParts = [city, region, countryCode].filter(Boolean);
    const locationDisplay =
      locationParts.length > 0 ? `${flag} ${locationParts.join(", ")}` : "🌍 Global";

    const { device, browser, os } = parseUserAgent(ua);
    const pagePath = String(body?.path || "/").slice(0, 200);
    const referrer = String(body?.referrer || "Direct (Тікелей)").slice(0, 300);
    const screen = String(body?.screen || "").slice(0, 40);
    const language = String(body?.language || "").slice(0, 30);

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ skipped: "no_telegram_credentials" });
    }

    const text = [
      `👀 <b>Жаңа Қолданушы Сайтқа Кірді (niaz.kz)</b>`,
      ``,
      `📍 <b>Локация:</b> ${escapeHtml(locationDisplay)}${timezone ? ` (${escapeHtml(timezone)})` : ""}`,
      `🖥 <b>Құрылғы:</b> ${escapeHtml(`${device} · ${os} · ${browser}`)}${screen ? ` [${escapeHtml(screen)}]` : ""}`,
      `📄 <b>Ашқан беті:</b> <code>${escapeHtml(pagePath)}</code>`,
      `🔗 <b>Қайдан келді:</b> ${escapeHtml(referrer)}`,
      `🌐 <b>Тілі / IP:</b> <code>${escapeHtml(language || "—")}</code> · <code>${escapeHtml(ip)}</code>`,
    ].join("\n");

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
      return NextResponse.json({ ok: false }, { status: 200 });
    }

    return NextResponse.json({ ok: true, notified: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
