import { Check, ExternalLink, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Service } from "@/data/services";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 sovereign-fit rating`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-royal text-royal"
              : "fill-muted text-muted-foreground/30",
          )}
        />
      ))}
    </div>
  );
}

/** Small HUD corner bracket. */
function Corner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-3 w-3 border-royal/60",
        className,
      )}
    />
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-royal/25 bg-card transition-all duration-200 hover:border-royal/60 hover:shadow-[0_0_28px_-6px_rgba(59,110,247,0.45)] motion-reduce:transition-none">
      {/* Scarlet HUD accent line */}
      <span aria-hidden="true" className="hud-line absolute inset-x-0 top-0 h-px" />

      {/* Corner brackets */}
      <Corner className="left-2 top-2 border-l border-t" />
      <Corner className="right-2 top-2 border-r border-t" />
      <Corner className="bottom-2 left-2 border-b border-l" />
      <Corner className="bottom-2 right-2 border-b border-r" />

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-xl font-bold tracking-wide text-foreground">
              {service.name}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {service.tagline}
            </p>
          </div>
          {service.badge && (
            <Badge className="shrink-0 border-scarlet/40 bg-scarlet/15 font-mono text-[0.6rem] uppercase tracking-wider text-scarlet hover:bg-scarlet/20">
              {service.badge}
            </Badge>
          )}
        </div>
        <div className="flex items-center justify-between pt-2">
          <Stars rating={service.rating} />
          <Badge
            variant="outline"
            className="border-royal/40 font-mono text-[0.6rem] font-medium uppercase tracking-wider text-royal"
          >
            {service.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-foreground/80">
          {service.description}
        </p>

        <ul className="space-y-1.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 shrink-0 text-royal" />
              <span className="text-foreground/85">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2">
          <Button asChild className="w-full font-semibold">
            <a href={service.website} target="_blank" rel="noopener noreferrer">
              Visit {service.name}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
