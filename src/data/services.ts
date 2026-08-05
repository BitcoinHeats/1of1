/**
 * Sovereign by Design — curated services & tools.
 *
 * A growing directory of services that help people run a self-sovereign,
 * Bitcoin-native life and business. New categories and entries are added
 * over time — currently spanning AI, Payments, Automation, and Sovereign Finance.
 */
export type ServiceCategory =
  | "AI"
  | "Payments"
  | "Automation"
  | "Sovereign Finance"
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
    id: "venice-ai",
    name: "Venice.ai",
    tagline: "Private, uncensored AI — your data stays yours",
    description:
      "Access leading AI models for text, image, video, audio, and code — all private or anonymized. While others log and analyze your prompts, Venice strips identifying metadata, offers zero-data-retention open-source models, and even hardware-secured TEE and end-to-end encrypted tiers. Uncensored by design, with an OpenAI-compatible API that plugs into any agent stack. Sovereign AI for people who refuse to hand their thoughts to a corporate server.",
    website: "https://venice.ai",
    category: "AI",
    rating: 5,
    badge: "Core",
    features: [
      "Uncensored text, image, video & audio AI",
      "Zero data retention on private models",
      "End-to-end encrypted + TEE privacy tiers",
      "OpenAI-compatible API for agents",
    ],
  },
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
    id: "workflow-ai",
    name: "WorkFlow AI",
    tagline: "AI automation audits & builds for operators",
    description:
      "A free AI audit that maps every workflow in your business, pinpoints where AI and automation save the most time and money, and then builds what it finds. Built by operators, for operators — start with a 30-minute alignment call and walk away with a written plan you own, no pitch. Turns the late-night admin and missed after-hours leads into automated systems that run 24/7.",
    website: "https://workflwai.com/",
    category: "Automation",
    rating: 5,
    badge: "New",
    features: [
      "Free workflow audit — plan yours to keep",
      "AI lead response in under 4 minutes, 24/7",
      "Builds on n8n, Make, Zapier, OpenAI & Anthropic",
      "Works with the CRM you already run",
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
  {
    id: "peoples-reserve",
    name: "Peoples Reserve",
    tagline: "Bitcoin-native finance: earn, borrow, spend",
    description:
      "A Bitcoin-native financial platform that puts your Bitcoin to work. Buy Bitcoin in-app, earn yield through Bitcoin Bonds and Vaults, borrow against your BTC with self-repaying mortgages and lines of credit, and spend with a debit card — all without selling your assets. Collateral is secured with BitGo in a bankruptcy-remote structure. Sovereign finance for people who want their Bitcoin to do more than sit still.",
    website: "https://peoplesreserve.com",
    category: "Sovereign Finance",
    rating: 5,
    badge: "Core",
    features: [
      "Buy Bitcoin in-app",
      "Bitcoin Bonds & yield Vaults",
      "Bitcoin-backed mortgages & credit lines",
      "Spend with a debit card — no selling required",
    ],
  },
];

export const categories: ServiceCategory[] = [
  "AI",
  "Payments",
  "Automation",
  "Sovereign Finance",
  "Custody",
  "Identity",
  "Communications",
];
