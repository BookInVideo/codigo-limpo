class TransactionManager {
    begin() {
        console.log('transacao iniciada');
    }

    complete() {
        console.log('transacao concluida')
    }
}

export default TransactionManager;