// Supported malls
export type Mall = {
  id: string
  name: string
}

export const malls: Mall[] = [
  { id: "central-world", name: "Central World" },
  { id: "siam-paragon", name: "Siam Paragon" },
  { id: "emquartier", name: "EmQuartier" },
  { id: "central-plaza-grand-rama-9", name: "Central Plaza Grand Rama 9" },
  { id: "central-plaza-ladprao", name: "Central Plaza Ladprao" },
  { id: "central-plaza-westgate", name: "Central Plaza Westgate" },
  { id: "central-festival-eastville", name: "Central Festival EastVille" },
  { id: "mega-bangna", name: "Mega Bangna" },
  { id: "impact-muang-thong-thani", name: "Impact Muang Thong Thani" },
  { id: "central-plaza-pinklao", name: "Central Plaza Pinklao" },
  { id: "central-plaza-bangna", name: "Central Plaza Bangna" },
  { id: "central-plaza-salaya", name: "Central Plaza Salaya" },
  { id: "samyan-mitrtown", name: "Samyan Mitrtown" },
  { id: "esplanade-cineplex-ratchada", name: "Esplanade Cineplex Ratchada" },
  { id: "major-cineplex-sukhumvit", name: "Major Cineplex Sukhumvit" },
  { id: "major-cineplex-pinklao", name: "Major Cineplex Pinklao" },
  { id: "icon-siam", name: "Icon Siam" },
  { id: "siam-center", name: "Siam Center" },
  { id: "central-rama-2", name: "Central Rama 2" },
  { id: "central-ramintra", name: "Central Ramintra" },
  { id: "central-changwattana", name: "Central Changwattana" },
  { id: "futurepark-rangsit", name: "Future Park Rangsit" },
  { id: "silom-complex", name: "Silom Complex" },
  { id: "central-plaza-rama-3", name: "Central Plaza Rama 3" },
  { id: "central-chitlom", name: "Central Chitlom" },
  { id: "central-embassy", name: "Central Embassy" },
  { id: "the-mall-ngamwong", name: "The Mall Ngamwong" },
  { id: "the-mall-bangkae", name: "The Mall Bangkae" },
]

// Supported credit cards
export type CreditCard = {
  id: string
  entity: string
  name: string
  color: string
}

export const creditCards: CreditCard[] = [
  {
    id: "scb-first",
    entity: "scb",
    name: "SCB First",
    color: "#363771",
  },
  {
    id: "scb-private-banking",
    entity: "scb",
    name: "SCB Private Banking",
    color: "#eed5c5",
  },
  {
    id: "ktb-precious-plus",
    entity: "ktb",
    name: "KTB Precious Plus",
    color: "#353236",
  },
  {
    id: "kbank-the-wisdom",
    entity: "kbank",
    name: "The Wisdom",
    color: "#96001c",
  },
  {
    id: "kbank-one-siam-signature",
    entity: "kbank",
    name: "One Siam Signature",
    color: "#393937",
  },
  {
    id: "kbank-one-siam-infinite",
    entity: "kbank",
    name: "One Siam Infinite",
    color: "#011929",
  },
  {
    id: "bay-central-the1-luxe",
    entity: "bay",
    name: "Central The1 Luxe",
    color: "#5B5B5E",
  },
  {
    id: "bay-central-the1-black",
    entity: "bay",
    name: "Central The1 Black",
    color: "#211F20",
  },
  {
    id: "uob-infinite",
    entity: "uob",
    name: "UOB Infinite",
    color: "#464337",
  },
  {
    id: "uob-privimiles",
    entity: "uob",
    name: "UOB Privimiles",
    color: "#1F1F1F",
  },
  {
    id: "uob-premier",
    entity: "uob",
    name: "UOB Premier",
    color: "#CAD2DE",
  },
  {
    id: "uob-zenith",
    entity: "uob",
    name: "UOB Zenith",
    color: "#243845",
  },
]

