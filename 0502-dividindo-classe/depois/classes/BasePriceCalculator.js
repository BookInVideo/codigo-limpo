class BasePriceCalculator {
    calculate(cartItems) {
        const prices = cartItems.map(i => i.product.price * i.quantity);
        const result = prices.reduce((prev, current) => prev + current);
        return parseFloat(result.toFixed(2));
    }
}

module.exports = BasePriceCalculator;