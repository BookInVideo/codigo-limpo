import OperacaoDAO from "./domain/OperacaoDAO";
import Operacao from "./domain/Operacao";
import TransactionManager from "./cross-cutting-concerns/TransactionManager";
import LogManager from "./cross-cutting-concerns/LogManager";
import SecurityManager from "./cross-cutting-concerns/SecurityManager";

class OperationProcessor {
    processarOperacao(
        transacao: TransactionManager, 
        log: LogManager, 
        seguranca: SecurityManager, 
        dao: OperacaoDAO, 
        operacao: Operacao
    ) {
        // segurança
        if (seguranca.usuarioDesconhecido()) {
            throw new Error('Acesso negado');
        }
        transacao.begin(); // transação
        this.processamentoComplexoOperacao(operacao); // domínio
        dao.salvarOperacao(operacao); // domínio
        transacao.complete(); // transação
        log.info("Sucesso"); // log
    }

    private processamentoComplexoOperacao(operacao: Operacao) {
        console.log('processando complexo da operacao...');
    }
}


const operationProcessor = new OperationProcessor();
operationProcessor.processarOperacao(
    new TransactionManager(),
    new LogManager(),
    new SecurityManager(),
    new OperacaoDAO(),
    new Operacao()
)