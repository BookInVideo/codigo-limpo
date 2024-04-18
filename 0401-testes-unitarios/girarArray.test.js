/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const girarArray = require("./girarArray");

describe('girarArray', function () {

    it('tamanho da nova array igual o da array original', function () {
        const arrayOriginal = [1, 2, 3];
        const novaArray = girarArray(arrayOriginal);
        expect(novaArray.length).toBe(arrayOriginal.length)
    })

    it('primeiro elemento da nova igual o segundo da original', function () {
        const arrayOriginal = [1, 2, 3];
        const novaArray = girarArray(arrayOriginal);
        expect(novaArray[0]).toBe(arrayOriginal[1]);
    })

    it('move primeiro para o final', function () {
        const arrayOriginal = [1, 2, 3];
        const novaArray = girarArray(arrayOriginal);
        expect(novaArray[2]).toBe(arrayOriginal[0]);
    })

})