const cardIndex = require('./cardIndex')
const Deck = require('./Deck/deck')
const CardMap = require('./hashMap');

// local Hash map of cards
const cardHashMap = new CardMap;
//creating the hashmap
cardIndex.forEach(card => {
  cardHashMap.set(card.id, card)
})

// grabbing card ids from the index
let cardIds = cardIndex.map(card => card.id)
// creating a new deck with Card Ids
const myDeck = new Deck(cardIds);

// testing deal function 
// let dealtCards = myDeck.deal(5);

// testing finding cards from cardIndex and grabbing 
// specific info from data
let cards = []

// dealtCards.forEach(cardId => {
//   cards.push(cardHashMap.get(cardId));
// })

// discarding cards into discard pile
// myDeck.discard(dealtCards);

// myDeck.deal(1);



let dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

let myDeck2 = new Deck(dummyData);

console.log("Deck length:", myDeck2.deck.length)

let deal1 = myDeck2.deal(3);
let deal2 = myDeck2.deal(8);

console.log("Deck length:", myDeck2.deck.length);

let discard1 = myDeck2.discard(deal1);
let discard2 = myDeck2.discard(deal2);

console.log("Discard length:", myDeck2.discardPile.length)

let deal3 = myDeck2.deal(10);
let deal4 = myDeck2.deal(11);

console.log("Deck length:", myDeck2.deck.length);

let deal5 = myDeck2.deal(11);

console.log("Deck length", myDeck2.deck.length);








