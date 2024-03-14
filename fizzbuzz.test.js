import { fizzbuzz } from './fizzbuzz.js'

describe('FizzBuzz', () => {
    it('should return 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })
    it('should return 2', () => {
        expect(fizzbuzz(2)).toBe(2)
    })
    it('should return "Fizz" for multiples of 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz')
        expect(fizzbuzz(6)).toBe('Fizz')
        expect(fizzbuzz(9)).toBe('Fizz')
    })
})
