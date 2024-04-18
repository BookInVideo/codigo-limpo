/*
    Comando para rodar o programa:
        node main
*/

let numeroPlacarJogadorUm = 0;
let numeroPlacarMaquina = 0;

const placarVitoria = 5;

function jogadorClicou(escolhaJogador) {
    jogandoOJogo(escolhaJogador, escolhaMaquina());
}

//captando a escolha da maquina
function escolhaMaquina() {
    const opcao = ['pedra', 'papel', 'tesoura'];
    const numeroAleatorioEntreZeroE_Dois = Math.floor(Math.random() * 3);
    //Math.random sorteia um numero entre 0 e 1(0 - 0.9). multiplicando por 3, fará com que o resultado seja entre 0 e 2,9. O Math.floor, arredonda para baixo, sorteando entre 0 e 2.
    return opcao[numeroAleatorioEntreZeroE_Dois];
} 

function jogandoOJogo(jogador, maquina) {    
    console.log(`Jogador: ${jogador} | Máquina: ${maquina}`);

    if (jogador === maquina){
        console.log('Rodada Empatada!');
    } else if (
        jogador === 'pedra' && maquina === 'tesoura' ||
        jogador === 'tesoura' && maquina === 'papel' ||
        jogador === 'papel' && maquina === "pedra"   ){
        numeroPlacarJogadorUm++;
        console.log(`O jogador ganhou a rodada! Jogador: ${numeroPlacarJogadorUm} | ${numeroPlacarMaquina}`);

    } else {
        numeroPlacarMaquina++;
        console.log(`A Máquina ganhou a rodada! Jogador: ${numeroPlacarJogadorUm} | ${numeroPlacarMaquina}`);
    }

    if (numeroPlacarJogadorUm >= placarVitoria) {
        console.log("Parabéns! Você venceu o jogo!");
        numeroPlacarJogadorUm = 0;
        numeroPlacarMaquina = 0;
    } else if (numeroPlacarMaquina >= placarVitoria) {
        console.log("Que Pena! A máquina te derrotou!");
        numeroPlacarMaquina = 0;
        numeroPlacarJogadorUm = 0;
    }
}

jogadorClicou('pedra');
jogadorClicou('papel');
jogadorClicou('tesoura');