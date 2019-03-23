const card_index = [
  {
    id: 1,
    name: "Charburner",
    g_name: "Kohlerei",
    price: null,
    vp: null,
    sun: false,
    type: null,
    resource: null,
    resources_req: {
      h: 2,
      c: null,
      l: 1,
      s: null,
      w: null
    },
    produce: "Coal",
    value: 1,
    chain: ["Lumber"]
  },
  {
    id: 2,
    name: "Charburner",
    g_name: "Kohlerei",
    price: null,
    vp: null,
    sun: false,
    type: null,
    resource: null,
    resources_req: {
      h: null,
      l: 1,
      c: 2,
      s: null,
      w: null
    },
    produce: "Coal",
    value: 1,
    chain: ["Lumber"]
  },
  {
    id: 3,
    name: "Sawmill",
    g_name: "Sagemuhle",
    price: 3,
    vp: 2,
    sun: true,
    type: "L",
    resource: "L",
    resources_req: {
      h: null,
      c: 2,
      l: null,
      s: 2,
      w: null
    },
    produce: "Plank",
    value: 2,
    chain: ["Lumber"]
  },
  {
    id: 6,
    name: "Butcher",
    g_name: "Fleischerei",
    price: 15,
    vp: 4,
    sun: true,
    type: "W",
    resource: "W",
    resources_req: {
      h: null,
      c: 3,
      l: 3,
      s: null,
      w: null
    },
    produce: "Meat",
    value: 7,
    chain: ["Wool"]
  },
  {
    id: 7,
    name: "Weaving Mill",
    g_name: "Weberei",
    price: 8,
    vp: 2,
    sun: true,
    type: "W",
    resource: "W",
    resources_req: {
      h: null,
      c: null,
      l: 2,
      s: 2,
      w: null
    },
    produce: "Cloth",
    value: 3,
    chain: ["Wool"]
  },
  {
    id: 8,
    name: "Bakery",
    g_name: "Backerei",
    price: 9,
    vp: 3,
    sun: true,
    type: "H",
    resource: "H",
    resources_req: {
      h: 2,
      c: null,
      l: null,
      s: null,
      w: null,
    },
    produce: "Cloth",
    value: 3,
    chain: ["Wool"]
  },
]

module.exports = card_index