import PincaDeFreio from "./PincaDeFreio";

class DiscoDeFreio {
    private pincaDeFreio: PincaDeFreio;

    constructor(pincaDeFreio: PincaDeFreio) {
        this.pincaDeFreio = pincaDeFreio;
    }

    public liberarPincaDeFreio() {
        // implementacao...
    }

    public pressionarPincaDeFreio() {
        // implementacao...
    }

    public pastilhaEstaGasta() {
        return this.pincaDeFreio.pastilhaEstaGasta();
    }
}

export default DiscoDeFreio;
