const cardIndex = require('./cardIndex')
const Deck = require('./deck')
const CardMap = require('./hashMap');


const cardHashMap = new CardMap;
//
cardIndex.forEach(card => {
  cardHashMap.set(card.id, card)
})

cardIds = cardIndex.map(card => card.id)

const myDeck = new Deck(cardIds)

let dealtCards = myDeck.deal(5);

//

console.log(dealtCards);

let cards = []

dealtCards.forEach(cardId => {
  cards.push(cardHashMap.get(cardId).produce);
})

console.log(cards);
