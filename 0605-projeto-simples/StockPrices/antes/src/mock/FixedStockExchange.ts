import StockExchange from "src/interface/StockExchange";

class FixedStockExchange implements StockExchange {
    private stockTable = [
        { symbol: "MSFT", price: 0 },
        { symbol: "AAPL", price: 0 },
    ];

    fix(symbol: string, price: number) {
        const stock = this.stockTable.find((stock) => stock.symbol == symbol);
        if (stock) {
            stock.price = price;
        }
    }

    currentPrice(symbol: string) {
        const stock = this.stockTable.find((stock) => stock.symbol == symbol);
        if (stock) {
            return stock.price;
        }
        throw new Error('stock not found');
    }
}

export default FixedStockExchange;