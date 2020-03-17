function mergeSort(arr) {
  let n = arr.length
  // if the input has at least one element
  if (n > 1) {
    // grab the middle of the array
    let mid = Math.floor(n / 2)
    // left gets the input array from the beginning to the middle minus 1 index
    let left = arr.slice(0,mid)
    // right gets the input array from the middle to the end
    let right = arr.slice(mid, n)
    // sort the left side
    mergeSort(left)
    // sort the right side
    mergeSort(right)
    // merge the sorted left and right side together
    merge(left, right, arr)
  }
  return arr
}

function merge(left, right, arr) {
  // initialize counters
  let i = 0; let j = 0; let k = 0;
  // actual logic to perform sorting
  while( i<left.length && j<right.length ) {
    // compares each element in the left side with the right side and if its less then it injects it into the input array
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i ++
    } else {
      // injects right side value into array
      arr[k] = right[j]
      j ++
    }
    k++
  }
  // if all the remaining values in the right side are lower than the values in the right then replace the remaining entries in input array with the right array
  if (i === left.length) {
    while(j < right.length) {
      arr[k] = right[j]
      j++; k++;
    }

  // if all the remaining values in the left side are lower than the values in the right then replace the remaining entries in input array with the right array
  } else {
    while(i < left.length) {
      arr[k] = left[i]
      i++; k++;
    }
  }
}





describe('mergeSort()', () => {
  it('Sorts an array of integers from smallest to largest.', () => {
    expect(mergeSort([8,4,23,42,16,15])).toEqual([4, 8, 15, 16, 23, 42])
    expect(mergeSort([20,18,12,8,5,-2])).toEqual([-2, 5, 8, 12, 18, 20])
    expect(mergeSort([5,12,7,5,5,7])).toEqual([5, 5, 5, 7, 7, 12])
    expect(mergeSort([2,3,5,7,13,11])).toEqual([2, 3, 5, 7, 11, 13])
  })
})