import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          background: "linear-gradient(135deg, #0B0E14 0%, #1d1b4b 100%)",
          border: "6px solid #cca876",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "82px",
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
