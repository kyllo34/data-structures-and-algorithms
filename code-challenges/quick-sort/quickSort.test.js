function quickSort(arr, left = 0, right = arr.length - 1) {
  // if the left and right limit dont overlap
  if (left < right) {
    // sets a position equal to the 
    let position = partition(arr, left, right)
    quickSort(arr, left, position - 1)
    quickSort(arr, position + 1, right)
  }
}

function partition(arr, left, right) {
  let pivot = arr[right]
  let low = left - 1
  for (let i = left; i <= right; i++) {
    if(arr[i] <= pivot) {
      low++;
      swap(arr, i, low)
    }
  }
  swap(arr, right, low + 1)
  return low + 1
}

function swap(arr, i, low) {
  let temp
  temp = arr[i]
  arr[i] = arr[low]
  arr[low] = temp
}

describe('quickSort()', () => {
  it('Sorts an array of integers from smallest to largest.', () => {
    let arr1 = [8,4,23,42,16,15]
    expect(quickSort(arr1)).toEqual([4, 8, 15, 16, 23, 42])
    let arr2 = [20,18,12,8,5,-2]
    expect(quickSort(arr2)).toEqual([-2, 5, 8, 12, 18, 20])
    let arr3 = [5,12,7,5,5,7]
    expect(quickSort(arr3)).toEqual([5, 5, 5, 7, 7, 12])
    let arr4 = [2,3,5,7,13,11]
    expect(quickSort(arr4)).toEqual([2, 3, 5, 7, 11, 13])
  })
})
