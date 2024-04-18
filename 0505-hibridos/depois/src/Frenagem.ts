import DiscoDeFreio from "./DiscoDeFreio";

class Frenagem {
    private discosDeFreio: DiscoDeFreio[];

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

    public freiosEstaoGastos(): boolean {
        return this.discosDeFreio.some((d) => d.pastilhaEstaGasta());
    }
}

export default Frenagem;