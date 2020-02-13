const cardIndex = require("./cardIndex");
const HashMap = require("./hashMap");

const Deck = require("./Deck/deck");
const MarketPlace = require("./MarketPlace/marketPlace");
const Town = require("./Town/town");

// local Hash map of cards
const cardHashMap = new HashMap();
//creating the hashmap
cardIndex.forEach(card => {
  cardHashMap.set(card.id, card);
});

// console.log(cardHashMap._slots[1].value.sun)

// grabbing card ids from the index
let cardIds = cardIndex.map(card => card.id);

// creating a new deck with Card Ids
const myDeck = new Deck(cardIds, cardHashMap);

// console.log(myDeck.deal(5));

// testing deal function
let dealtCards = myDeck.deal(5);
let hand = myDeck.deal(4);
// testing finding cards from cardIndex and grabbing
// specific info from data
let cards = [];

dealtCards.forEach(cardId => {
  cards.push(cardHashMap.get(cardId));
});

// discarding cards into discard pile
myDeck.discard(hand);

// myDeck.deal(1);

// Marketplace testing
const myMarketPlace = new MarketPlace();

// console.log(cardHashMap.get(1));
// myMarketPlace.sunset(myDeck, cardHashMap);
// myMarketPlace.sunrise(myDeck, cardHashMap);
// myMarketPlace.resetMarketPlace(myDeck);

// Town testing

const myTown = new Town();

// console.log(myTown.build();
