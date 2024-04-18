interface Funcionario {
    calcularPagamento(): number;
    calcularParticipacaoDeLucro(): number;
}

class PrestadorDeServico implements Funcionario {
    private horasTrabalhadas: number;
    private valorHora: number;

    constructor(horasTrabalhadas: number, valorHora: number) {
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }

    public calcularPagamento() {
        return this.horasTrabalhadas * this.valorHora;
    }

    public calcularParticipacaoDeLucro(): number {
        return 0;
    }
}

class Comissionista implements Funcionario {
    private salarioBase: number;
    private numeroDeVendas: number;
    private comissaoPorVenda: number;

    constructor(comissaoPorVenda: number, numeroDeVendas: number, salarioBase: number) {
        this.salarioBase = salarioBase;
        this.numeroDeVendas = numeroDeVendas;
        this.comissaoPorVenda = comissaoPorVenda;
    }

    public calcularPagamento() {
        const comissao = this.numeroDeVendas * this.comissaoPorVenda;
        return this.salarioBase + comissao;
    }

    public calcularParticipacaoDeLucro(): number {
        const pagamento = this.calcularPagamento();
        const plrFator = 5;
        return pagamento * plrFator;
    }
}

class Estagiario implements Funcionario {
    private bolsaEstagio: number;

    constructor(bolsaEstagio: number) {
        this.bolsaEstagio = bolsaEstagio;
    }

    calcularPagamento(): number {
        return this.bolsaEstagio;
    }

    calcularParticipacaoDeLucro(): number {
        const pagamento = this.calcularPagamento();
        const plrFator = 2;
        return pagamento * plrFator;
    }
}