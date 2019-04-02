const cardIndex = require('./cardIndex');
const CardMap = require('./hashMap');

const Deck = require('./Deck/deck');
const MarketPlace = require('./MarketPlace/marketPlace');

// local Hash map of cards
const cardHashMap = new CardMap;
//creating the hashmap
cardIndex.forEach(card => {
  cardHashMap.set(card.id, card)
})

// console.log(cardHashMap._slots[1].value.sun)

// grabbing card ids from the index
let cardIds = cardIndex.map(card => card.id)

// creating a new deck with Card Ids
const myDeck = new Deck(cardIds);

console.log(myDeck._deck);


// testing deal function 
// let dealtCards = myDeck.deal(5);

// testing finding cards from cardIndex and grabbing 
// specific info from data
// let cards = []

// dealtCards.forEach(cardId => {
//   cards.push(cardHashMap.get(cardId));
// })

// discarding cards into discard pile
// myDeck.discard(dealtCards);

 
// myDeck.deal(1);





const myMarketPlace = new MarketPlace();

// console.log(cardHashMap.get(1))
myMarketPlace.dayPhase(myDeck, cardHashMap);
myMarketPlace.nightPhase(myDeck, cardHashMap);







