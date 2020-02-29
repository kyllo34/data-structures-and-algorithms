'use strict';

class AnimalShelter {
  constructor() {
    this.storage = [];
  }
  enqueue(animalObj) {
    if (animalObj.animal === 'dog' || animalObj.animal === 'cat') {
      this.storage.push(animalObj);
    } else {
      return null;
    }
  }
  dequeue(pref) {
    if (pref.animal === 'dog' || pref.animal === 'cat') {
      for (let i = 0; i < this.storage.length; i++) {
        if(pref.animal === this.storage[i].animal) {
          return this.storage.splice(i, 1);
        }
      }
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
