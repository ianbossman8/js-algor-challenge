const locationsGenerator = require('./index')

describe('pizza delivery', () => {
  it('should return the max intersect', () => {
    const deliverGuys = [
      [1, 1, 1],
      [1, 1, 2],
      [2, 1, 1],
      [1, 1, 3],
      [3, 3, 1],
      [3, 2, 1],
      [1, 1, 1],
      [1, 2, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 3],
      [1, 1, 2],
      [3, 3, 2],
      [1, 3, 3],
      [1, 2, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 1],
      [1, 3, 3],
      [1, 1, 2],
      [3, 3, 2],
      [1, 3, 3],
    ]
    const nm = [5, 20]

    const max = locationsGenerator(nm, deliverGuys)

    expect(max).toBe(24)
  })
})
