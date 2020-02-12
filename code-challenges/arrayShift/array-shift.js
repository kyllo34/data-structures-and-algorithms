const insertShiftArray = (array, value) => {
  const newArray = [];
  let j = 0;
  if (array.length === 0) {
    newArray[0] = value;
  }
  for (let i = 0; i < array.length; i++) {
    newArray[j] = array[i];
    j++;
    if(i === Math.ceil((array.length-1)/2)) {
      newArray[j] = value;
      j++;
    }
  }
  return newArray;
}