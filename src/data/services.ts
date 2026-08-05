/**
 * Sovereign by Design — curated services & tools.
 *
 * A growing directory of services that help people run a self-sovereign,
 * Bitcoin-native life and business. New categories and entries are added
 * over time — start with Payments and Automation.
 */
export type ServiceCategory =
  | "Payments"
  | "Automation"
  | "Banking"
  | "Custody"
  | "Identity"
  | "Communications";

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  category: ServiceCategory;
  /** Key capabilities — rendered as a checklist on the card. */
  features: string[];
  /** 1–5, how well it serves a sovereign stack. */
  rating: number;
  /** Optional ribbon, e.g. "Core" / "New". */
  badge?: string;
}

export const services: Service[] = [
  {
    id: "zaprite",
    name: "Zaprite",
    tagline: "Bitcoin-native invoicing & payments",
    description:
      "Send invoices and accept Bitcoin and Lightning payments for your business — with funds settling to your own custody. No middleman holds your money. Built for freelancers and companies that want to get paid in sats and keep full control of every cent.",
    website: "https://zaprite.com",
    category: "Payments",
    rating: 5,
    badge: "Core",
    features: [
      "Bitcoin & Lightning payments",
      "Self-custody settlements",
      "Invoicing & accounting export",
      "No middleman custody",
    ],
  },
  {
    id: "zapier",
    name: "Zapier",
    tagline: "Automate the busywork across 7,000+ apps",
    description:
      "Connect thousands of apps and build no-code workflows that run your operation while you sleep. The backbone of a lean, independent business that scales without hiring a team — triggers, actions, and automations that keep you sovereign over your time.",
    website: "https://zapier.com",
    category: "Automation",
    rating: 5,
    badge: "Core",
    features: [
      "7,000+ app integrations",
      "No-code workflows",
      "Automated triggers & actions",
      "Scales without headcount",
    ],
  },
];

export const categories: ServiceCategory[] = [
  "Payments",
  "Automation",
  "Banking",
  "Custody",
  "Identity",
  "Communications",
];
