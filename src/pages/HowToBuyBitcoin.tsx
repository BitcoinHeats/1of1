import { Link } from "react-router-dom";
import { useSeoMeta, useHead } from "@unhead/react";
import {
  Wallet,
  Search,
  BadgeCheck,
  Banknote,
  Bitcoin,
  ShieldCheck,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialShare } from "@/components/SocialShare";

const steps = [
  {
    icon: Search,
    title: "Pick a Bitcoin-friendly app",
    body: "Choose a bank or app from our list that's available in your country. For total beginners, Cash App (US), Strike (global), or Relai (Europe) are great starting points — they're simple and let you buy in minutes.",
  },
  {
    icon: BadgeCheck,
    title: "Sign up and verify your identity",
    body: "Create an account and complete the identity check (often called KYC). You'll usually need a photo ID and a selfie. This is standard for regulated services and usually takes just a few minutes.",
  },
  {
    icon: Banknote,
    title: "Deposit some money",
    body: "Link your bank account or debit card and transfer in a small amount to start — maybe $20–$50. You don't need a lot to learn how it all works. Some apps also let you set up automatic recurring buys.",
  },
  {
    icon: Bitcoin,
    title: "Buy your first Bitcoin",
    body: "Place a buy order for the amount you want. The app shows you the price and any fees upfront. Once confirmed, you'll see your Bitcoin balance appear — congratulations, you now own Bitcoin!",
  },
  {
    icon: Wallet,
    title: "Move it to your own wallet (self-custody)",
    body: "For full control, transfer your Bitcoin out of the app to a wallet only you control. This is called 'self-custody.' Good beginner wallets include BlueWallet (mobile) or a hardware wallet like a Trezor or Coldcard for larger amounts.",
  },
  {
    icon: ShieldCheck,
    title: "Protect your recovery phrase",
    body: "When you set up your own wallet, you'll get a recovery phrase (usually 12 or 24 words). This IS your Bitcoin — anyone with these words can take your funds. Write it down on paper, keep it offline, and never share it with anyone.",
  },
];

const faqs = [
  {
    q: "How much Bitcoin should I buy to start?",
    a: "Start small — an amount you're comfortable learning with, like $20–$50. The goal at first is to understand the process, not to invest heavily. Many people then set up small automatic recurring buys to build savings over time.",
  },
  {
    q: "Do I have to buy a whole Bitcoin?",
    a: "No. Bitcoin is divisible into 100 million smaller units called 'satoshis' (or 'sats'). You can buy any amount — even $5 worth. One Bitcoin is currently worth tens of thousands of dollars, but you can own a fraction.",
  },
  {
    q: "What are the fees?",
    a: "Fees vary by app. Some charge a percentage per purchase (often 1–2%), others charge a spread on the price. Lightning Network payments can be nearly free. Always check the fee shown before confirming a purchase.",
  },
  {
    q: "Is it safe?",
    a: "Bitcoin itself is very secure, but the risk is in how you store it. Leaving Bitcoin on an app means you trust that company. Moving it to your own wallet (self-custody) and protecting your recovery phrase is the safest approach — but it means the responsibility is yours.",
  },
  {
    q: "What if I lose my phone or the app shuts down?",
    a: "If your Bitcoin is on an app and the app disappears, you could lose access. This is why self-custody matters — with your own wallet, your recovery phrase lets you restore your funds on any compatible wallet, anywhere.",
  },
];

