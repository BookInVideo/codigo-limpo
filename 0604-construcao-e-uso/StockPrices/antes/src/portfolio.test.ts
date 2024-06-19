import Portfolio from "./Portfolio";

describe("Portfolio", function() {
    it("add fixed stock to portfolio", function() {
        const portfolio = new Portfolio();
        
        portfolio.add(5, "MSFT");
        portfolio.add(1, "AAPL");
        
        expect(portfolio.value()).toBe(600);
    })
});