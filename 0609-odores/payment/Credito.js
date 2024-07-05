class Credito {
    calcularTaxa(valor) {
        const taxaPorcentagem = 3.49;
        const taxaEmReais = (valor * taxaPorcentagem) / 100;
        return taxaEmReais;
    }

    calcularTarifa(valor) {
        const taxaPorcentagem = 2;
        const taxaEmReais = (valor * taxaPorcentagem) / 100;
        return taxaEmReais;
    }
}

module.exports = Credito;
