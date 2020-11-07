const { merger1, merger2 } = require('./index')

describe('merger', () => {
  describe('merger1', () => {
    it('should merge two array 1', () => {
      const A = ['a', 'b', 'c', 'd']
      const B = ['e', 'f', 'g']

      expect(merger1(A, B)).toEqual(['a', 'e', 'b', 'f', 'c', 'g', 'd'])
    })

    it('should merge two array 2', () => {
      const A = ['a', 'b', 'c']
      const B = ['e', 'f', 'g']

      expect(merger1(A, B)).toEqual(['a', 'e', 'b', 'f', 'c', 'g'])
    })

    it('should merge two array 3', () => {
      const A = ['a', 'b', 'c']
      const B = ['e']

      expect(merger1(A, B)).toEqual(['a', 'e', 'b', 'c'])
    })

    it('should merge two array 4', () => {
      const A = ['e']
      const B = ['a', 'b', 'c']

      expect(merger1(A, B)).toEqual(['e', 'a', 'b', 'c'])
    })
  })

  describe('merger2', () => {
    it('should merge two array 1', () => {
      const A = ['a', 'b', 'c', 'd']
      const B = ['e', 'f', 'g']

      expect(merger2(A, B)).toEqual(['a', 'e', 'b', 'f', 'c', 'g', 'd'])
    })

    it('should merge two array 2', () => {
      const A = ['a', 'b', 'c']
      const B = ['e', 'f', 'g']

      expect(merger2(A, B)).toEqual(['a', 'e', 'b', 'f', 'c', 'g'])
    })

    it('should merge two array 3', () => {
      const A = ['a', 'b', 'c']
      const B = ['e']

      expect(merger2(A, B)).toEqual(['a', 'e', 'b', 'c'])
    })

    it('should merge two array 4', () => {
      const A = ['e']
      const B = ['a', 'b', 'c']

      expect(merger2(A, B)).toEqual(['e', 'a', 'b', 'c'])
    })
  })
})
