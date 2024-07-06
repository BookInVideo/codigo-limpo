class Carro {
    constructor(frenagem) {
        this.frenagem = frenagem
    }

    acelerar() {
        if (this._freiosEstaoGastos()) {
            throw new Error("Os freios estao gastos, nao e seguro acelerar")
        }
        // implementacao...
    }

    _freiosEstaoGastos() {
        const discos = this.frenagem.discosDeFreio
        const pastilhas = discos.map(d => d.pincaDeFreio.pastilha)
        const temPastilhaGasta = pastilhas.some(p => {
            return p.espessura < p.espessuraMinima
        })
        return temPastilhaGasta
    }
}
  
  