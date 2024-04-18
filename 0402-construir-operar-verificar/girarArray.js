/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

function girarArray(arg) {
    const novaArray = [...arg];
    const primeiroElemento = novaArray[0];
    novaArray.shift();
    novaArray.push(primeiroElemento);
    return novaArray;
}

const novaArray1 = girarArray([10, 20, 55, 90]);
console.log(novaArray1);
const novaArray2 = girarArray(novaArray1);
console.log(novaArray2);

module.exports = girarArray;