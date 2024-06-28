import StockExchange from "src/interface/StockExchange";

class FixedStockExchange implements StockExchange {
    private stockTable = [
        { symbol: "MSFT", price: 0 },
        { symbol: "APPL", price: 0 },
    ];

    fix(symbol: string, price: number) {
        const stock = this.stockTable.find((stock) => stock.symbol == symbol);
        if (stock) {
            stock.price = price;
        } else {
            throw new Error('stock not found');
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