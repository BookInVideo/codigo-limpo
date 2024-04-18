class PrestadorDeServico {
    public horasTrabalhadas: number;
    private _valorHora: number;

    get valorHora() {
        return this._valorHora;
    }
}

class Comissionista {
    public salarioBase: number;
    public numeroDeVendas: number;
    public comissaoPorVenda: number;
}

class Estagiario {
    public bolsaEstagio: number;
}

class Remuneracao {
    public calcularPagamento(funcionario: Object) {
        if (funcionario instanceof PrestadorDeServico) {
            return funcionario.horasTrabalhadas * funcionario.valorHora;
        } else if (funcionario instanceof Comissionista) {
            const comissao = funcionario.numeroDeVendas * funcionario.comissaoPorVenda;
            return funcionario.salarioBase + comissao;
        } else if (funcionario instanceof Estagiario) {
            return funcionario.bolsaEstagio;
        } else {
            throw new Error(`Funcionario inválido`);
        }
    }

    public calcularParticipacaoDeLucro(funcionario: Object) {
        if (funcionario instanceof PrestadorDeServico) {
            return 0;
        } else if (funcionario instanceof Comissionista) {
            const pagamento = this.calcularPagamento(funcionario);
            const plrFator = 5;
            return pagamento * plrFator;
        } else if (funcionario instanceof Estagiario) {
            const pagamento = this.calcularPagamento(funcionario);
            const plrFator = 2;
            return pagamento * plrFator;
        } else {
            throw new Error(`Funcionario inválido`);
        }
    }
}