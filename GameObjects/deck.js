class Deck {
  constructor(cards, cardMap) {
    // init with shuffled deck;
    this.deck = this._shuffle(cards);
    this.discardPile = [];
    this.cardMap = cardMap;
  }

  get _deck() {
    return this.deck;
  }

  _readCard() {
    // grabs first card and returns data
    const cardId = this.deck.shift();
    const card = this.cardMap.get(cardId.toString());
    return card;
  }

  deal(num) {
    // make sure deck is init with card ids
    if (this.deck == undefined) {
      throw new Error(
        "Deck is empty; Make sure to pass cards to Deck constructor"
      );
    }
    // shuffle in discard pile when deck is 5 cards
    if (this.deck.length < 5) {
      this._shuffleDiscardPile();
    }

    if (num == 1) {
      const card = this._readCard();
      console.log("card dealt", card);
      return card;
    } else {
      const cards = [];
      for (let i = 0; i < num; i++) {
        // deal out from beginning of deck
        const card = this._readCard();
        cards.push(card);
      }
      console.log(cards.length, "cards dealt");
      return cards;
    }
  }

  discard(cards) {
    // check if cards is empty                              
    if (cards.length == 0) {
      throw new Error("Must pass in cards; No cards to discard");
    }
    // set discard pile to be the old and recently discarded pile
    this.discardPile = [...this.discardPile, ...cards];
    console.log("cards discarded");
  }

  _shuffleDiscardPile() {
    // shuffle discard pile
    const shuffledCards = this._shuffle(this.discardPile);
    // set deck to be the shuffled cards appended to original deck
    this.deck = [...this.deck, ...shuffledCards];
    console.log(this.deck.length, "cards shuffled", this.deck);
  }

  _shuffle(arr) {
    if (arr == undefined || arr.length == 0) {
      throw new Error("Empty Deck; Must pass in cards to shuffle");
    }
    const shuffledArr = [...arr];
    // Knuth shuffle algorithm
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      let index = Math.floor(Math.random() * i);
      let temp = shuffledArr[index];
      shuffledArr[index] = shuffledArr[i];
      shuffledArr[i] = temp;
    }
    return shuffledArr;
  }
}

module.exports = Deck;
