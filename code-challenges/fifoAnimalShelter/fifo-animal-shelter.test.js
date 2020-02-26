'use strict';
const AnimalShelter = require('./fifo-animal-shelter.js');

describe('Class AnimalShelter', () => {
  xit('Creates an empty shelter on instantiation.', () => {
    const animalShelter = new AnimalShelter;
    expect(animalShelter.storage.length).toEqual(0);
  })
  describe('enqueue()', () => {
    it('Only accepts dog or cat object as an argument', () => {
      const animalShelter = new AnimalShelter;
      expect(animalShelter.enqueue({animal:'binbong'})).toBe(null);
    })
    it('Adds an animal to the shelter', () => {
      const animalShelter = new AnimalShelter;
      animalShelter.enqueue({animal:'dog'})
      expect(animalShelter.storage[0]).toEqual({animal:'dog'})
    })
  })
  describe('dequeue()', () => {
    it('Returns null if argument is not a cat or dog', () => {
      const animalShelter = new AnimalShelter;
      expect(animalShelter.dequeue({animal:'binbong'})).toBe(null);
    })
    it('Returns either a dog or cat.', () => {
      const animalShelter = new AnimalShelter;
      animalShelter.storage = [{animal:'dog'}, {animal:'cat'}, {animal:'dog'}]
      expect(animalShelter.dequeue({animal:'cat'})).toEqual([{animal:'cat'}]);
      expect(animalShelter.storage).toEqual([{animal:'dog'}, {animal:'dog'}])
    })
  })
})
