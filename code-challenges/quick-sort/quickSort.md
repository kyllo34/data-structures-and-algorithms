# Quick Sort

## Pseudocode
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
## Trace

Sample Array: `[8,4,23,42,16,15]`

#### Pass 1:

For the first pass we call `QuickSort([8,4,23,42,16,15], 0, 5)`

   left is less than right so we define `position = Partition([8,4,23,42,16,15], 0, 5)`
   
  - DEFINE pivot <-- arr[right] `pivot = 15`
  - DEFINE low <-- left - 1 `low = -1`
    - for i <- left to right do `i = 0`
      - if arr[i] <= pivot `8 < 15`
      - low ++ `low = 0`
      - Swap(arr, i, low) `Swap([8,4,23,42,16,15], 0, 0)`
        - DEFINE temp 
        - temp <-- arr[i] `temp = 8`
        - arr[i] <-- arr[low] `arr[0] = 8` `[8,4,23,42,16,15]`
        - arr[low] <-- temp `arr[0] = 8` `[8,4,23,42,16,15]`

### Pass 2:
  - 
    - for i <- left to right do `i = 1`
      - if arr[i] <= pivot `4 < 15`
        - low++ `low = 1`
        - Swap(arr, i, low) `Swap([8,4,23,42,16,15], 1, 1)`
          - DEFINE temp 
          - temp <-- arr[i] `temp = 4`
          - arr[i] <-- arr[low] `arr[1] = 4` `[8,4,23,42,16,15]`
          - arr[low] <-- temp `arr[1] = 4` `[8,4,23,42,16,15]`
### Pass 3:
  - 
    - for i <- left to right do `i = 2`
      - if arr[i] <= pivot `23 > 15` fails
### Pass 4: 
 - 
    - for i <- left to right do `i = 3`
      - if arr[i] <= pivot `42 > 15` fails
### Pass 5:
 - 
    - for i <- left to right do `i = 4`
      - if arr[i] <= pivot `16 > 15` fails
    - Swap(arr, right, low + 1) `Swap([8,4,23,42,16,15], 5, 2)
      - DEFINE temp
      - temp <-- arr[i] `temp = 15`
      - arr[i] <-- arr[low] `arr[5] = 23`
      - arr[low] <-- temp `arr[2] = 15` `[8,4,15,42,16,23]`
    - return low + 1 `return 3`
### Pass 6: Next Stack frame
  - DEFINE position <-- Partition(arr, left, right) `position = 3`
    - QuickSort(arr, left, position - 1) `QuickSort([8,4,15,42,16,23], 0, 2)`
    - if left < right `0 < 2` pass
      - DEFINE position <-- Partition(arr, left, right) `Partition([8,4,15,42,16,23], 0, 2)`
        - DEFINE pivot <-- arr[right] `pivot = 15`
        - DEFINE low <-- left - 1 `low = -1`
        - for i <- left to right do `for 0 to 2` `i = 0`
          -  if arr[i] <= pivot `8 < 15` pass
          -  low++ `low = 0`
          -  Swap(arr, i, low) `Swap([8,4,15,42,16,23], 0, 0)`
            - temp <-- arr[i] `temp = 8`
            - arr[i] <-- arr[low] `arr[0] = 8`
            - arr[low] <-- temp `arr[0] = 8` `[8,4,15,42,16,23]`
### Pass 7:
  - 
    - 
      -  
        - for i <- left to right do `for 0 to 2`  `i = 1`
          -  if arr[i] <= pivot `4 < 15` pass
          -  low++ `low = 1`
          -  Swap(arr, i, low) `Swap([8,4,15,42,16,23], 1, 1)`
            - temp <-- arr[i] `temp = 4`
            - arr[i] <-- arr[low] `arr[1] = 4`
            - arr[low] <-- temp `arr[1] = 4` `[8,4,15,42,16,23]` 





