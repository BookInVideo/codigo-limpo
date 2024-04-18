/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const RelatorioImc = require('./main');

describe('RelatorioImc', () => {
    it('adiciona paciente', () => {
        const pacientes = [{ nome: 'Joao', peso: 60, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        expect(resultado.length).toBe(1);
    });

    it('calculo imc', () => {
        const pacientes = [{ nome: 'Joao', peso: 60, altura: 1.70 }];

        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        const umPaciente = resultado[0];
        const imc = umPaciente.peso / (umPaciente.altura ** 2);

        expect(umPaciente.imc.resultado).toBe(imc.toFixed(1));
    });

    it('imc-abaixo', () => {
        const pacientes = [{ nome: 'Joao', peso: 50, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        const umPaciente = resultado[0];

        expect(umPaciente.imc.classificacao).toBe('imc-abaixo');
    });

    it('imc-saudavel', () => {
        const pacientes = [{ nome: 'Joao', peso: 60, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        const umPaciente = resultado[0];

        expect(umPaciente.imc.classificacao).toBe('imc-saudavel');
    });

    it('imc-sobrepeso', () => {
        const pacientes = [{ nome: 'Joao', peso: 80, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        const umPaciente = resultado[0];

        expect(umPaciente.imc.classificacao).toBe('imc-sobrepeso');
    });

    it('imc-obesidade-1', () => {
        const pacientes = [{ nome: 'Joao', peso: 90, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        const umPaciente = resultado[0];

        expect(umPaciente.imc.classificacao).toBe('imc-obesidade-1');
    });

    it('imc-obesidade-2', () => {
        const pacientes = [{ nome: 'Joao', peso: 105, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        const umPaciente = resultado[0];

        expect(umPaciente.imc.classificacao).toBe('imc-obesidade-2');
    });

    it('imc-obesidade-3', () => {
        const pacientes = [{ nome: 'Joao', peso: 120, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);
        const resultado = relatorioImc.gerar();
        const umPaciente = resultado[0];

        expect(umPaciente.imc.classificacao).toBe('imc-obesidade-3');
    });

    it('reseta relatorio a cada chamada', () => {
        const pacientes = [{ nome: 'Joao', peso: 120, altura: 1.70 }];
        const relatorioImc = new RelatorioImc(pacientes);

        relatorioImc.gerar();
        relatorioImc.gerar();
        const resultado = relatorioImc.gerar();

        expect(resultado.length).toBe(1);
    });
});
