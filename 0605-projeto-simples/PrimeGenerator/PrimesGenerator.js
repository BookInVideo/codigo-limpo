class PrimeGenerator {
    generatePrimes(maxValue) {
        if (maxValue >= 2) { // the only valid case
            // declarations
            let s = maxValue + 1; // size of array
            let f = new Array(s).fill(true);
    
            // get rid of known non-primes
            f[0] = f[1] = false;
    
            // sieve
            for (let i = 2; i < Math.sqrt(s) + 1; i++) {
                for (let j = 2 * i; j < s; j += i) {
                    f[j] = false; // multiple is not prime
                }
            }
    
            // how many primes are there?
            let count = 0;
            for (let i = 0; i < s; i++) {
                if (f[i])
                    count++; // bump count
            }
    
            let primes = new Array(count);
    
            // move the primes into the result
            for (let i = 0, j = 0; i < s; i++) {
                if (f[i])
                    primes[j++] = i;
            }
    
            return primes;
        } else { // maxValue < 2
            return []; // return empty array if bad input.
        }
    }
}

const primeGenerator = new PrimeGenerator();
console.log(primeGenerator.generatePrimes(100));