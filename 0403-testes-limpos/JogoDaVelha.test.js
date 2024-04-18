/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const JogoDaVelha = require("./JogoDaVelha");

describe('JogoDaVelha', function() {
    it('alterna jogadas', function() {
        const jogoDaVelha = new JogoDaVelha('player1');
        jogarAlternadoAtePlayer1Ganhar(jogoDaVelha);
        expect(jogoDaVelha.placar.player1).toBe(1);
    });
});

function jogarAlternadoAtePlayer1Ganhar(jogoDaVelha) {
    jogoDaVelha.jogarAlternado([1, 1]);
    jogoDaVelha.jogarAlternado([1, 2]);
    jogoDaVelha.jogarAlternado([2, 1]);
    jogoDaVelha.jogarAlternado([1, 3]);
    jogoDaVelha.jogarAlternado([3, 1]);
}