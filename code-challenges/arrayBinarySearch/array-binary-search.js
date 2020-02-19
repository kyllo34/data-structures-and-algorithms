const binarySearch = (array, value) => {
  let i = Math.floor((array.length - 1) / 2)
  let j = 1
  while(true) {
    if (array[i] > value) {
      i = Math.floor(i / (2 ** j));
      j++;
    } else if (array[i] < value) {
      i = Math.ceil(i + 1 / (2 ** j));
      j++;
    } else if (array[i] === value) {
      return i;
    } else {
      return -1;
    }
  } 
}