class Card {
  constructor(data){

    const { 
      id, 
      name, 
      germanName, 
      cost, 
      vp, 
      img, 
      hasSun, 
      type, 
      requiredResources, 
      produce, 
      value,
    } = data

    const good = new Good(data.good);
    const produce = new Good(data.produce);
    const chain = data.chain.map(item => {
      return new Good(item.name); 
    })

    this.id = id;
    this.name = name;
    this.germanName = germanName;
    this.cost = cost
    this.vp = vp, 
    this.img = img,
    this.hasSun = hasSun,
    this.type = type, 
    this.requiredResources = requiredResources,
    this.produce = produce,
    this.value = value,
    this.good = good,
    this.chain = chain

  }
  
  read(){
    return {
      id: this.id, 
      name: this.name, 
      germanName: this.germanName, 
      cost: this.cost,
      vp: this.vp,
      img: this.img,
      hasSun: this.hasSun,
      type: this.type,
      requiredResources: this.requiredResources,
      produce: this.produce,
      value: this.value,
      good: this.good,
      chain: this.chain
    }
  }
}

module.export = Card; 

// “Card” : {
// 	“id” : 23,
// 	“name” : “Brick Manufacturer,
// 	“germanName” : “Ziegelei”,
// 	“cost” : 2,
// 	“vp” : 2,
// 	“img” : “url”
// 	“hasSun” : false,
// 	“type” : “red”
// 	“good” : { “name” : “clay”,
// 		   “type” : “resource” },
// 	“requiredResources” : [
// { “resource” : “hay”, 
//   “amount” : 4 }
// { “resource” : “clay”,
//   “amount” : 2
// ],
// 	“produce” : { “name” : “brick”,
// 		        “type” : “produce” },
// 	“value” : 2”,
// 	“chain” : [
// 		{ “name” : “clay”,
//   “type” : “resource” },
// { “name” : “coal”,
//   “type” : “produce” }
// 	],
// }
