import React from 'react';

interface BrandMarkProps {
  className?: string;
}

/**
 * Geometric Swiss-editorial emblem for COMMON HOURS (Issue No. 15).
 * Two architectural paths (Signal Coral "C" and Cobalt Blue "H") meeting
 * at a shared Warm Ochre proximity nexus inside a Charcoal frame.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'w-11 h-11' }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0`}
      aria-hidden="true"
    >
      <rect width="64" height="64" fill="#181715" />
      <rect x="4" y="4" width="56" height="56" fill="#F7F3EB" />
      <path d="M10 10H32V24H22V40H32V54H10V10Z" fill="#E04F3E" />
      <path
        d="M32 10H42V26H44V10H54V54H44V38H42V54H32V38H26V26H32V10Z"
        fill="#1B45B8"
      />
      <rect
        x="24"
        y="24"
        width="16"
        height="16"
        fill="#F2B735"
        stroke="#181715"
        strokeWidth="2.5"
      />
      <rect x="30" y="30" width="4" height="4" fill="#181715" />
    </svg>
  );
};

interface BrandLogoProps {
  variant?: 'header' | 'footer';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header' }) => {
  if (variant === 'footer') {
    return (
      <div className="inline-flex items-center gap-4">
        <BrandMark className="w-12 h-12 border border-cream/30" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-2xl tracking-tight text-cream leading-none">
              COMMON HOURS
            </span>
            <span className="px-2 py-0.5 bg-ochre text-charcoal font-sans font-bold text-[11px]">
              NO. 15
            </span>
          </div>
          <span className="block font-serif italic text-sm text-ochre mt-1">
            A Journal of Everyday Human Connection
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3.5">
      <BrandMark className="w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-200 group-hover:scale-[0.97]" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-xl sm:text-[1.65rem] leading-none tracking-tight text-charcoal group-hover:text-coral transition-colors">
            COMMON HOURS
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 bg-charcoal text-ochre font-sans font-bold text-[10px] leading-none">
            ISSUE 15
          </span>
        </div>
        <span className="font-serif italic text-xs sm:text-sm text-charcoal-slate mt-0.5">
          A Journal of Everyday Human Connection
        </span>
      </div>
    </div>
  );
};
