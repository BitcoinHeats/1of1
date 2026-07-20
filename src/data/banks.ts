export type Region = "USA" | "Europe" | "UK" | "Global" | "Switzerland" | "Canada" | "Asia";

export interface Bank {
  id: string;
  name: string;
  tagline: string;
  description: string;
  region: Region;
  website: string;
  rating: number; // 1-5, how bitcoin-friendly
  type: "Bank" | "Neobank" | "Credit Union" | "App";
  features: {
    buyBitcoin: boolean; // Buy/sell BTC directly in-app
    selfCustodyFriendly: boolean; // Lets you send to your own wallet / exchange without freezing
    lightning: boolean; // Lightning network support
    debitCard: boolean; // Bitcoin-linked card
    mortgage: boolean; // Bitcoin-backed mortgage / lending product
    bitcoinBonds: boolean; // Bitcoin Bonds yield product
    vaults: boolean; // Yield-generating Vaults product
    noKYCHassle: boolean; // Smooth onboarding
  };
  bestFor: string;
}

/**
 * A curated list of banks and money apps that are known to work well with Bitcoin.
 * "Works well" means: they don't freeze accounts for buying crypto, allow transfers
 * to/from exchanges, or let you buy Bitcoin directly. Always do your own research —
 * policies change and availability varies by country.
 */