const HowToBuyBitcoin = () => {
  useSeoMeta({
    title: "How to Buy Your First Bitcoin — Step-by-Step Beginner Guide | BanksforBitcoin.com",
    description:
      "A simple, jargon-free guide to buying your first Bitcoin. Learn how to pick an app, verify your identity, buy Bitcoin, and move it to your own wallet for self-custody.",
    ogTitle: "How to Buy Your First Bitcoin — Beginner Guide",
    ogDescription:
      "Step-by-step guide for total beginners: pick an app, buy Bitcoin, and take self-custody. No jargon.",
    ogType: "article",
    ogUrl: "https://banksforbitcoin.com/how-to-buy-bitcoin",
    ogImage: "https://banksforbitcoin.com/og-image.png",
    twitterCard: "summary_large_image",
    twitterTitle: "How to Buy Your First Bitcoin — Beginner Guide",
    twitterDescription:
      "Step-by-step guide for total beginners: pick an app, buy Bitcoin, and take self-custody.",
    twitterImage: "https://banksforbitcoin.com/og-image.png",
  });

  useHead({
    link: [{ rel: "canonical", href: "https://banksforbitcoin.com/how-to-buy-bitcoin" }],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Buy Your First Bitcoin",
          description:
            "A simple, step-by-step guide for beginners to buy their first Bitcoin and take self-custody.",
          totalTime: "PT30M",
          step: steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title,
            text: s.body,
          })),
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="container mx-auto flex-1 px-4 py-10 sm:py-12">
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to all banks
          </Link>

          {/* Title */}
          <header className="mt-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Bitcoin className="h-3.5 w-3.5" />
              Beginner Guide
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              How to Buy Your First Bitcoin
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Never bought Bitcoin before? No problem. This plain-English guide
              walks you through every step — from picking an app to holding
              Bitcoin that only <em>you</em> control. No jargon, no hype.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Time to complete: about 30 minutes · Difficulty: beginner
            </p>
          </header>

          {/* Share buttons */}
          <div className="mt-6">
            <SocialShare
              url="https://banksforbitcoin.com/how-to-buy-bitcoin"
              title="How to Buy Your First Bitcoin — Beginner Guide"
            />
          </div>

          {/* Warning banner */}
          <Card className="mt-8 border-amber-400/40 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="flex gap-3 py-4 px-5">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-500" />
              <p className="text-sm text-foreground/80">
                <span className="font-semibold">Quick reality check:</span>{" "}
                Bitcoin's price goes up and down — sometimes a lot. Only put in
                money you can afford to leave there for years, and never invest
                more than you can afford to lose. This guide is educational, not
                financial advice.
              </p>
            </CardContent>
          </Card>

          {/* Steps */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight">The 6 steps</h2>
            <ol className="mt-6 space-y-5">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <Card className="transition-shadow hover:shadow-md motion-reduce:transition-none">
                    <CardContent className="flex gap-4 py-5 px-5 sm:px-6">
                      <div className="flex flex-col items-center gap-2 shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
                          {i + 1}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="hidden sm:block w-px flex-1 bg-border min-h-[2rem]" />
                        )}
                      </div>
                      <div className="pt-1">
                        <div className="flex items-center gap-2">
                          <step.icon className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                          {step.body}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </section>

          {/* Pro tip */}
          <Card className="mt-8 border-primary/30 bg-primary/5">
            <CardContent className="flex gap-3 py-5 px-5 sm:px-6">
              <Lightbulb className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-foreground/80">
                <span className="font-semibold">Pro tip:</span> Many apps let you
                set up <span className="font-semibold">automatic recurring buys</span> —
                for example, $25 every week. This is called "dollar-cost
                averaging" and it removes the stress of trying to time the
                market. It's how a lot of long-term Bitcoin savers build their
                stack.
              </p>
            </CardContent>
          </Card>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">
              Common questions
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.q}>
                  <CardContent className="py-5 px-5 sm:px-6">
                    <h3 className="font-bold text-base">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA back to banks */}
          <Card className="mt-12 text-center border-primary/30">
            <CardContent className="py-8 px-6">
              <h2 className="text-xl font-bold">Ready to pick your app?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse our hand-picked list of Bitcoin-friendly banks and apps.
              </p>
              <Button asChild size="lg" className="mt-5 font-semibold">
                <Link to="/">
                  Find a bank for Bitcoin
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
};

export default HowToBuyBitcoin;
