import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organization, contact, productOrService, message } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    let deliveredVia: string[] = [];

    if (botToken && chatId) {
      const text = [
        "📬 *[PORTFOLIO & B2B INQUIRY]*",
        `👤 *Name:* ${name || "-"}`,
        `🏢 *Org:* ${organization || "-"}`,
        `📞 *Contact:* ${contact || "-"}`,
        `🎯 *Scope:* ${productOrService || "-"}`,
        `📝 *Message:*\n${message || "-"}`,
      ].join("\n");

      const tgRes = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        }
      );
      if (tgRes.ok) deliveredVia.push("telegram");
    }

    if (webhookUrl) {
      const whRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "portfolio-website",
          timestamp: new Date().toISOString(),
          name,
          organization,
          contact,
          productOrService,
          message,
        }),
      });
      if (whRes.ok) deliveredVia.push("webhook");
    }

    return NextResponse.json({
      ok: true,
      deliveredVia,
      configured: deliveredVia.length > 0,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
