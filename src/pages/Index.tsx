import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSeoMeta, useHead } from "@unhead/react";
import { Search, SearchX, BookOpen, ArrowRight, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceCard } from "@/components/ServiceCard";
import { ConsultingCTA } from "@/components/ConsultingCTA";
import { SocialShare } from "@/components/SocialShare";
import {
  services,
  categories,
  type ServiceCategory,
} from "@/data/services";
import { cn } from "@/lib/utils";

type Filter = "All" | ServiceCategory;

const Index = () => {
  useSeoMeta({
    title: "1of1.Digital — Sovereign by Design | Services for a Self-Sovereign Life",
    description:
      "A curated directory of services and tools for a self-sovereign, Bitcoin-native life and business — payments, automation, custody, and more. Chosen for people who refuse to hand control to anyone else.",
    ogTitle: "1of1.Digital — Sovereign by Design",
    ogDescription:
      "A curated directory of services and tools for a self-sovereign, Bitcoin-native life and business.",
    ogType: "website",
    ogUrl: "https://1of1.digital",
    ogImage: "https://1of1.digital/og-image.png",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: "image/png",
    ogImageAlt: "1of1.Digital — Sovereign by Design",
    ogSiteName: "1of1.Digital",
    twitterCard: "summary_large_image",
    twitterTitle: "1of1.Digital — Sovereign by Design",
    twitterDescription:
      "A curated directory of services and tools for a self-sovereign, Bitcoin-native life and business.",
    twitterImage: "https://1of1.digital/og-image.png",
  });

  useHead({
    link: [{ rel: "canonical", href: "https://1of1.digital/" }],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "1of1.Digital — Sovereign by Design",
          url: "https://1of1.digital/",
          description:
            "A curated directory of services and tools for a self-sovereign, Bitcoin-native life and business.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://1of1.digital/?q={search_term_string}",
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
              name: "What does 'Sovereign by Design' mean?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It means choosing tools and services that keep you in control — your money, your data, your time. Instead of handing custody or decisions to a third party, you hold your own keys, accept payments to your own wallets, and automate your own workflows. 1of1.Digital curates the services that make that possible.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of services are listed here?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Private AI like Venice.ai, payments and invoicing tools like Zaprite, automation platforms like WorkFlow AI and Zapier, sovereign finance like Peoples Reserve, Bitcoin mining-heating systems like Bitcoin Heats, and — as the directory grows — custody, identity, and communications services. Every entry is picked because it helps you stay self-sovereign and Bitcoin-native.",
              },
            },
            {
              "@type": "Question",
              name: "Are these services safe to use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We curate for sovereignty and usefulness, but this is an educational resource, not financial advice. Always do your own research, start with small amounts, and check a service's current policies and availability in your country before signing up.",
              },
            },
          ],
        }),
      },
    ],
  });

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  // Only show category filters that currently have at least one service.
  const activeCategories = useMemo(
    () => categories.filter((c) => services.some((s) => s.category === c)),
    [],
  );
  const roadmapCategories = useMemo(
    () => categories.filter((c) => !activeCategories.includes(c)),
    [activeCategories],
  );

  const filters: Filter[] = ["All", ...activeCategories];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory = filter === "All" || service.category === filter;
      const matchesQuery =
        q === "" ||
        service.name.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="container mx-auto flex-1 px-4 py-10 sm:py-12">
        {/* Search */}
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services by name or capability…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 rounded-xl border-royal/25 bg-card pl-12 font-mono text-base placeholder:font-sans focus-visible:border-royal focus-visible:ring-royal/40"
              aria-label="Search services"
            />
          </div>
        </div>

        {/* Active category filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full font-mono text-xs uppercase tracking-wider",
                filter !== f && "border-royal/30 bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </Button>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "service" : "services"}
          {filter !== "All" && (
            <>
              {" "}in{" "}
              <span className="font-semibold text-royal">{filter}</span>
            </>
          )}
        </p>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <Card className="mt-8 border-dashed border-royal/25">
            <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <SearchX className="h-10 w-10 text-muted-foreground/50" />
              <p className="max-w-sm text-muted-foreground">
                No services match your search. Try a different keyword or
                category.
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

        {/* Roadmap — categories coming as we build this out */}
        {roadmapCategories.length > 0 && (
          <section className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-xl border border-dashed border-border/70 bg-card/40 p-5">
              <div className="flex items-center gap-2">
                <Plus className="h-4 w-4 text-royal" />
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  On the roadmap — more as we build this out
                </h2>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {roadmapCategories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border/70 px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Beginner tip → full guide */}
        <section className="mx-auto mt-16 max-w-3xl">
          <Card className="border-royal/25 bg-royal/5">
            <CardContent className="px-6 py-6 sm:px-8">
              <div className="mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-royal" />
                <h2 className="font-display text-lg font-bold tracking-wide">
                  New to self-custody? Start here
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                Sovereignty starts with holding your own keys. Our step-by-step
                guide walks you through buying your first Bitcoin and moving it
                to a wallet only you control — explained in plain English, no
                jargon.
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
            url="https://1of1.digital"
            title="1of1.Digital — Sovereign by Design"
            className="justify-center"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Know someone building a sovereign stack? Share it.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
