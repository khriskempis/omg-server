class HashMap {
  constructor(initialCapacity=10){
    this.length = 0;
    this._slots = [];
    this.deleted = 0;
    this._capacity = initialCapacity;
  }

  static _hashString(string){
    let hash = 5381;
    for(let i=0; i<string.length; i++){
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  get(key){
    const index = this._findSlot(key);
    const slot = this._slots[index]
    if(slot == undefined){
      throw new Error('index error')
    }
    return slot.value;
  }

  set(key, value){
    const loadRatio = (this.legnth + 1)/ this._capacity;
    if(loadRatio > HashMap.MAX_LOAD_CAPACITY){
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key);
    this._slots[index] = {
      key,
      value,
      deleted: false
    }
    this.length++
  }

  remove(key){
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if(slot === undefined){
      throw new Error('index error');
    }

    slot.deleted = true;
    this.length--;
    this.deleted++;
  }

  _findSlot(key){
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;
    
    for(let i=start; i<start + this._capacity; i++){
      const index = i % this._capacity;
      const slot = this._slots[index];
      if(slot == undefined || slot.key == key){
        return index;
      }
    }
  }

  _resize(size){
    const oldSlots = this._slots;
    this.length = 0;
    this.deleted = 0;
    this._capacity = size;

    for(const slot of oldSlots){
      if(slot !== undefined || !slot.deleted){
        this.set(slot.key, slot.value);
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3


module.exports = HashMap;