
class MarketPlace {
  constructor(cardMap, deck){
    this.dayMarket = [];
    this.nightMarket = [];
    this.cardMap = cardMap;
    this.deck = deck;
  }

  _readCard(){
    const cardId = this.deck.deal(1);
    const card = this.cardMap.get(cardId.id.toString())
    return card
  }

  sunrise(){
    if(this.deck == undefined || this.cardMap == undefined){
      throw new Error('Must pass in Deck Object or Card HashMap')
    }

    let suns = 0;
    while(suns < 2){
      let card = this._readCard();

      this.dayMarket.push({
        id: card.id,
        resource: card.resource
      });

      if(card.sun){
        suns++
      }
    }
    console.log("DayMarket ", this.dayMarket)
    return this.dayMarket;
  }

  sunset(){
    if(this.deck == undefined || this.cardMap == undefined){
      throw new Error('Must pass in Deck Object or Card HashMap')
    }
    let suns = 0;
    while(suns < 2){
      let card = this._readCard();

      this.nightMarket.push({
        id: card.id,
        resource: card.resource});

      if(card.sun){
        suns++
      }
    }
    console.log("NightMarket ", this.nightMarket);
    return this.nightMarket;
  }

  resetMarketPlace(){
    this.deck.discard(this.dayMarket.map(card => card.id));
    this.deck.discard(this.nightMarket.map(card => card.id));
    this.dayMarket = [];
    this.nightMarket = [];
    console.log('MarketPlace reset');
  }
}

module.exports = MarketPlace;