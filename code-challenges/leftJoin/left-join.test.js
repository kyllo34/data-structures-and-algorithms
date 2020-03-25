function join(left, right) {
  for(let [key, value] of left) {
    console.log(value)
    let rightValue = null
    right.has(key) ? rightValue = right.get(key) : null
    left.set(key, [value, rightValue])
  }
  return left
}


describe('join()', () => {
  it('Returns 2D array of right map joined to left map', () => {
    const left = new Map([
      ['fond', 'enamored'],
      ['wrath', 'anger'],
      ['diligent', 'employed'],
      ['outfit', 'garb'],
      ['guide', 'usher']
    ])
    const right = new Map([
      ['fond', 'averse'],
      ['wrath', 'delight'],
      ['diligent', 'idle'],
      ['guide', 'follow'],
      ['flow', 'jam']
    ])
    const output = new Map([
      ['fond', ['enamored', 'averse']],
      ['wrath', ['anger', 'delight']],
      ['diligent', ['employed', 'idle']],
      ['outfit', ['garb', null]],
      ['guide', ['usher', 'follow']]
    ])
    expect(join(left, right)).toStrictEqual(output)
  })
  it('Returns a 2D array of the left map when there are no matches or the right map is empty with null values for all 3 elements in inner arrays', () => {
    let left = new Map([
      ['fond', 'enamored'],
      ['wrath', 'anger'],
      ['diligent', 'employed'],
      ['outfit', 'garb'],
      ['guide', 'usher']
    ])
    const right = new Map([
      ['asdf', 'averse'],
      ['asdf', 'delight'],
      ['asdf', 'idle'],
      ['guasdfasdfide', 'follow'],
      ['flasdfasdfow', 'jam']
    ])
    const output = new Map([
      ['fond', ['enamored', null]],
      ['wrath', ['anger', null]],
      ['diligent', ['employed', null]],
      ['outfit', ['garb', null]],
      ['guide', ['usher', null]]
    ])
    expect(join(left, new Map())).toStrictEqual(output)
    left = new Map([
      ['fond', 'enamored'],
      ['wrath', 'anger'],
      ['diligent', 'employed'],
      ['outfit', 'garb'],
      ['guide', 'usher']
    ])
    expect(join(left, right)).toStrictEqual(output)
  })
  it('Returns an empty array if left map is empty', () => {
    const left = new Map()
    const right = new Map([
      ['asdf', 'averse'],
      ['asdf', 'delight'],
      ['asdf', 'idle'],
      ['guasdfasdfide', 'follow'],
      ['flasdfasdfow', 'jam']
    ])
    expect(join(left, right)).toStrictEqual(new Map())
  })
})
