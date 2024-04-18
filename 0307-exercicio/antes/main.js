/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const pacientes = require('./pacientes.mock');

class RelatorioImc {
    _imcPacientes = [];
    _pacientes;

    constructor(pacientes) {
        this._pacientes = pacientes;
    }

    gerar() {
        this._imcPacientes = [];
        for (let i=0; i < this._pacientes.length; i++) {
            const nome = this._pacientes[i].nome
            const peso = this._pacientes[i].peso
            const altura = this._pacientes[i].altura
        
            const imcPaciente = {
                nome: nome,
                peso: peso,
                altura: altura,
                imc: {
                    classificacao: null,
                    resultado: null,
                }
            }
        
            const imc = this._calculaImc(peso,altura)
            imcPaciente.imc.resultado = this._calculaImc(peso, altura);
            this._classificaImc(imc, imcPaciente.imc);
            this._imcPacientes.push(imcPaciente);
        }

        return this._imcPacientes;
    }
    
    _calculaImc(peso,altura) {
        let imc = 0
        imc = peso / (altura * altura)
        //this._classificaImc(imc,tdImc)

        return imc.toFixed(1)
    }
    
    _classificaImc(valorImc, variavel) {
       if (valorImc < 18.5) {
            return variavel.classificacao = 'imc-abaixo'
        }
        else if (valorImc >= 18.5 && valorImc < 25.0) {
            return variavel.classificacao = 'imc-saudavel'
        }
        else if (valorImc > 24.9 && valorImc < 29.9) {
            return variavel.classificacao = 'imc-sobrepeso'
        }
        else if (valorImc > 30.0 && valorImc < 34.9) {
            return variavel.classificacao = 'imc-obesidade-1'
        }
        else if (valorImc > 35.0 && valorImc < 39.9) {
            return variavel.classificacao = 'imc-obesidade-2'
        }
        else if (valorImc > 40.0) {
            return variavel.classificacao = 'imc-obesidade-3'
        }
    }
}

const relatorioImc = new RelatorioImc(pacientes);
const resultado = relatorioImc.gerar();
console.table(resultado);

module.exports = RelatorioImc;