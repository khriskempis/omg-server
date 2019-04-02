
class MarketPlace {
  constructor(){
    this.dayMarket = [];
    this.nightMarket = [];
  }

  dayPhase(deck, hashmap){
    if(deck == undefined || hashmap == undefined){
      throw new Error('Must pass in Deck Object or Card HashMap')
    }

    let suns = 0;
    while(suns < 2){
      let cardId = deck.deal(1);
      let card = hashmap.get(cardId[0]);

      this.dayMarket.push(card.resource);

      if(card.sun){
        suns++
      }
    }
    console.log("DayMarket ", this.dayMarket)
    return this.dayMarket;
  }

  nightPhase(deck, hashmap){
    if(deck == undefined || hashmap == undefined){
      throw new Error('Must pass in Deck Object or Card HashMap')
    }
    let suns = 0;
    while(suns < 2){
      let cardId = deck.deal(1);
      let card = hashmap.get(cardId[0]);

      this.nightMarket.push(card.resource);

      if(card.sun){
        suns++
      }
    }
    console.log("NightMarket ", this.nightMarket);
    return this.nightMarket;
  }

  resetMarketPlace(){
    this.dayMarket = [];
    this.nightMarket = [];
    console.log('MarketPlace reset');
  }
}

module.exports = MarketPlace;