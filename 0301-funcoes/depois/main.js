/*
    Comando para rodar o programa:
        node main
*/

let pontosJogador = 0;
let pontosMaquina = 0;

const placarVitoria = 5;

function jogar(escolhaJogador) {
    const escolhaMaquina = sorteiaEscolha();
    incrementaPontosGanhador(escolhaJogador, escolhaMaquina);
    exibeMensagemDaRodada(escolhaJogador, escolhaMaquina);
    if (isGameOver()) {
        exibeGameOverMensagem();
        resetaJogo();
    }
}

function sorteiaEscolha() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const numeroEntreZeroEDois = Math.floor(Math.random() * 3);
    return opcoes[numeroEntreZeroEDois];
} 

function incrementaPontosGanhador(escolhaJogador, escolhaMaquina) {
    if (escolhaJogador === escolhaMaquina){
    } else if (jogadorGanhou(escolhaJogador, escolhaMaquina)){
        pontosJogador++;
    } else {
        pontosMaquina++;
    }
}

function exibeMensagemDaRodada(escolhaJogador, escolhaMaquina) {
    console.log(`Jogador: ${escolhaJogador} | Máquina: ${escolhaMaquina}`);
    if (escolhaJogador === escolhaMaquina){
        console.log('Rodada Empatada!');
    } else if (jogadorGanhou(escolhaJogador, escolhaMaquina)){
        console.log(`O jogador ganhou a rodada! Jogador: ${pontosJogador} | ${pontosMaquina}`);
    } else {
        console.log(`A Máquina ganhou a rodada! Jogador: ${pontosJogador} | ${pontosMaquina}`);
    }
}

function isGameOver() {
    return pontosJogador >= placarVitoria || pontosMaquina >= placarVitoria;
}

function exibeGameOverMensagem() {
    if (pontosJogador >= placarVitoria) {
        console.log("Parabéns! Você venceu o jogo!");
    } else if (pontosMaquina >= placarVitoria) {
        console.log("Que Pena! A máquina te derrotou!");
    }
}

function resetaJogo() {
    pontosMaquina = 0;
    pontosJogador = 0;
}

function jogadorGanhou(jogador, maquina) {
    return (
        jogador === 'pedra' && maquina === 'tesoura' ||
        jogador === 'tesoura' && maquina === 'papel' ||
        jogador === 'papel' && maquina === "pedra"   
    )
}

jogar('pedra');
jogar('papel');
jogar('tesoura');
jogar('pedra');
jogar('papel');
jogar('tesoura');
jogar('pedra');
jogar('papel');
jogar('tesoura');
jogar('pedra');
jogar('papel');
jogar('tesoura');
jogar('pedra');
jogar('papel');
jogar('tesoura');