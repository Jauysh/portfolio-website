"use client";

export default function ExecutivePortrait({
  alt,
  size = "hero",
}: {
  alt: string;
  size?: "hero" | "about";
}) {
  const dimensions =
    size === "hero"
      ? "w-[310px] h-[310px] sm:w-[390px] sm:h-[390px] lg:w-[460px] lg:h-[460px]"
      : "w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] md:w-[350px] md:h-[350px]";

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${dimensions}`}
    >
      {/* 1. Outer Environment Extension: Architectural Grid & Horizon Glow */}
      <div
        className="absolute -inset-12 sm:-inset-16 rounded-full opacity-90 dark:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 46%, rgba(11, 14, 20, 0.92) 0%, rgba(15, 23, 42, 0.65) 38%, rgba(204, 168, 118, 0.14) 58%, rgba(16, 185, 129, 0.08) 70%, transparent 86%)",
        }}
      />

      {/* 2. Subtle Architectural Coordinate Grid Blending Outward */}
      <div
        className="absolute -inset-8 sm:-inset-12 bg-[linear-gradient(to_right,rgba(204,168,118,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:28px_28px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at 50% 48%, transparent 25%, rgba(0,0,0,0.55) 48%, transparent 76%)",
          maskImage:
            "radial-gradient(circle at 50% 48%, transparent 25%, rgba(0,0,0,0.55) 48%, transparent 76%)",
        }}
      />

      {/* 3. Extended Bokeh Orbs (Continuing the Photo's Left Amber & Right Emerald Lights into the Page) */}
      <div className="absolute top-[38%] -left-6 sm:-left-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-amber-400/25 dark:bg-amber-400/20 blur-2xl" />
      <div className="absolute top-[48%] left-4 w-10 h-10 rounded-full bg-amber-300/30 dark:bg-amber-300/25 blur-md" />
      <div className="absolute top-[40%] -right-6 sm:-right-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-emerald-400/25 dark:bg-emerald-400/20 blur-2xl" />
      <div className="absolute top-[46%] right-3 w-12 h-12 rounded-full bg-emerald-300/30 dark:bg-emerald-300/25 blur-md" />

      {/* 4. Subtle Orbital Tech Ring */}
      <div
        className="absolute inset-2 sm:inset-3 rounded-full border border-amber-500/15 dark:border-white/10"
        style={{
          WebkitMaskImage:
            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, transparent 45%, transparent 60%, rgba(0,0,0,0.6) 100%)",
          maskImage:
            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, transparent 45%, transparent 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* 5. Core Portrait with Multi-Stop Radial + Bottom Atmospheric Dissolve */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "radial-gradient(closest-side at 50% 46%, #000 46%, rgba(0,0,0,0.82) 62%, rgba(0,0,0,0.38) 78%, rgba(0,0,0,0.08) 91%, transparent 100%)",
          maskImage:
            "radial-gradient(closest-side at 50% 46%, #000 46%, rgba(0,0,0,0.82) 62%, rgba(0,0,0,0.38) 78%, rgba(0,0,0,0.08) 91%, transparent 100%)",
        }}
      >
        <img
          src="/avatar.jpg?v=3"
          alt={alt}
          width={640}
          height={640}
          className="w-full h-full object-cover object-center brightness-[1.03] contrast-[1.04]"
        />
      </div>
    </div>
  );
}
