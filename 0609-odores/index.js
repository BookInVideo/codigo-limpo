const Credito = require('./payment/Credito');
const Boleto = require('./payment/Boleto');
const Pix = require('./payment/Pix');

function calcularValorLiquidoAReceber(valor, tipoPagamento) {
    const meioDePagamento = criarMetodoDePagamento(tipoPagamento);
    const taxa = meioDePagamento.calcularTaxa(valor);
    const tarifa = meioDePagamento.calcularTarifa(valor);
    return valor - taxa - tarifa;
}

function criarMetodoDePagamento(tipoPagamento) {
    switch (tipoPagamento) {
        case 'CREDITO': {
            return new Credito();
        } case 'BOLETO': {
            return new Boleto();
        }  case 'PIX':
            return new Pix();
        default:
            throw new Error('Tipo de pagamento inválido');
    }
}

console.log(calcularValorLiquidoAReceber(400, 'CREDITO'));
console.log(calcularValorLiquidoAReceber(400, 'BOLETO'));
console.log(calcularValorLiquidoAReceber(400, 'PIX'));