// Supported malls
export type Mall = {
  id: string
  name: string
}

export const malls: Mall[] = [
  { id: "central-world", name: "Central World" },
  { id: "siam-paragon", name: "Siam Paragon" },
  { id: "icon-siam", name: "Icon Siam" },
  { id: "emquartier", name: "EmQuartier" },
  { id: "emporium", name: "Emporium" },
  { id: "emsphere", name: "Emsphere" },
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
  { id: "siam-center", name: "Siam Center" },
  { id: "central-rama-2", name: "Central Rama 2" },
  { id: "central-ramintra", name: "Central Ramintra" },
  { id: "central-changwattana", name: "Central Changwattana" },
  { id: "futurepark-rangsit", name: "Future Park Rangsit" },
  { id: "silom-complex", name: "Silom Complex" },
  { id: "central-plaza-rama-3", name: "Central Plaza Rama 3" },
  { id: "central-chitlom", name: "Central Chitlom" },
  { id: "central-embassy", name: "Central Embassy" },
  { id: "the-mall-ngamwongwan", name: "The Mall Ngamwongwan" },
  { id: "the-mall-bangkae", name: "The Mall Bangkae" },
  { id: "the-mall-bangkapi", name: "The Mall Bangkapi" },
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
    id: "ktb-iconic",
    entity: "ktb",
    name: "KTB Iconic",
    color: "#C09158",
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
    id: "bay-krungsri-exclusive",
    entity: "bay",
    name: "Krungsri Exclusive",
    color: "#3C2E2B",
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
    id: "bay-central-the1-the-black",
    entity: "bay",
    name: "Central The1 The Black",
    color: "#000000",
  },
  {
    id: "bay-siam-takashiyama-finest",
    entity: "bay",
    name: "Siam Takashiyama Finest",
    color: "#C5C6C9",
  },
  {
    id: "bay-siam-takashiyama-finest-invitation",
    entity: "bay",
    name: "Siam Takashiyama Finest - Invitation",
    color: "#2D292A",
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
  {
    id: "uob-mercedes",
    entity: "uob",
    name: "UOB Mercedes",
    color: "#000000",
  },
  {
    id: "bbl-m-luxe",
    entity: "bbl",
    name: "BBL M Luxe",
    color: "#ED1B24",
  },
  {
    id: "bbl-m-legend",
    entity: "bbl",
    name: "BBL M Legend",
    color: "#002C5D",
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
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
    {
      entity: "uob",
      location: "Floor B1",
      spotsAvailable: 1,
      cards: [
        "uob-infinite",
        "uob-privimiles",
        "uob-premier",
        "uob-zenith",
        "uob-mercedes",
      ],
    },
  ],
  "siam-paragon": [
    {
      entity: "scb",
      location: "Floor 1 (Zone South)",
      spotsAvailable: 8,
      cards: ["scb-private-banking"],
    },
    {
      entity: "ktb",
      location: "Floor 1 (Zone South)",
      spotsAvailable: 7,
      cards: ["ktb-precious-plus"],
    },
    {
      entity: "kbank",
      location: "Floor M (Zone North)",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
    {
      entity: "uob",
      location: "Floor 1 (Zone South)",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-zenith", "uob-mercedes"],
    },
    {
      entity: "bbl",
      location: "Floor 1 (Zone South)",
      spotsAvailable: 1,
      cards: ["bbl-m-luxe", "bbl-m-legend"],
    },
  ],
  emquartier: [
    {
      entity: "bay",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["bay-krungsri-exclusive"],
    },
    {
      entity: "uob",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-zenith"],
    },
    {
      entity: "bbl",
      location: "Building C, Floor M",
      spotsAvailable: 1,
      cards: ["bbl-m-luxe", "bbl-m-legend"],
    },
    {
      entity: "scb",
      location: "-",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
  ],
  emporium: [
    {
      entity: "bbl",
      location: "Building B, Floor MU",
      spotsAvailable: 5,
      cards: ["bbl-m-luxe", "bbl-m-legend"],
    },
  ],
  emsphere: [
    {
      entity: "bbl",
      location: "Floor M",
      spotsAvailable: 8,
      cards: ["bbl-m-luxe", "bbl-m-legend"],
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
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "central-plaza-westgate": [
    {
      entity: "scb",
      location: "Floor G",
      spotsAvailable: 1,
      cards: ["scb-first", "scb-private-banking"],
    },
    {
      entity: "bay",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
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
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
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
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
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
      cards: ["ktb-precious-plus", "ktb-iconic"],
    },
    {
      entity: "bay",
      location: "Floor 1",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
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
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
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
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
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
      cards: ["ktb-precious-plus", "ktb-iconic"],
    },
    {
      entity: "kbank",
      location: "Floor M",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
    {
      entity: "bay",
      location: "Floor 1",
      spotsAvailable: 1,
      cards: [
        "bay-siam-takashiyama-finest",
        "bay-siam-takashiyama-finest-invitation",
      ],
    },
  ],
  "siam-center": [
    {
      entity: "kbank",
      location: "Floor MC/MB",
      spotsAvailable: 1,
      cards: ["kbank-one-siam-signature", "kbank-one-siam-infinite"],
    },
  ],
  "central-rama-2": [
    {
      entity: "bay",
      location: "Floor 1, Moon Parking",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "central-ramintra": [
    {
      entity: "bay",
      location: "Floor 2",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "central-changwattana": [
    {
      entity: "bay",
      location: "Floor 2, Parking 2",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "futurepark-rangsit": [
    {
      entity: "bay",
      location: "Floor G",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "silom-complex": [
    {
      entity: "bay",
      location: "Floor 6",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "central-plaza-rama-3": [
    {
      entity: "bay",
      location: "Floor B1",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "central-chitlom": [
    {
      entity: "bay",
      location: "Floor B/3, CL Tower",
      spotsAvailable: 1,
      cards: [
        "bay-central-the1-luxe",
        "bay-central-the1-black",
        "bay-central-the1-the-black",
      ],
    },
  ],
  "the-mall-ngamwongwan": [
    {
      entity: "uob",
      location: "-",
      spotsAvailable: 1,
      cards: ["uob-premier"],
    },
    {
      entity: "bbl",
      location: "-",
      spotsAvailable: 1,
      cards: ["bbl-m-luxe", "bbl-m-legend"],
    },
  ],
  "the-mall-bangkae": [
    {
      entity: "uob",
      location: "-",
      spotsAvailable: 1,
      cards: ["uob-infinite", "uob-privimiles", "uob-premier", "uob-zenith"],
    },
    {
      entity: "bbl",
      location: "-",
      spotsAvailable: 1,
      cards: ["bbl-m-luxe", "bbl-m-legend"],
    },
  ],
  "the-mall-bangkapi": [
    {
      entity: "uob",
      location: "Floor G",
      spotsAvailable: 1,
      cards: ["uob-premier"],
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

/**
 * Converts a mapping of mall IDs to parking entities into a mapping of card id to mall information.
 *
 * @param mallToParkingEntities - A record where the keys are mall IDs and the values are arrays of parking entities.
 * @returns A record where the keys are card numbers and the values are arrays of mall information objects.
 *
 * Each mall information object contains:
 * - id: The ID of the mall.
 * - name: The name of the mall.
 * - location: The location of the parking entity within the mall.
 */
function getCardToMalls(
  mallToParkingEntities: Record<string, Parking[]>
): Record<string, { id: string; name: string; location: string }[]> {
  return Object.entries(mallToParkingEntities).reduce(
    (cardToMalls, [mallId, parkingEntities]) => {
      const mallName = malls.find((mall) => mall.id === mallId)?.name || ""
      parkingEntities.forEach(({ cards, location }) => {
        cards.forEach((card) => {
          cardToMalls[card] = [
            ...(cardToMalls[card] || []),
            { id: mallId, name: mallName, location },
          ]
        })
      })
      return cardToMalls
    },
    {} as Record<string, { id: string; name: string; location: string }[]>
  )
}

export const cardToMalls = getCardToMalls(mallToParkingEntities)
