import Pastilha from "./Pastilha";

class PincaDeFreio {
    private pastilha: Pastilha;
    private pistoes: Object[];

    constructor(pastilha: Pastilha, pistoes: Object[]) {
        this.pastilha = pastilha;
        this.pistoes = pistoes;
    }

    public acionarPistoes() {
        // implementacao...
    }

    public liberarPistoes() {
        // implementacao...
    }

    public pastilhaEstaGasta() {
        return this.pastilha.espessura < this.pastilha.espessuraMinima;
    }
}

export default PincaDeFreio;