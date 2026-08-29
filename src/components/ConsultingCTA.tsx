import { Briefcase, ArrowRight, Check, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZAPRITE_URL = "https://pay.zaprite.com/pl_1hOGF8dgST";

const inclusions = [
  "Accept Bitcoin payments from your customers",
  "Set up self-custody for your business treasury",
  "Bitcoin-backed lending & mortgage strategies",
  "Automate operations with a sovereign stack",
];

export function ConsultingCTA() {
  return (
    <section className="mt-16">
      <div className="relative isolate overflow-hidden rounded-2xl border border-royal/30 bg-gradient-to-br from-royal/15 via-card to-background shadow-[0_0_40px_-12px_rgba(59,110,247,0.4)]">
        {/* Scarlet glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-scarlet/15 blur-3xl"
        />
        {/* Royal glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-royal/20 blur-3xl"
        />

        <div className="relative grid gap-8 p-6 sm:p-10 md:grid-cols-2 md:items-center">
          {/* Left: pitch */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/40 bg-royal/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-royal">
              <Briefcase className="h-3.5 w-3.5" />
              Business Consulting
            </div>

            <h2 className="mt-4 font-display text-2xl font-bold tracking-wide sm:text-3xl">
              Want help building your sovereign business?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
              We'll guide you step-by-step, from accepting your first Bitcoin
              payment to automating your workflow and securing your treasury.
              Book time with us and we'll handle the hard parts so you don't
              have to.
            </p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="font-semibold">
                <a href={ZAPRITE_URL} target="_blank" rel="noopener noreferrer">
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Secure checkout via Zaprite · Pay with Bitcoin
              </span>
            </div>
          </div>

          {/* Right: visual badge */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-royal/30 blur-2xl" />
              <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-royal/40 bg-primary text-primary-foreground shadow-xl shadow-primary/30">
                <Bitcoin className="h-20 w-20" strokeWidth={2.25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
