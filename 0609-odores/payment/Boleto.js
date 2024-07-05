class Boleto {
    calcularTaxa(valor) {
        const taxaFixaEmReais = 1.40;
        const taxaIntermediacaoPorcentagem = 4.99;
        const taxaIntermediacaoEmReais = (valor * taxaIntermediacaoPorcentagem) / 100;
        const taxaEmReais = taxaIntermediacaoEmReais + taxaFixaEmReais;
        return taxaEmReais;
    }

    calcularTarifa(valor) {
        const taxaFixaEmReais = 3.49;
        return taxaFixaEmReais;
    }
}

module.exports = Boleto;
