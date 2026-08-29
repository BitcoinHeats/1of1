import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Briefcase, BookOpen, Terminal } from "lucide-react";

const ZAPRITE_URL = "https://pay.zaprite.com/pl_1hOGF8dgST";

export function SiteHeader() {
  return (
    <>
      {/* Sticky brand bar */}
      <div className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-3">
            <Button asChild variant="ghost" size="sm" className="font-medium">
              <Link to="/how-to-buy-bitcoin">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Beginner Guide</span>
              </Link>
            </Button>
            <Button asChild size="sm" className="font-semibold">
              <a href={ZAPRITE_URL} target="_blank" rel="noopener noreferrer">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Consulting</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative isolate overflow-hidden border-b border-border/60 bg-background">
        {/* Technical grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 tech-grid" />

        {/* Royal blue glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-royal/20 blur-3xl"
        />
        {/* Scarlet glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-[-10%] h-80 w-80 rounded-full bg-scarlet/15 blur-3xl"
        />

        <div className="container relative mx-auto px-4 py-16 text-center sm:py-20 md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-royal/40 bg-royal/10 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.28em] text-royal">
            <Terminal className="h-3.5 w-3.5" />
            The Sovereign Stack
          </div>

          <h1 className="chrome-text-royal font-display mx-auto max-w-3xl text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl">
            1of1.Digital
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-display text-base font-bold uppercase tracking-[0.2em] text-scarlet sm:text-lg">
            Sovereign by Design
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A curated directory of services and tools for a self-sovereign,
            Bitcoin-native life and business. Payments, automation, custody, and
            more, chosen for people who refuse to hand control to anyone else.
          </p>
        </div>
      </header>
    </>
  );
}