export const banks: Bank[] = [
  {
    id: "square",
    name: "Square",
    tagline: "Accept Bitcoin in your business",
    description:
      "From Block (the makers of Cash App), Square lets merchants and small businesses accept payments and tie into Bitcoin. A great on-ramp for sellers who want to start working with Bitcoin alongside everyday card payments.",
    region: "Global",
    website: "https://squareup.com",
    rating: 5,
    type: "App",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: true,
      debitCard: true,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "Merchants and businesses getting started with Bitcoin",
  },
  {
    id: "cash-app",
    name: "Cash App",
    tagline: "Buy Bitcoin in a few taps",
    description:
      "One of the easiest ways for beginners in the US to buy Bitcoin. You can buy, sell, send over Lightning, and withdraw to your own wallet — all from a friendly mobile app.",
    region: "USA",
    website: "https://cash.app",
    rating: 5,
    type: "App",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: true,
      debitCard: true,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "Total beginners in the US who want the simplest start",
  },
  {
    id: "strike",
    name: "Strike",
    tagline: "Bitcoin & Lightning made simple",
    description:
      "Built around Bitcoin and the Lightning Network. Great for cheap, instant payments and dollar-cost averaging into Bitcoin. Available in the US, Europe, and many other countries.",
    region: "Global",
    website: "https://strike.me",
    rating: 5,
    type: "App",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: true,
      debitCard: false,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "People who want low fees and Lightning payments",
  },
  {
    id: "river",
    name: "River",
    tagline: "Bitcoin-only, zero-fee recurring buys",
    description:
      "A US Bitcoin-only financial institution. Known for excellent customer support, no-fee recurring purchases, and easy withdrawals to your own wallet. A favorite for serious savers.",
    region: "USA",
    website: "https://river.com",
    rating: 5,
    type: "App",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: true,
      debitCard: false,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "US savers who want a trustworthy Bitcoin-only home",
  },
  {
    id: "swan",
    name: "Swan Bitcoin",
    tagline: "Automated Bitcoin savings",
    description:
      "Designed for stacking sats over time with automatic recurring buys. Transparent fees and easy self-custody withdrawals make it newbie-friendly for long-term savers.",
    region: "USA",
    website: "https://swanbitcoin.com",
    rating: 5,
    type: "App",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: false,
      debitCard: false,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "Set-and-forget recurring Bitcoin savings",
  },
  {
    id: "peoples-reserve",
    name: "Peoples Reserve",
    tagline: "Bitcoin-powered finance: earn, borrow, spend",
    description:
      "A Bitcoin-native financial platform that puts your Bitcoin to work. Earn yield through Bitcoin Bonds and Vaults, borrow against your BTC with self-repaying mortgages and lines of credit, and spend with a debit card — all without selling your assets. Collateral is secured with BitGo in a bankruptcy-remote structure.",
    region: "Global",
    website: "https://peoplesreserve.com",
    rating: 5,
    type: "Neobank",
    features: {
      buyBitcoin: false,
      selfCustodyFriendly: true,
      lightning: false,
      debitCard: true,
      mortgage: true,
      bitcoinBonds: true,
      vaults: true,
      noKYCHassle: false,
    },
    bestFor: "People who want to earn, borrow, and spend using Bitcoin as collateral",
  },
  {
    id: "revolut",
    name: "Revolut",
    tagline: "All-in-one money app with crypto",
    description:
      "A widely used app across Europe and the UK. You can buy Bitcoin in-app and, on supported plans, withdraw to your own wallet. Convenient as a daily-spend account too.",
    region: "Europe",
    website: "https://www.revolut.com",
    rating: 4,
    type: "Neobank",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: false,
      debitCard: true,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "Europeans wanting banking + crypto in one app",
  },
  {
    id: "monzo",
    name: "Monzo",
    tagline: "UK neobank that plays nice with exchanges",
    description:
      "A popular UK app bank. It doesn't sell Bitcoin itself, but generally allows transfers to reputable exchanges, making it a handy on-ramp for UK beginners.",
    region: "UK",
    website: "https://monzo.com",
    rating: 4,
    type: "Neobank",
    features: {
      buyBitcoin: false,
      selfCustodyFriendly: true,
      lightning: false,
      debitCard: true,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "UK users linking to an exchange",
  },
  {
    id: "wise",
    name: "Wise",
    tagline: "Low-cost global transfers",
    description:
      "Great for moving money internationally with low fees. Often used to fund exchange accounts in many currencies. No in-app Bitcoin, but a useful global banking tool.",
    region: "Global",
    website: "https://wise.com",
    rating: 4,
    type: "Neobank",
    features: {
      buyBitcoin: false,
      selfCustodyFriendly: true,
      lightning: false,
      debitCard: true,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "International transfers to fund exchanges",
  },
  {
    id: "fidor",
    name: "Bitwala / Nuri (legacy)",
    tagline: "European Bitcoin banking heritage",
    description:
      "A pioneering EU Bitcoin bank concept. Its spirit lives on in newer European crypto-friendly banks — check current availability before signing up.",
    region: "Europe",
    website: "https://www.bity.com",
    rating: 3,
    type: "Bank",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: false,
      debitCard: true,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: false,
    },
    bestFor: "EU users exploring native crypto banking",
  },
  {
    id: "xapo",
    name: "Xapo Bank",
    tagline: "Bitcoin-native private bank",
    description:
      "A licensed bank built around Bitcoin. Hold USD and BTC, earn interest, spend with a card, and withdraw over Lightning. Higher entry requirements but deeply Bitcoin-focused.",
    region: "Global",
    website: "https://www.xapobank.com",
    rating: 5,
    type: "Bank",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: true,
      debitCard: true,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: false,
    },
    bestFor: "Those wanting a full bank built around Bitcoin",
  },
  {
    id: "relai",
    name: "Relai",
    tagline: "Europe's simple Bitcoin-only app",
    description:
      "A Swiss Bitcoin-only app focused on simplicity. Buy Bitcoin in minutes and have it sent straight to your own wallet — perfect for privacy-minded European beginners.",
    region: "Switzerland",
    website: "https://relai.app",
    rating: 5,
    type: "App",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: false,
      debitCard: false,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "Europeans who want Bitcoin sent to self-custody",
  },
  {
    id: "bull-bitcoin",
    name: "Bull Bitcoin",
    tagline: "Canada's non-custodial Bitcoin exchange",
    description:
      "A Canadian Bitcoin-only service that never holds your coins — every purchase goes straight to your wallet. Strong self-custody ethos and Lightning support.",
    region: "Canada",
    website: "https://www.bullbitcoin.com",
    rating: 5,
    type: "App",
    features: {
      buyBitcoin: true,
      selfCustodyFriendly: true,
      lightning: true,
      debitCard: false,
      mortgage: false,
      bitcoinBonds: false,
      vaults: false,
      noKYCHassle: true,
    },
    bestFor: "Canadians who insist on self-custody",
  },
];

export const regions: Region[] = [
  "Global",
  "USA",
  "Canada",
  "UK",
  "Europe",
  "Switzerland",
  "Asia",
];

export const featureLabels: Record<keyof Bank["features"], string> = {
  buyBitcoin: "Buy Bitcoin in-app",
  selfCustodyFriendly: "Send to your own wallet",
  lightning: "Lightning support",
  debitCard: "Debit / spending card",
  mortgage: "Bitcoin-backed mortgage",
  bitcoinBonds: "Bitcoin Bonds",
  vaults: "Yield Vaults",
  noKYCHassle: "Easy sign-up",
};
