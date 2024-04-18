/*
    Comando para rodar o programa:
        node main
*/

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

class Pix {
    calcularTaxa(valor) {
        return 0;
    }

    calcularTarifa() {
        const taxaFixaEmReais = 0.50;
        return taxaFixaEmReais;
    }
}

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
