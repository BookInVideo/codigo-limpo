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
        if (this.frenagem.freiosEstaoGastos()) {
            throw new Error('Os freios estao gastos, nao e seguro acelerar')
        }
        // implementacao...
    }
}

export default Carro;