const Deck = require('./deck');

describe('Deck Class', ()=> {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const mockCards = [1, 2, 3, 4, 5]
  let mockDeck 

  beforeEach(()=> {
    mockDeck = new Deck(cards);
  })

  describe('deck Instance', ()=> {

    it('should throw an error on empty cards', ()=> {
      expect(()=> {
        new Deck();
      }).toThrow(Error);
    })
  
    it('should shuffle cards passed to constructor', ()=> {
      expect(mockDeck.deck).not.toEqual(cards)
    })
  
    it('should start with empty discard pile', ()=> {
      expect(mockDeck.discardPile.length).toEqual(0);
    })
  
  })
  
  describe('deal functionality', ()=> {

    it('should throw error if dealing from an empty deck', ()=> {
      mockDeck.deck = undefined;
      expect(()=> {
        mockDeck.deal(2);
      }).toThrow(Error);
    })

    it('should deal the correct number of cards', ()=> {
      const dealtCards = mockDeck.deal(2)
      expect(dealtCards.length).toEqual(2);
      expect(mockDeck.deck.length).toEqual(cards.length -2)
    })
  
    it('should reshuffle cards when deck is less than 10', ()=> {
      mockDeck.deck = [...mockCards];
      mockDeck.discardPile = [...mockCards]
      mockDeck.deal(2);
      expect(mockDeck.deck).toEqual(expect.arrayContaining(mockCards))
    })
  })

  describe('discard functionality', ()=> {

    it('should throw error on passing in empty arr', ()=> {
      let emptyCards = [];
      expect(()=> {
        mockDeck.discard(emptyCards);
      }).toThrow(Error);
    })

    it('should discard cards', ()=> {
      mockDeck.discard(mockCards);
      expect(mockDeck.discardPile.length).toEqual(mockCards.length);
    })
  })
})