/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const pacientes = require('./pacientes.mock');

class RelatorioImc {
    _pacientes;

    constructor(pacientes) {
        this._pacientes = pacientes;
    }

    gerar() {
        const imcPacientes = [];
        for (let i = 0; i < this._pacientes.length; i++) {
            const imcPaciente = this._criarImcPaciente(this._pacientes[i]);
            imcPacientes.push(imcPaciente);
        }

        return imcPacientes;
    }

    _criarImcPaciente(paciente) {
        const imcPaciente = {
            nome: paciente.nome,
            peso: paciente.peso,
            altura: paciente.altura,
            imc: {
                classificacao: null,
                resultado: null,
            }
        }
        const imc = this._calculaImc(paciente.peso, paciente.altura)
        const classificacao = this._classificaImc(imc, imcPaciente.imc);
        imcPaciente.imc.resultado = imc;
        imcPaciente.imc.classificacao = classificacao;
        return imcPaciente;
    }
    
    _calculaImc(peso,altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(1)
    }
    
    _classificaImc(valorImc) {
       if (valorImc < 18.5) {
            return 'imc-abaixo'
        }
        else if (valorImc >= 18.5 && valorImc < 25.0) {
            return 'imc-saudavel'
        }
        else if (valorImc > 24.9 && valorImc < 29.9) {
            return 'imc-sobrepeso'
        }
        else if (valorImc > 30.0 && valorImc < 34.9) {
            return 'imc-obesidade-1'
        }
        else if (valorImc > 35.0 && valorImc < 39.9) {
            return 'imc-obesidade-2'
        }
        else if (valorImc > 40.0) {
            return 'imc-obesidade-3'
        }
    }
}

const relatorioImc = new RelatorioImc(pacientes);
const resultado = relatorioImc.gerar();
console.table(resultado);

module.exports = RelatorioImc;