const { minMove1 } = require('./index')

describe('minMove', () => {
  describe('merger1', () => {
    it('should calculate change 1', () => {
      const A = [123, 543]
      const B = [321, 279]

      expect(minMove1(A, B)).toBe(16)
    })

    it('should calculate change 2', () => {
      const A = [1234, 4321]
      const B = [2345, 3214]

      expect(minMove1(A, B)).toBe(10)
    })

    it('should calculate change 3', () => {
      const A = [2468]
      const B = [8642]

      expect(minMove1(A, B)).toBe(16)
    })
  })
})
