import Portfolio from "./Portfolio";
import FixedStockExchange from "./mock/FixedStockExchange";

describe("Portfolio", function() {
    it("add fixed stock to portfolio", function() {
        const exchange = new FixedStockExchange();
        exchange.fix("MSFT", 100);
        exchange.fix("AAPL", 100);
        const portfolio = new Portfolio(exchange);
        portfolio.add(5, "MSFT");
        portfolio.add(1, "AAPL");
        expect(portfolio.value()).toBe(600);
    })
});