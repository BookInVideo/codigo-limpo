/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const pacientes = require('./pacientes.mock');
const Imc = require('./Imc');

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
        const imc = new Imc(paciente.peso, paciente.altura);
        const imcPaciente = {
            nome: paciente.nome,
            peso: paciente.peso,
            altura: paciente.altura,
            imc: { classificacao: imc.classificacao, resultado: imc.resultado }
        }
        return imcPaciente;
    }
}

const relatorioImc = new RelatorioImc(pacientes);
const resultado = relatorioImc.gerar();
console.table(resultado);

module.exports = RelatorioImc;