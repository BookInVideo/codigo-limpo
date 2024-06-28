class USAExchange {
    currentPrice(_symbol: string) {
        const randomNumberBetween1And100 = Math.floor(Math.random() * 100) + 1;
        return randomNumberBetween1And100;
    }
}

export default USAExchange;