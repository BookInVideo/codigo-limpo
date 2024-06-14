import OperacaoDAO from "./domain/OperacaoDAO";
import Operacao from "./domain/Operacao";
import TransactionManager from "./cross-cutting-concerns/TransactionManager";
import LogManager from "./cross-cutting-concerns/LogManager";
import SecurityManager from "./cross-cutting-concerns/SecurityManager";

class OperationProcessor {
    @Security
    @Log
    @Transaction
    processarOperacao(dao: OperacaoDAO, operacao: Operacao) {
        this.processamentoComplexoOperacao(operacao);
        dao.salvarOperacao(operacao);
    }

    private processamentoComplexoOperacao(operacao: Operacao) {
        console.log('processando complexo da operacao...');
    }
}

function Security(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const seguranca = new SecurityManager();
        if (seguranca.usuarioDesconhecido()) {
            throw new Error('Acesso negado');
        }
        originalMethod.apply(this, args);
    }
}

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const log = new LogManager();
        originalMethod.apply(this, args);
        log.info("Sucesso"); // log
    }
}

function Transaction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const transacao = new TransactionManager();
        transacao.begin(); // transação
        originalMethod.apply(this, args);
        transacao.complete(); // transação
    }
}

const operationProcessor = new OperationProcessor();
operationProcessor.processarOperacao(new OperacaoDAO(), new Operacao())