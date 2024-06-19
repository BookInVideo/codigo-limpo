interface StockExchange {
    currentPrice: (symbol: string) => number;
}

export default StockExchange;