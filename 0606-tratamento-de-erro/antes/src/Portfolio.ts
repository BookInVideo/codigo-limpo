import PortfolioStock from "./interface/PortfolioStock";
import StockExchange from "./interface/StockExchange";

class Portfolio {
    private stocks: Array<PortfolioStock> = [];
    private stockExchange: StockExchange;

    constructor(stockExchange: StockExchange) {
        this.stockExchange = stockExchange;
    }

    add(quantity: number, symbol: string) {
        const price = this.stockExchange.currentPrice(symbol);
        this.stocks.push({ quantity, symbol, price });
    }

    value() {
        const totalPrices = this.stocks.map((stock) => {
            return stock.price * stock.quantity;
        });
        return totalPrices.reduce((prev, current) => prev + current);
    }
}

export default Portfolio;