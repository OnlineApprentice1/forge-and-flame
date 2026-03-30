import { ImageResponse } from "next/og";
import { palette, ogGradients } from "@/lib/palette";

export const runtime = "edge";
export const alt = "Forge & Flame Custom Metalworks — Thunder Bay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: "60px",
          background: ogGradients.background,
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "8%",
            width: "420px",
            height: "420px",
            background: ogGradients.glow,
            borderRadius: "50%",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(0deg, ${ogGradients.gridLine} 0px, ${ogGradients.gridLine} 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, ${ogGradients.gridLine} 0px, ${ogGradients.gridLine} 1px, transparent 1px, transparent 60px)`,
          }}
        />
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: palette.accent.hex,
          }}
        />
        {/* Tagline */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: ogGradients.accentText,
            marginBottom: 18,
            position: "relative",
          }}
        >
          Custom Welding & Metal Fabrication · Thunder Bay
        </div>
        {/* Business name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            color: palette.textPrimary.hex,
            position: "relative",
            letterSpacing: "0.02em",
          }}
        >
          Forge & Flame
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            lineHeight: 1.2,
            color: palette.textSecondary.hex,
            position: "relative",
            marginTop: 8,
          }}
        >
          Custom Metalworks
        </div>
        {/* Location */}
        <div
          style={{
            fontSize: 22,
            color: palette.textMuted.hex,
            marginTop: 24,
            position: "relative",
          }}
        >
          Thunder Bay · Lakehead Region · Northwestern Ontario
        </div>
      </div>
    ),
    { ...size }
  );
}
