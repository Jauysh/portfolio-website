import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #0B0E14 0%, #1d1b4b 100%)",
          border: "3px solid #cca876",
          boxShadow: "inset 0 0 12px rgba(16, 185, 129, 0.35)",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "28px",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#cca876",
          }}
        >
          AJ
        </span>
      </div>
    ),
    { ...size }
  );
}
