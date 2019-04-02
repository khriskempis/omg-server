const card_index = [
  {
    id: 1,
    name: "Brick Manufacture",
    g_name: "Ziegelei",
    price: 2,
    vp: 2,
    sun: false,
    type: "C",
    resource: "C",
    resources_req: {
      h: null,
      c: 1,
      l: null,
      s: 3,
      w: null
    },
    produce: "Brick",
    value: 2,
    chain: ["Clay", "Coal"]
  },
  {
    id: 2,
    name: "Shoemaker",
    g_name: "Schusterwerkstatt",
    price: 12,
    vp: 4,
    sun: true,
    type: "H",
    resource: "H",
    resources_req: {
      h: 4,
      l: null,
      c: 2,
      s: null,
      w: null
    },
    produce: "Shoes",
    value: 8,
    chain: ["Leather"]
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
    id: 4,
    name: "Bakery",
    g_name: "Backerei",
    price: 9,
    vp: 3,
    sun: true,
    type: "H",
    resource: "H",
    resources_req: {
      h: null,
      c: 3,
      l: null,
      s: 2,
      w: null
    },
    produce: "Bread",
    value: 4,
    chain: ["Coal", "Grain"]
  },
  {
    id: 5,
    name: "Cattle Ranch",
    g_name: "Rinderfarm",
    price: 6,
    vp: 2,
    sun: false,
    type: "C",
    resource: "C",
    resources_req: {
      h: 2,
      c: null,
      l: null,
      s: null,
      w: 2
    },
    produce: "Cattle",
    value: 3,
    chain: ["Hay"]
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
  {
    id: 9,
    name: "Weaving Mill",
    g_name: "Weberi",
    price: 5,
    vp: 2,
    sun: false,
    type: "W",
    resource: "W",
    resources_req: {
      h: null,
      c: 1,
      l: null,
      s: null,
      w: 3
    },
    produce: "Cloth",
    value: 3,
    chain: ["Wool"]
  },
  {
    id: 10,
    name: "Tailor's Shop",
    g_name: "Naherei",
    price: 7,
    vp: 3,
    sun: true,
    type: "W",
    resource: "W",
    resources_req: {
      h: null,
      c: 3,
      l: null,
      s: 2,
      w: null
    },
    produce: "Shirt",
    value: 4,
    chain: ["Coal", "Cloth"]
  },
  {
    id: 11,
    name: "Tannery",
    g_name: "Gerberei",
    price: 15,
    vp: 3,
    sun: false,
    type: "C",
    resource: "C",
    resources_req: {
      h: null,
      c: null,
      l: 3,
      s: null,
      w: 2
    },
    produce: "Leather",
    value: 6,
    chain: ["Cattle"]
  },
  {
    id: 12,
    name: "Food Factory",
    g_name: "Nahrungsfabrik",
    price: 21,
    vp: 5,
    sun: false,
    type: "H",
    resource: "H",
    resources_req: {
      h: null,
      c: 2,
      l: 4,
      s: null,
      w: null
    },
    produce: "Food",
    value: 8,
    chain: ["Bread"]
  },
  {
    id: 13,
    name: "Mill",
    g_name: "Muhle",
    price: 2,
    vp: 2,
    sun: false,
    type: "H",
    resource: "H",
    resources_req: {
      h: 3,
      c: null,
      l: null,
      s: null,
      w: 1
    },
    produce: "Grain",
    value: 2,
    chain: ["Hay"]
  },
]

module.exports = card_index