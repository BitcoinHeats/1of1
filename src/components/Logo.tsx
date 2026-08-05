import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** When true, only render the icon mark without the wordmark text. */
  iconOnly?: boolean;
}

/**
 * Hexagonal "sovereign" mark — inline SVG, royal blue frame + scarlet node.
 * No external image; scales crisply at any size.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10 shrink-0", className)}
      role="img"
      aria-label="1of1.Digital"
    >
      <defs>
        <linearGradient id="logo-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f9ff" />
          <stop offset="45%" stopColor="#7e8fa8" />
          <stop offset="52%" stopColor="#fbfdff" />
          <stop offset="100%" stopColor="#9aacc6" />
        </linearGradient>
      </defs>
      <path
        d="M32 7 L53 19.5 V44.5 L32 57 L11 44.5 V19.5 Z"
        fill="none"
        stroke="var(--royal)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 13 L48 22.5 V41.5 L32 51 L16 41.5 V22.5 Z"
        fill="var(--royal)"
        opacity="0.16"
      />
      <text
        x="32"
        y="41"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="23"
        fontWeight="700"
        fill="url(#logo-chrome)"
        textAnchor="middle"
      >
        1
      </text>
      <circle cx="47" cy="19.5" r="3.1" fill="var(--scarlet)" />
    </svg>
  );
}

/**
 * Brand lockup for 1of1.Digital — Sovereign by Design.
 * Chrome wordmark paired with the hex mark.
 */
export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-10 shrink-0 drop-shadow-[0_2px_6px_rgba(59,110,247,0.35)]" />
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="chrome-text font-display text-lg font-bold tracking-wide sm:text-xl">
            1of1.Digital
          </span>
          <span className="mt-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.32em] text-scarlet">
            Sovereign by Design
          </span>
        </span>
      )}
    </div>
  );
}
