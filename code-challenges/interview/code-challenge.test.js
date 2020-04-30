
function isAnagram(string1, string2) {
  const letters = new Map()
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== ' ') {
      if (letters.has(string1[i])) {
        let occurence = letters.get(string1[i])
        letters.set(string1[i], occurence + 1)
      } else {
        letters.set(string1[i], 1)
      }
    }
  }
  let anagramBoolean = true;
  for (let i = 0; i < string2.length; i++) {
    if(string2[i] !== ' ') {
      if (letters.has(string2[i])) {
        let occurence = letters.get(string2[i])
        if (occurence === 0) {
          anagramBoolean = false
          break
        } else {
          letters.set(string2[i], occurence - 1)
        }
      } else {
        anagramBoolean = false
        break
      }
    }
  }
  return anagramBoolean
}

describe('isAnagram()', () => {
  xit('Returns true if both strings are an anagram', () => {
    expect(isAnagram('eleven plus two', 'twelve plus one')).toBe(true)
  })
  it('Returns false if both strings are not an anagram', () => {
    expect(isAnagram('software', 'swear often')).toBe(false)
  })
})