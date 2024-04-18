/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/


class JogoDaVelha {
    placar = { player1: 0 };

    _turno;
    _camposPlayer1 = [];

    constructor(turno) {
        this._turno = turno;
    }

    jogarAlternado(campo) {
        if (this._turno == 'player1') {
            this._camposPlayer1.push(campo);
            if (this._ganhouRodada(this._camposPlayer1)) {
                this.placar.player1 += 1;
            }
            this._turno = 'player2';
        } else {
            this._turno = 'player1';
        }
    }

    _ganhouRodada(campos) {
        const camposX = campos.map(c => c[0]);
        const camposY = campos.map(c => c[1]);
        return (
            (this._camposIguais(camposX).length == 3 || this._estaoEmSequencia(camposX)) &&
            (this._camposIguais(camposY).length == 3 || this._estaoEmSequencia(camposY))
        )
    }

    _camposIguais(campos) {
        const primeiroCampo = campos[0];
        const camposIguais = campos.filter((campo) => campo == primeiroCampo);
        return camposIguais;
    }

    _estaoEmSequencia(campos) {
        return (
            campos.includes(1) &&
            campos.includes(2) &&
            campos.includes(3)
        )
    }
}

module.exports = JogoDaVelha;