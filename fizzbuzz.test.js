import { fizzbuzz } from './fizzbuzz.js'

describe('FizzBuzz', () => {
    it('should return 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })
    it('should return 2', () => {
        expect(fizzbuzz(2)).toBe(2)
    })
    it('should return "Fizz" for 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz')
    })
    it('should return "Fizz" for multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('Fizz')
    })
    it('should return "Buzz" for 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz')
    })
    it('should return "Buzz" for multiple of 5', () => {
        expect(fizzbuzz(10)).toBe('Buzz')
    })
    it('should return "FizzBuzz" for 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz')
    })
})
