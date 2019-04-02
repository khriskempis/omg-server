const MarketPlace = require('./marketPlace');
const Deck = require('../Deck/deck');
const HashMap = require('../hashMap');
const cardIndex = require('../cardIndex');

describe('MarketPlace', ()=> {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const mockData = [
    { id: 1, sun: true, resource: "W"},
    { id: 2, sun: false, resource: "H"},
    { id: 3, sun: true, resource: "W"},
    { id: 4, sun: false, resource: "C"},
    { id: 5, sun: true, resource: "S"},
    { id: 6, sun: true, resource: "C"},
    { id: 7, sun: false, resource: "L"},
    { id: 8, sun: false, resource: "H"},
    { id: 9, sun: true, resource: "L"},
    { id: 10, sun: false, resource: "H"},
  ]
  const cardHashMap = new HashMap()
  mockData.forEach(card => {
    cardHashMap.set(card.id, card);
  })
  let mockDeck;
  let mockMarketPlace

  beforeEach(()=> {
    mockDeck = new Deck(cards)
    mockDeck.discardPile = [11, 12, 13, 14, 15]
    mockMarketPlace = new MarketPlace();
  })

  describe('marketPlace instance', ()=> {
    it('should create a new MarketPlace', ()=> {
      expect(mockMarketPlace.dayMarket).toEqual([]);
    })
  })

  describe('dayphase function', ()=> {
    it('should throw error on undefined Deck or Hashmap', ()=> {
      expect(()=> {
        mockMarketPlace.dayPhase()
      }).toThrow(Error);
    })

    it('should return array of resources', ()=> {
      mockMarketPlace.dayPhase(mockDeck, cardHashMap);
      expect(mockMarketPlace.dayMarket.length).toBeGreaterThanOrEqual(2);
    })
  })

  describe('nightphase function', ()=> {
    it('should throw error on undefined Deck or Hashmap', ()=> {
      expect(()=> {
        mockMarketPlace.nightPhase()
      }).toThrow(Error);
    })
    it('should return array of resources', ()=> {
      mockMarketPlace.nightPhase(mockDeck, cardHashMap);
      expect(mockMarketPlace.nightMarket.length).toBeGreaterThanOrEqual(2);
    })
  })

  describe('reset function', ()=> {

    it('should reset dayMarket and nightMarket', ()=> {
      mockMarketPlace.dayPhase(mockDeck, cardHashMap);
      mockMarketPlace.nightPhase(mockDeck, cardHashMap);
      mockMarketPlace.resetMarketPlace(mockDeck);
      expect(mockMarketPlace.dayMarket).toEqual([]);
      expect(mockMarketPlace.nightMarket).toEqual([]);
    })
  })
})