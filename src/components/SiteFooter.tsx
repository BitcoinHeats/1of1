export function SiteFooter() {
  return (
    <footer className="relative isolate border-t border-border/60 bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 tech-grid opacity-50" />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="chrome-text font-display text-lg font-bold tracking-wide">
            1of1.Digital
          </span>
          <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.32em] text-scarlet">
            Sovereign by Design
          </span>

          <p className="max-w-2xl text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Not financial advice.
            </span>{" "}
            An educational directory of services we believe support a
            self-sovereign life. Policies, availability, and features change
            often, so always do your own research before signing up or moving
            funds.
          </p>

          <p className="text-xs text-muted-foreground">
            Vibed with{" "}
            <a
              href="https://shakespeare.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-royal underline-offset-4 hover:underline"
            >
              Shakespeare
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
