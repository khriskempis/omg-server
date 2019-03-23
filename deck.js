class Deck {
  constructor(cards){
    this.deck = cards
    this.discardedCards = [];
  }

  deal(num){

    if(this.deck == undefined){
      throw new Error('Deck is empty; Make sure to pass cards to Deck constructor')
    }
    const cards = []
    for(let i=0; i<num; i++){
      cards.push(this.deck.shift())
    }
    return cards;
  }
}

module.exports = Deck