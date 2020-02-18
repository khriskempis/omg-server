const MarketPlace = require("../GameObjects/marketPlace");
const Deck = require("../GameObjects/deck");
const HashMap = require("../GameObjects/hashMap");
const cardIndex = require("../cardIndex");

describe("MarketPlace", () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const mockData = [
    { id: 1, sun: true, resource: "W" },
    { id: 2, sun: false, resource: "H" },
    { id: 3, sun: true, resource: "W" },
    { id: 4, sun: false, resource: "C" },
    { id: 5, sun: true, resource: "S" },
    { id: 6, sun: true, resource: "C" },
    { id: 7, sun: false, resource: "L" },
    { id: 8, sun: false, resource: "H" },
    { id: 9, sun: true, resource: "L" },
    { id: 10, sun: false, resource: "H" }
  ];
  const cardHashMap = new HashMap();
  mockData.forEach(card => {
    cardHashMap.set(card.id, card);
  });
  let mockDeck;
  let mockMarketPlace;

  beforeEach(() => {
    mockDeck = new Deck(cards, cardHashMap);
    mockDeck.discardPile = [11, 12, 13, 14, 15];
    mockMarketPlace = new MarketPlace(cardHashMap, mockDeck);
  });

  describe("marketPlace instance", () => {
    it("should create a new MarketPlace", () => {
      expect(mockMarketPlace.dayMarket).toEqual([]);
    });
  });

  describe("sunrise function", () => {
    it("should throw error on undefined Deck or Hashmap", () => {
      mockMarketPlace.deck = undefined;
      expect(() => {
        mockMarketPlace.sunrise();
      }).toThrow(Error);
    });

    it("should return array of resources", () => {
      mockMarketPlace.sunrise(mockDeck, cardHashMap);
      expect(mockMarketPlace.dayMarket.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("sunset function", () => {
    it("should throw error on undefined Deck or Hashmap", () => {
      mockMarketPlace.deck = undefined;
      expect(() => {
        mockMarketPlace.sunset();
      }).toThrow(Error);
    });
    it("should return array of resources", () => {
      mockMarketPlace.sunset(mockDeck, cardHashMap);
      expect(mockMarketPlace.nightMarket.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("reset function", () => {
    it("should reset dayMarket and nightMarket", () => {
      mockMarketPlace.sunrise(mockDeck, cardHashMap);
      mockMarketPlace.sunset(mockDeck, cardHashMap);
      mockMarketPlace.resetMarketPlace(mockDeck);
      expect(mockMarketPlace.dayMarket).toEqual([]);
      expect(mockMarketPlace.nightMarket).toEqual([]);
    });
  });
});
