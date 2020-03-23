function repeatedWord(str) {
  // split the string into array containing individual words an
  let arr = str.split(' ')
  // create a new map to fill
  const theMap = newMap()
  // iterate through array to store as hashmap
  for (let i = 0; i< arr.length; i++) {
    if(theMap.has(arr[i])) {
      return arr[i]
    }
  }

}




describe('repeatedWord()', () => {
  it('Returns the first word that occurs more than once in the inpu string', () => {

  })
  it('Returns null when the input is empt', () => {

  })
})