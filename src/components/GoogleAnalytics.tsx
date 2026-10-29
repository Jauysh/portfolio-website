"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env.NEXT_PUBLIC_GA_ID ||
  "G-FYERPSWM87";

export function trackGAEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    GA_MEASUREMENT_ID
  ) {
    window.gtag("event", eventName, params);
  }
}

function PageViewTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Check URL flags for Owner Exclusion (?me or ?owner=1 to mute, ?owner=0 to unmute)
    const params = new URLSearchParams(window.location.search);
    if (params.has("me") || params.get("owner") === "1") {
      try {
        localStorage.setItem("niaz_ignore_visit", "1");
        document.cookie =
          "niaz_owner=1; path=/; max-age=31536000; SameSite=Lax";
      } catch {
        // Ignore storage error
      }
    } else if (params.get("owner") === "0") {
      try {
        localStorage.removeItem("niaz_ignore_visit");
        document.cookie = "niaz_owner=0; path=/; max-age=0; SameSite=Lax";
        sessionStorage.removeItem("niaz_visit_pinged");
      } catch {
        // Ignore storage error
      }
    }

    // 2. Send GA4 Pageview
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (gaId && typeof window.gtag === "function") {
      window.gtag("config", gaId, {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    // 3. Send Real-Time Telegram Visitor Notification (once per session, non-owner only)
    try {
      const isOwner =
        localStorage.getItem("niaz_ignore_visit") === "1" ||
        document.cookie.includes("niaz_owner=1");
      const alreadyPinged = sessionStorage.getItem("niaz_visit_pinged") === "1";
      const isLocal =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname.startsWith("192.168.");

      if (!isOwner && !alreadyPinged && !isLocal) {
        sessionStorage.setItem("niaz_visit_pinged", "1");
        const timezone =
          Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        const screen = `${window.screen?.width || 0}x${window.screen?.height || 0}`;

        fetch("/api/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({
            path: url,
            referrer: document.referrer || "Direct (Тікелей)",
            screen,
            language: navigator.language || "",
            timezone,
          }),
        }).catch(() => {});
      }
    } catch {
      // Ignore storage errors in strict privacy browsers
    }
  }, [pathname, searchParams, gaId]);

  return null;
}

export default function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const measurementId = gaId || GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker gaId={measurementId} />
      </Suspense>
    </>
  );
}
