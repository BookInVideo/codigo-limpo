/*
    Comando para rodar o programa:
        node main
*/

function calcularValorLiquidoAReceber(valor, tipoPagamento) {
    const taxa = calcularTaxa(valor, tipoPagamento);
    const tarifa = calcularTarifa(valor, tipoPagamento);
    return valor - taxa - tarifa;
}

function calcularTaxa(valor, tipoPagamento) {
    switch (tipoPagamento) {
        case 'CREDITO': {
            const taxaPorcentagem = 3.49;
            const taxaEmReais = (valor * taxaPorcentagem) / 100;
            return taxaEmReais;
        } case 'BOLETO': {
            const taxaFixaEmReais = 1.40;
            const taxaIntermediacaoPorcentagem = 4.99;
            const taxaIntermediacaoEmReais = (valor * taxaIntermediacaoPorcentagem) / 100;
            const taxaEmReais = taxaIntermediacaoEmReais + taxaFixaEmReais;
            return taxaEmReais;
        }  case 'PIX':
            return 0;
        default:
            throw new Error('Tipo de pagamento inválido');
    }
}

function calcularTarifa(valor, tipoPagamento) {
    switch (tipoPagamento) {
        case 'CREDITO': {
            const taxaPorcentagem = 2;
            const taxaEmReais = (valor * taxaPorcentagem) / 100;
            return taxaEmReais;
        } case 'BOLETO': {
            const taxaFixaEmReais = 3.49;
            return taxaFixaEmReais;
        }  case 'PIX':
            const taxaFixaEmReais = 0.50;
            return taxaFixaEmReais;
        default:
            throw new Error('Tipo de pagamento inválido');
    }
}

console.log(calcularValorLiquidoAReceber(400, 'CREDITO'));
console.log(calcularValorLiquidoAReceber(400, 'BOLETO'));
console.log(calcularValorLiquidoAReceber(400, 'PIX'));
