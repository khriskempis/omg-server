class Town {
  constructor(){
    this.buildings = [
      {
        id: "A",
        image: "image",
        name: 'Charburner',
        g_name: "Kohlerei",
        required_resource: {
          s: 2,
          l: 1
        },
        produce: "Coal",
        value: 1,
        chain: ["Lumber"],
        worker: false
      },
      {
        id: "B",
        image: "image",
        name: 'Charburner',
        g_name: "Kohlerei",
        required_resource: {
          s: 2,
          l: 1
        },
        produce: "Coal",
        value: 1,
        chain: ["Lumber"],
        worker: false
      }

    ]
  }
 
get myBuildings(){
  return this.buildings;
}

_findBuilding(id){
  return this.buildings.find(building =>  building.id == id);
}

// add buildings

build(building, deck, cardIndex){

  const card = this._readCard(deck, cardIndex);

  const newBuilding = {
    id: card.id,
    image: "image",
    type: card.type,
    name: card.name,
    g_name: card.name,
    required_resource: card.required_resource,
    produce: card.produce,
    value: card.value,
    chain: card.chain,
    worker: false
  }

  this.buildings.push(newBuilding);
  console.log("added ", newBuilding);
}

// place worker

// produce building

}

module.exports = Town