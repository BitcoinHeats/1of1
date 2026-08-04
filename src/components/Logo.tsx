import { cn } from "@/lib/utils";

/**
 * Hosted URL for the official 1of1.Digital logo (uploaded to Blossom).
 */
export const LOGO_URL =
  "https://blossom.ditto.pub/d81a008bc0dc2c58c3c110a351fb3677da9d70b6ed4186c5bf435211cca0b55a.jpeg";

interface LogoProps {
  className?: string;
  /** When true, only render the icon mark without the wordmark text. */
  iconOnly?: boolean;
}

/**
 * Brand logo for 1of1.Digital.
 * Uses the official uploaded logo image paired with a wordmark.
 */
export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-12 w-12 shrink-0" />
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">
            1of1<span className="text-primary">.Digital</span>
          </span>
          <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Bitcoin-Friendly Banking
          </span>
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="1of1.Digital logo"
      className={cn("rounded-xl object-cover", className)}
    />
  );
}
