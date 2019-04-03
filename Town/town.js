class Town {
  constructor(cardMap, charburner){
    this.buildings = [charburner]
    this.cardMap = cardMap
  }
 
get myBuildings(){
  return this.buildings;
}

_readCard(id){
  let card = this.cardMap.get(id.toString());
  return card; 
}

_findBuilding(id){
  const building = this.buildings.find(building => building.id == id);
  if(building === undefined){
    throw new Error("You haven't built that building; building is not in town")
  }
  return building
}

// add buildings
build(building){

  const card = this._readCard(building.id);

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
    // new properties
    hasWorker: {
      placed: false,
      efficient: false,
      assitant: false
    },
    produce: 0
  }

  this.buildings.push(newBuilding);
  console.log("added ", newBuilding.name);
}



// place worker
placeWorker(worker, building){
  const myBuilding = this._findBuilding(building.id);

  if(myBuilding.hasWorker){
    throw new Error('Cannot place worker; building already has a worker on it')
  }
  else if(myBuilding.hasWorker.assitant){
    throw new Error('Cannot place worker; building already has an assitant')
  }
  else {
    myBuilding.hasWorker.placed = true;

    if(worker.efficient){
      myBuilding.hasWorker.efficient = true;
    }
    else if(worker.isAssistant){
      myBuilding.hasWorker.isAssitant = true;
    }
  }
}
//move assistant
moveAssitant(building){

}

// produce building

// chain resource


}

const worker = {
  efficient: true,
  isAssitant: false,

}

module.exports = Town