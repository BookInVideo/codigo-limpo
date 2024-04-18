/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

class Imc {
    resultado;
    classificacao;

    _tabelaImc = [
        { classificacao: 'imc-abaixo', min: -Infinity, max: 18.4 },
        { classificacao: 'imc-saudavel', min: 18.5, max: 24.9 },
        { classificacao: 'imc-sobrepeso', min: 25, max: 29.9 },
        { classificacao: 'imc-obesidade-1', min: 30, max: 34.9 },
        { classificacao: 'imc-obesidade-2', min: 35, max: 39.9 },
        { classificacao: 'imc-obesidade-3', min: 40, max: Infinity },
    ];

    constructor(peso, altura) {
        this.resultado = this._calculaImc(peso, altura);
        this.classificacao = this._classificaImc(this.resultado);
    }

    _calculaImc(peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(1)
    }

    _classificaImc(valorImc) {
        const resultado = this._tabelaImc.find((imc) => {
            return valorImc >= imc.min && valorImc <= imc.max;
        });
        return resultado.classificacao;
    }
}

module.exports = Imc;