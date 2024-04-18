import DiscoDeFreio from "./DiscoDeFreio";

class Frenagem {
    public discosDeFreio: DiscoDeFreio[];

    constructor(discosDeFreio: DiscoDeFreio[]) {
        this.discosDeFreio = discosDeFreio;
    }

    public acionar() {
        // implementacao...
    }

    public liberar() {
        // implementacao...
    }

    public acionarFreioDeEmergencia() {
        // implementacao...
    }
}

export default Frenagem;