import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidWebhookSecret(provided: string | null, expected: string): boolean {
  if (!provided) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export async function POST(req: NextRequest) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const ownerChatId = process.env.TELEGRAM_CHAT_ID;
    const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (!botToken) {
      return NextResponse.json({ ok: true });
    }

    if (webhookSecret) {
      const headerSecret = req.headers.get("x-telegram-bot-api-secret-token");
      if (!isValidWebhookSecret(headerSecret, webhookSecret)) {
        return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
      }
    }

    const update = await req.json().catch(() => null);
    const message = update?.message;
    if (!message || !message.chat?.id) {
      return NextResponse.json({ ok: true });
    }

    const chatId = String(message.chat.id);
    const text = String(message.text || "").trim().slice(0, 2000);
    const fromUser = message.from || {};
    const firstName = String(fromUser.first_name || "Қонақ").slice(0, 100);
    const username = fromUser.username
      ? `@${String(fromUser.username).slice(0, 64)}`
      : "—";

    const sendTelegram = async (
      targetChatId: string,
      htmlText: string,
      replyMarkup?: Record<string, unknown>
    ) => {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(6000),
        body: JSON.stringify({
          chat_id: targetChatId,
          text: htmlText,
          parse_mode: "HTML",
          disable_web_page_preview: true,
          ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
        }),
      });
    };

    const inlineKeyboard = {
      inline_keyboard: [
        [
          {
            text: "🌐 niaz.kz Платформасын ашу",
            web_app: { url: "https://niaz.kz" },
          },
        ],
        [
          {
            text: "🚀 12 B2B & AI Жобалар",
            url: "https://niaz.kz/projects",
          },
          {
            text: "📡 TenderScan.kz",
            url: "https://niaz.kz/projects/auto-tender",
          },
        ],
        [
          {
            text: "📩 B2B Демо сұрау",
            url: "https://niaz.kz/contact",
          },
          {
            text: "💬 Тікелей жазу (@jauysh)",
            url: "https://t.me/jauysh",
          },
        ],
      ],
    };

    if (text.startsWith("/start")) {
      const welcome = [
        `👋 Сәлеметсіз бе, <b>${escapeHtml(firstName)}</b>!`,
        ``,
        `🏛 <b>niaz.kz (ЖК «NIAZ»)</b> — <b>Азамат Жауыштың</b> ресми B2B өнімдер экожүйесі мен инженерлік ассистентіне қош келдіңіз.`,
        ``,
        `<b>Негізгі флагмандық жүйелер:</b>`,
        `• 🧠 <b>OmniCheck AI SaaS</b> — Дәптер мен тестті мультимодальды ЖИ арқылы тексеру (GDPR Privacy Shield + dHash)`,
        `• 📡 <b>TenderScan.kz (Auto-Tender)</b> — 5 портал тендерлері, Анти-РНУ қалқаны & Kaspi/1688/OEM ROI радары`,
        `• 🏆 <b>LuminaMath & School ERP</b> — 7–8 кампустық олимпиада, MIS/SIS және Google Workspace IAM`,
        `• 🖧 <b>SD-WAN & 5-Layer DMZ</b> — MikroTik, Proxmox кластері & 100 TB+ инфрақұрылым`,
        ``,
        `👇 Төмендегі батырмалар арқылы платформаны ашыңыз немесе осы чатқа сұрағыңызды жаза беріңіз — хабарламаңыз тікелей Азаматқа жетеді!`,
      ].join("\n");

      await sendTelegram(chatId, welcome, inlineKeyboard);
      return NextResponse.json({ ok: true });
    }

    if (text.startsWith("/projects")) {
      const projectsText = [
        `🚀 <b>niaz.kz — 12 Өндірістік B2B & AI SaaS Жүйесі:</b>`,
        ``,
        `1️⃣ <b>OmniCheck AI SaaS</b> — <a href="https://niaz.kz/projects/omnicheck">Case Study</a>`,
        `2️⃣ <b>TenderScan.kz (Auto-Tender)</b> — <a href="https://niaz.kz/projects/auto-tender">Case Study</a>`,
        `3️⃣ <b>LuminaMath Olympiad</b> — <a href="https://niaz.kz/projects/luminamath">Case Study</a>`,
        `4️⃣ <b>SSP (Subject Selection)</b> — <a href="https://niaz.kz/projects/ssp">Case Study</a>`,
        `5️⃣ <b>GM-App (7-Campus MIS)</b> — <a href="https://niaz.kz/projects/gm-app">Case Study</a>`,
        `6️⃣ <b>EduStaff HR & Workspace IAM</b> — <a href="https://niaz.kz/projects/hr-orizont">Case Study</a>`,
        `7️⃣ <b>29-Channel AI Media OS</b> — <a href="https://niaz.kz/projects/media-os">Case Study</a>`,
        `8️⃣ <b>3D-Secure Corporate Web CMS</b> — <a href="https://niaz.kz/projects/corporate-web-cms">Case Study</a>`,
        `9️⃣ <b>7-Campus SD-WAN & 12MB NOC</b> — <a href="https://niaz.kz/projects/school-it-infra">Case Study</a>`,
        `🔟 <b>1C:Enterprise Linux Cluster</b> — <a href="https://niaz.kz/projects/1c-enterprise">Case Study</a>`,
        ``,
        `🔗 Барлық жобалар мен ROI калькуляторы: <a href="https://niaz.kz/projects">niaz.kz/projects</a>`,
      ].join("\n");

      await sendTelegram(chatId, projectsText, inlineKeyboard);
      return NextResponse.json({ ok: true });
    }

    if (text.startsWith("/contact")) {
      const contactText = [
        `📩 <b>B2B Демо, Лицензиялау және Архитектуралық Консалтинг:</b>`,
        ``,
        `• 🌐 Веб-форма: <a href="https://niaz.kz/contact">niaz.kz/contact</a>`,
        `• 💬 Telegram: @jauysh`,
        `• ✉️ Email: <code>a.jauysh@gmail.com</code>`,
        ``,
        `Немесе сұрағыңызды / телефон нөміріңізді дәл осы ботқа жазып жіберіңіз — біз сізбен бірден хабарласамыз!`,
      ].join("\n");

      await sendTelegram(chatId, contactText, inlineKeyboard);
      return NextResponse.json({ ok: true });
    }

    // Forward any direct message from a visitor to the owner
    if (ownerChatId && chatId !== ownerChatId && text) {
      const forwardMsg = [
        `💬 <b>Ботқа жаңа хабарлама келді (@jauysh_portfolio_web_bot)</b>`,
        ``,
        `👤 <b>Аты:</b> ${escapeHtml(firstName)} (${escapeHtml(username)})`,
        `🆔 <b>Chat ID:</b> <code>${escapeHtml(chatId)}</code>`,
        `📝 <b>Хабарлама:</b>`,
        escapeHtml(text),
      ].join("\n");

      await sendTelegram(ownerChatId, forwardMsg);
      await sendTelegram(
        chatId,
        `✅ Рахмет, <b>${escapeHtml(firstName)}</b>! Сіздің хабарламаңыз Азамат Жауышқа тікелей жеткізілді. Жақын арада жауап береміз!`,
        inlineKeyboard
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
