/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const Imc = require('./Imc');

describe('Imc', () => {
    it('imc maximo para imc-sobrepeso', () => {
        const peso = 29.9;
        const altura = 1;
        const imc = new Imc(peso, altura);
        expect(imc.classificacao).toBe('imc-sobrepeso');
    });
    
    it('imc maximo para imc-obesidade-1', () => {
        const peso = 34.9;
        const altura = 1;
        const imc = new Imc(peso, altura);
        expect(imc.classificacao).toBe('imc-obesidade-1');
    });
    
    it('imc maximo para imc-obesidade-2', () => {
        const peso = 39.9;
        const altura = 1;
        const imc = new Imc(peso, altura);
        expect(imc.classificacao).toBe('imc-obesidade-2');
    });
    
    it('imc minimo para imc-obesidade-1', () => {
        const peso = 30;
        const altura = 1;
        const imc = new Imc(peso, altura);
        expect(imc.classificacao).toBe('imc-obesidade-1');
    });
    
    it('imc minimo para imc-obesidade-2', () => {
        const peso = 35;
        const altura = 1;
        const imc = new Imc(peso, altura);
        expect(imc.classificacao).toBe('imc-obesidade-2');
    });
    
    it('imc minimo para imc-obesidade-3', () => {
        const peso = 40;
        const altura = 1;
        const imc = new Imc(peso, altura);
        expect(imc.classificacao).toBe('imc-obesidade-3');
    });
})

