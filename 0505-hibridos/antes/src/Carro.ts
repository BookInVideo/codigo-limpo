/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/


import Frenagem from "./Frenagem";

class Carro {
    private frenagem: Frenagem;
    
    constructor(frenagem: Frenagem) {
        this.frenagem = frenagem;
    }

    public acelerar() {
        if (this.freiosEstaoGastos()) {
            throw new Error('Os freios estao gastos, nao e seguro acelerar')
        }
        // implementacao...
    }
    
    private freiosEstaoGastos(): boolean {
        const discos = this.frenagem.discosDeFreio;
        const pastilhas = discos.map((d) => d.pincaDeFreio.pastilha);
        const temPastilhaGasta = pastilhas.some((p) => {
            return p.espessura < p.espessuraMinima;
        });
        return temPastilhaGasta;
    }
}

export default Carro;