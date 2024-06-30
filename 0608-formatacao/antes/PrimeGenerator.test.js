const PrimeGenerator = require('./PrimeGenerator');


describe('PrimeGenerator', function() {
    it('cannot generate primes until 1', function() {
        const primeGenerator = new PrimeGenerator();
        const primes = primeGenerator.generatePrimes(1);
        expect(primes.length).toBe(0);
    });

    it('generate primes until 2', function() {
        const primeGenerator = new PrimeGenerator();
        const primes = primeGenerator.generatePrimes(2);
        expect(primes).toEqual([2]);
    });

    it('generate primes until 50', function() {
        const primesUntil50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

        const primeGenerator = new PrimeGenerator();
        const primes = primeGenerator.generatePrimes(50);

        expect(primes).toEqual(primesUntil50);
    })
});