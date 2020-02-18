const Town = require('./town');
const cardIndex = require('../cardIndex');
const CardHashMap = require('../hashMap');

describe('Town Object', ()=> {

  const cardHashMap = new CardHashMap()

  const cardMap = cardIndex.forEach(card => {
    cardHashMap.set(card.id, card);
  })

  const charburner = {
    id: "A",
    image: "image",
    name: 'Charburner',
    g_name: "Kohlerei",
    required_resource: {
      s: 2,
      l: 1
    },
    produce: "Coal",
    value: 1,
    chain: ["Lumber"],
    hasWorker: {
      placed: false,
      efficient: false,
      assitant: false
    },
    produce: 0
  }

  let mockTown 

  beforeEach(()=> {
    mockTown = new Town(cardMap, charburner);
  })

  describe('town instance', ()=> {
    expect(mockTown.myBuildings()).toEqual([charburner]);
  })
})