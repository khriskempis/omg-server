const cardIndex = require('./cardIndex')
const Deck = require('./deck')
const CardMap = require('./hashMap');

// local Hash map of cards
const cardHashMap = new CardMap;
//creating the hashmap
cardIndex.forEach(card => {
  cardHashMap.set(card.id, card)
})

// grabbing card ids from the index
cardIds = cardIndex.map(card => card.id)
// creating a new deck with Card Ids
const myDeck = new Deck(cardIds)
// console.log(cardIds)

// testing deal function 
let dealtCards = myDeck.deal(5);
// console.log(dealtCards);


// testing finding cards from cardIndex and grabbing 
// specific info from data
let cards = []

dealtCards.forEach(cardId => {
  cards.push(cardHashMap.get(cardId));
})

// discarding cards into discard pile
myDeck.discard(dealtCards);

myDeck.deal(1);

// console.log(myDeck.deck);

