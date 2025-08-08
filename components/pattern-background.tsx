export default function PatternBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Base */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Hex grid + tiny dots (pure SVG patterns, no gradients) */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          {/* Honeycomb hexagon grid tile */}
          <pattern id="hex-grid" width="24" height="21" patternUnits="userSpaceOnUse">
            {/* One regular hex per tile */}
            <path
              d="M12 0 L24 6 L24 15 L12 21 L0 15 L0 6 Z"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Dense tiny dots */}
          <pattern id="tiny-dots" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.045)" />
          </pattern>
        </defs>

        {/* Layer order: dots then hex so hex is subtly visible */}
        <rect width="100%" height="100%" fill="url(#tiny-dots)" />
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>

      {/* Blurred hexagon objects (depth + motionless glow, no gradients) */}
      {/* Big emerald soft hex */}
      <svg className="absolute -top-24 left-6 h-64 w-64 blur-3xl opacity-40">
        <polygon
          points="96,0 192,48 192,144 96,192 0,144 0,48"
          fill="rgba(16,185,129,0.18)"
        />
      </svg>

      {/* Big fuchsia soft hex */}
      <svg className="absolute top-1/4 -right-10 h-72 w-72 blur-3xl opacity-35">
        <polygon
          points="115,0 230,57 230,171 115,228 0,171 0,57"
          fill="rgba(217,70,239,0.16)"
        />
      </svg>

      {/* Big amber soft hex */}
      <svg className="absolute bottom-[-4rem] left-1/2 h-56 w-56 -translate-x-1/2 blur-3xl opacity-30">
        <polygon
          points="88,0 176,44 176,132 88,176 0,132 0,44"
          fill="rgba(245,158,11,0.15)"
        />
      </svg>

      {/* A few crisp outlined hexes for tech feel */}
      <svg className="absolute top-24 left-1/3 h-16 w-16 opacity-70">
        <polygon
          points="32,0 64,16 64,48 32,64 0,48 0,16"
          fill="transparent"
          stroke="rgba(16,185,129,0.6)"
          strokeWidth="1"
        />
      </svg>

      <svg className="absolute top-1/2 right-24 h-10 w-10 opacity-70">
        <polygon
          points="20,0 40,10 40,30 20,40 0,30 0,10"
          fill="transparent"
          stroke="rgba(217,70,239,0.6)"
          strokeWidth="1"
        />
      </svg>

      <svg className="absolute bottom-24 left-10 h-12 w-12 opacity-70">
        <polygon
          points="24,0 48,12 48,36 24,48 0,36 0,12"
          fill="transparent"
          stroke="rgba(245,158,11,0.55)"
          strokeWidth="1"
        />
      </svg>

      {/* Subtle noise texture on top */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-15"
        style={{ backgroundImage: "url(/textures/noise.png)" }}
      />
    </div>
  )
}
