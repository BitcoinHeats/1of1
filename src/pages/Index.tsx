import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSeoMeta, useHead } from "@unhead/react";
import { Search, SearchX, BookOpen, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BankCard } from "@/components/BankCard";
import { ConsultingCTA } from "@/components/ConsultingCTA";
import { SocialShare } from "@/components/SocialShare";
import { banks, regions, type Region } from "@/data/banks";
import { cn } from "@/lib/utils";

type Filter = "All" | Region;

const Index = () => {
  useSeoMeta({
    title: "BanksforBitcoin.com — Find Bitcoin-Friendly Banks (Beginner Guide)",
    description:
      "A simple, beginner-friendly list of banks and apps that work well with Bitcoin. Find where you can safely buy Bitcoin and link your account without getting frozen.",
    ogTitle: "BanksforBitcoin.com — Banks That Work Well With Bitcoin",
    ogDescription:
      "A simple, beginner-friendly guide to banks and apps that let you buy Bitcoin without getting frozen.",
    ogType: "website",
    ogUrl: "https://banksforbitcoin.com",
    ogImage: "https://banksforbitcoin.com/og-image.png",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: "image/png",
    ogImageAlt: "BanksforBitcoin.com — banks that work well with Bitcoin",
    ogSiteName: "BanksforBitcoin.com",
    twitterCard: "summary_large_image",
    twitterTitle: "BanksforBitcoin.com — Banks That Work Well With Bitcoin",
    twitterDescription:
      "A simple, beginner-friendly guide to banks and apps that let you buy Bitcoin without getting frozen.",
    twitterImage: "https://banksforbitcoin.com/og-image.png",
  });

  useHead({
    link: [{ rel: "canonical", href: "https://banksforbitcoin.com/" }],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "BanksforBitcoin.com",
          url: "https://banksforbitcoin.com/",
          description:
            "A simple, beginner-friendly list of banks and apps that work well with Bitcoin.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://banksforbitcoin.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which banks work well with Bitcoin?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Banks and apps like Peoples Reserve, Cash App, Strike, River, Swan, Xapo Bank, and Relai are known to work well with Bitcoin. They let you buy Bitcoin, send it to your own wallet, or link to exchanges without freezing your account. Availability varies by country.",
              },
            },
            {
              "@type": "Question",
              name: "Can my bank freeze my account for buying Bitcoin?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Some traditional banks flag or freeze accounts when they detect crypto-related transactions. Using a Bitcoin-friendly bank or app from our list reduces this risk. Always start with small amounts and check your bank's crypto policy.",
              },
            },
            {
              "@type": "Question",
              name: "What is self-custody and why does it matter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Self-custody means moving your Bitcoin to a wallet you control, rather than leaving it on an exchange. This gives you true ownership — no one can freeze or take your funds. The most important rule: keep your recovery phrase safe and private.",
              },
            },
            {
              "@type": "Question",
              name: "How do I buy my first Bitcoin?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pick a Bitcoin-friendly app available in your country, sign up and verify your identity, deposit funds, and buy a small amount to start. Once comfortable, move your Bitcoin to your own wallet. See our step-by-step guide for full details.",
              },
            },
          ],
        }),
      },
    ],
  });

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...regions];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return banks.filter((bank) => {
      const matchesRegion =
        filter === "All" ||
        bank.region === filter ||
        (filter !== "Global" && bank.region === "Global");
      const matchesQuery =
        q === "" ||
        bank.name.toLowerCase().includes(q) ||
        bank.tagline.toLowerCase().includes(q) ||
        bank.description.toLowerCase().includes(q) ||
        bank.bestFor.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="container mx-auto flex-1 px-4 py-10 sm:py-12">
        {/* Search + filters */}
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name or feature…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 pl-12 text-base rounded-xl"
              aria-label="Search banks"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={cn("rounded-full", filter !== f && "bg-background")}
            >
              {f}
            </Button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "option" : "options"}
          {filter !== "All" && (
            <>
              {" "}for <span className="font-semibold text-foreground">{filter}</span>
            </>
          )}
        </p>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((bank) => (
              <BankCard key={bank.id} bank={bank} />
            ))}
          </div>
        ) : (
          <Card className="mt-8 border-dashed">
            <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <SearchX className="h-10 w-10 text-muted-foreground/50" />
              <p className="max-w-sm text-muted-foreground">
                No banks match your search. Try a different keyword or region.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
              >
                Clear filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Beginner tip → full guide */}
        <section className="mx-auto mt-16 max-w-3xl">
          <Card className="bg-accent/40 border-primary/20">
            <CardContent className="py-6 px-6 sm:px-8">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold">New to Bitcoin? Start here</h2>
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                Our full step-by-step guide walks you through buying your first
                Bitcoin and moving it to your own wallet — explained in plain
                English, no jargon.
              </p>
              <Button asChild className="font-semibold">
                <Link to="/how-to-buy-bitcoin">
                  Read the beginner guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Consulting CTA */}
        <ConsultingCTA />

        {/* Share this site */}
        <section className="mx-auto mt-12 max-w-3xl text-center">
          <SocialShare
            url="https://banksforbitcoin.com"
            title="BanksforBitcoin.com — Banks That Work Well With Bitcoin"
            className="justify-center"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Know someone who needs this? Share it.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
