const insertShiftArray = (array, value) => {
  const newArray = [];
  let j = 0;
  if (array.length === 0) {
    newArray[0] = value;
  }
  for (let i = 0; i < array.length; i++) {
    newArray[j] = array[i];
    j++;
    if(i === Math.floor((array.length-1)/2)) {
      newArray[j] = value;
      j++;
    }
  }
  return newArray;
}

describe('Testing insertShiftArray function', () => {
  it('It should return an array containing the input array with the input value in the middle', () => {
    expect(insertShiftArray([2,4,6,8],5)).toEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
    expect(insertShiftArray([], 16)).toEqual([16]);
  })
})