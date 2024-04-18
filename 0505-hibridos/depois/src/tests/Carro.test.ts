/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

import Carro from '../Carro';
import Frenagem from '../Frenagem';
import DiscoDeFreio from '../DiscoDeFreio';
import PincaDeFreio from '../PincaDeFreio';
import Pastilha from '../Pastilha';

import RawPastilha from '../interfaces/RawPastilha';

describe('Car', function() {
    it('freiosEstaoGastos', function() {
        const carro = criarCarroComPastilhaDesgastada();
        expect(() => carro.acelerar()).toThrow('Os freios estao gastos, nao e seguro acelerar');
    })
})

function criarCarroComPastilhaDesgastada() {
    const rawPastilhas = [
        { espessura: 3 }, 
        { espessura: 4 },
        { espessura: 5 },
        { espessura: 5 },
    ];
    return criarCarro(rawPastilhas);
}

function criarCarro(rawPastilhas: RawPastilha[]) {
    const pastilhas = criarPastilhas(rawPastilhas);
    const pincasDeFreio = criarPincasDeFreio(pastilhas);
    const discosDeFreio = criarDiscos(pincasDeFreio);
    const frenagem = new Frenagem(discosDeFreio);
    return new Carro(frenagem); 
}

function criarPastilhas(rawPastilhas: RawPastilha[]) {
    const pastilhas = rawPastilhas.map((p) => {
        return new Pastilha(p.espessura);
    });
    return pastilhas;
}

function criarPincasDeFreio(pastilhas: Pastilha[]) {
    const pincasDeFreio = pastilhas.map((p) => {
        return new PincaDeFreio(p, []);
    });
    return pincasDeFreio;
}

function criarDiscos(pincasDeFreio: PincaDeFreio[]) {
    const discos = pincasDeFreio.map((p) => {
        return new DiscoDeFreio(p);
    });
    return discos;
}