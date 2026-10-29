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
      {/* 1. Infinite Feathering Ambient Environment Field (Zero Hard Edges) */}
      <div
        className="absolute -inset-20 sm:-inset-28 blur-3xl opacity-80 dark:opacity-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side at 50% 48%, rgba(11, 14, 20, 0.85) 0%, rgba(204, 168, 118, 0.16) 42%, rgba(16, 185, 129, 0.10) 68%, transparent 100%)",
        }}
      />

      {/* 2. Subtle Architectural Coordinate Grid Blending Outward */}
      <div
        className="absolute -inset-12 sm:-inset-16 bg-[linear-gradient(to_right,rgba(204,168,118,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:32px_32px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(closest-side at 50% 48%, transparent 20%, rgba(0,0,0,0.45) 52%, transparent 96%)",
          maskImage:
            "radial-gradient(closest-side at 50% 48%, transparent 20%, rgba(0,0,0,0.45) 52%, transparent 96%)",
        }}
      />

      {/* 3. Extended Bokeh Orbs (Continuing the Photo's Left Amber & Right Emerald Lights into the Page) */}
      <div className="absolute top-[36%] -left-8 sm:-left-14 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-amber-400/20 dark:bg-amber-400/18 blur-3xl" />
      <div className="absolute top-[46%] left-2 w-12 h-12 rounded-full bg-amber-300/25 dark:bg-amber-300/20 blur-xl" />
      <div className="absolute top-[38%] -right-8 sm:-right-14 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-emerald-400/20 dark:bg-emerald-400/18 blur-3xl" />
      <div className="absolute top-[45%] right-2 w-14 h-14 rounded-full bg-emerald-300/25 dark:bg-emerald-300/20 blur-xl" />

      {/* 4. Core Portrait with Ultra-Smooth Multi-Stop Closest-Side Dissolve */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "radial-gradient(closest-side at 50% 46%, #000 38%, rgba(0,0,0,0.88) 54%, rgba(0,0,0,0.52) 70%, rgba(0,0,0,0.16) 85%, transparent 99%)",
          maskImage:
            "radial-gradient(closest-side at 50% 46%, #000 38%, rgba(0,0,0,0.88) 54%, rgba(0,0,0,0.52) 70%, rgba(0,0,0,0.16) 85%, transparent 99%)",
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