// Parking data
export type Parking = {
  entity: string
  location: string
  spotsAvailable: number
  cards: string[]
}

export const mallToParkingEntities: Record<string, Parking[]> = {
  "central-world": [
    {
      entity: "scb",
      location: "Floor B1 (Zone B)",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "ktb",
      location: "Floor B1 (Zone B)",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "bay",
      location: "Floor B1, B2",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
    {
      entity: "uob",
      location: "Floor B1",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-premier", "uob-zenith"],
    },
  ],
  "siam-paragon": [
    {
      entity: "scb",
      location: "Floor B1 (Zone South)",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "ktb",
      location: "Floor B1 (Zone South)",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "kbank",
      location: "Floor B1 (Zone North)",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
    {
      entity: "uob",
      location: "Floor B1 (Zone North)",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-zenith"],
    },
  ],
  emquartier: [
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "uob",
      location: "-",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-zenith"],
    },
  ],
  "central-plaza-grand-rama-9": [
    {
      entity: "scb",
      location: "Floor 3",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "ktb",
      location: "Floor 4 (Zone A)",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "uob",
      location: "-",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-premier", "uob-zenith"],
    },
  ],
  "central-plaza-ladprao": [
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "ktb",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "bay",
      location: "Floor 3",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-plaza-westgate": [
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "bay",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-festival-eastville": [
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "ktb",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "bay",
      location: "Floor 2, Parking 2",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "mega-bangna": [
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "bay",
      location: "Floor G",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "impact-muang-thong-thani": [
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
  ],
  "central-plaza-pinklao": [
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "ktb",
      location: "Floor 1",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "bay",
      location: "Floor 1",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-plaza-bangna": [
    {
      entity: "ktb",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "bay",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-plaza-salaya": [
    {
      entity: "ktb",
      location: "Floor 1",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "bay",
      location: "Floor G",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "samyan-mitrtown": [
    {
      entity: "kbank",
      location: "Floor 1",
      spotsAvailable: 1,
      cards: ["kbank-the-wisdom"],
    },
  ],
  "esplanade-cineplex-ratchada": [
    {
      entity: "kbank",
      location: "-",
      spotsAvailable: 1,
      cards: ["kbank-the-wisdom"],
    },
  ],
  "major-cineplex-sukhumvit": [
    {
      entity: "kbank",
      location: "-",
      spotsAvailable: 1,
      cards: ["kbank-the-wisdom"],
    },
  ],
  "major-cineplex-pinklao": [
    {
      entity: "kbank",
      location: "-",
      spotsAvailable: 1,
      cards: ["kbank-the-wisdom"],
    },
  ],
  "icon-siam": [
    {
      entity: "ktb",
      location: "Floor 1",
      spotsAvailable: 1,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "kbank",
      location: "Floor M",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "siam-center": [
    {
      entity: "kbank",
      location: "Floor MC/MB",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
    {
      entity: "uob",
      location: "-",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-premier", "uob-zenith"],
    },
  ],
  "central-rama-2": [
    {
      entity: "bay",
      location: "Floor 1, Moon Parking",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-ramintra": [
    {
      entity: "bay",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-changwattana": [
    {
      entity: "bay",
      location: "Floor 2, Parking 2",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "futurepark-rangsit": [
    {
      entity: "bay",
      location: "Floor G",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "silom-complex": [
    {
      entity: "bay",
      location: "Floor 6",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-plaza-rama-3": [
    {
      entity: "bay",
      location: "Floor B1",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-chitlom": [
    {
      entity: "bay",
      location: "Floor B/3, CL Tower",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "the-mall-ngamwong": [
    {
      entity: "uob",
      location: "-",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-premier", "uob-zenith"],
    },
  ],
  "the-mall-bangkae": [
    {
      entity: "uob",
      location: "-",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-premier", "uob-zenith"],
    },
  ],
  "central-embassy": [
    {
      entity: "bay",
      location: "-",
      spotsAvailable: 1,
      cards: ["bay-central-the1-black"],
    },
  ],
}
