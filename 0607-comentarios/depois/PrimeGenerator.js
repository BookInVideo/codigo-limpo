class PrimeGenerator {
    _primesMap;
    _result;

    generatePrimes(maxValue) {
        if (maxValue >= 2) {
            this._defineAllAsPrimeUpTo(maxValue);
            this._defineNonPrimes();
            this._putIntegerPrimesIntoResult();
            return this._result;
        } else {
            return [];
        }
    }

    _defineAllAsPrimeUpTo(maxValue) {
        this._primesMap = new Array(maxValue + 1).fill(true);
    }

    _defineNonPrimes() {
        this._primesMap[0] = this._primesMap[1] = false;
        const limit = this._determineLimitIterator();
        for (let i = 2; i <= limit; i++) {
            for (let j = 2 * i; j < this._primesMap.length; j += i) {
                this._primesMap[j] = false; // multiple is not prime
            }
        }
    }

    _determineLimitIterator() {
        /*
        não é necessário percorrer os múltiplos que são maiores do que
        a raiz quadrada do tamanho da array, pois todos os múltiplos da 
        array possuem fatores primos que são menores ou iguais do que a 
        raiz quadrada do tamanho da array.
        */
        const iteratorLimit = Math.sqrt(this._primesMap.length);
        return iteratorLimit;
    }

    _putIntegerPrimesIntoResult() {
        this._result = new Array(this._countPrimes());
        for (let i = 0, j = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                this._result[j++] = i;
        }
    }

    _countPrimes() {
        let count = 0;
        for (let i = 0; i < this._primesMap.length; i++) {
            if (this._primesMap[i])
                count++;
        }
        return count;
    }
}

const primeGenerator = new PrimeGenerator();
console.log(primeGenerator.generatePrimes(100));

module.exports = PrimeGenerator;