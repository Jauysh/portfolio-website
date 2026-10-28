import { ImageResponse } from "next/og";

export const alt =
  "Azamat Jauysh — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0e1a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.28), transparent 45%), radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.22), transparent 45%)",
          color: "#f8fafc",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #06b6d4, #10b981)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#020617",
                fontWeight: 900,
                fontSize: "24px",
              }}
            >
              AJ
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                AZAMAT JAUYSH
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#38bdf8",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Full-Cycle Engineer & IT Architect
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              backgroundColor: "rgba(15, 23, 42, 0.75)",
              fontSize: "15px",
              color: "#e2e8f0",
            }}
          >
            KK · EN · RU | B2B SaaS & Enterprise Systems
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              maxWidth: "1020px",
            }}
          >
            Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect
          </div>
          <div
            style={{
              fontSize: "23px",
              color: "#94a3b8",
              lineHeight: 1.45,
              maxWidth: "960px",
            }}
          >
            End-to-end architect of multimodal AI EdTech SaaS (OmniCheck), high-load
            Olympiad & school MIS platforms, and 7-campus network & 100 TB+ cloud
            infrastructure.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "42px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#38bdf8" }}>
                7 Campuses
              </span>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                WAN/VLAN · CAPsMAN · VPN
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#34d399" }}>
                1,000+ Users
              </span>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                High-Load Cloud Run & MIS
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#a78bfa" }}>
                100 TB+ Cloud
              </span>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                Workspace IAM & Multi-Tenant DB
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#fbbf24" }}>
                11 Systems
              </span>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                Production AI SaaS & ERP
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: "16px",
              color: "#cbd5e1",
              fontWeight: 600,
            }}
          >
            a.jauysh@gmail.com · t.me/jauysh
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
