import { Link } from "react-router-dom";
import { Logo, LogoMark } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Briefcase, BookOpen } from "lucide-react";

const ZAPRITE_URL = "https://pay.zaprite.com/pl_1hOGF8dgST";

export function SiteHeader() {
  return (
    <>
      {/* Sticky brand bar for recognition while scrolling */}
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <header className="relative overflow-hidden border-b bg-gradient-to-br from-primary/10 via-background to-background">
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <LogoMark className="h-20 w-20 drop-shadow-lg sm:h-24 sm:w-24" />
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            1of1<span className="text-primary">.Digital</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold uppercase tracking-[0.15em] text-primary sm:text-lg">
            Banks That Work Well With Bitcoin
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            New to Bitcoin? Skip the confusion. Here's a simple, hand-picked list
            of banks and apps that won't freeze your account for buying Bitcoin —
            and make getting started easy.
          </p>
        </div>
      </header>
    </>
  );
}
