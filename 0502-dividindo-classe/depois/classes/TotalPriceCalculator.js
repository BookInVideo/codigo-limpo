class TotalPriceCalculator {
    calculate(order) {
        const totalPrice = order.basePrice + order.freight - order.discount;
        return parseFloat(totalPrice.toFixed(2));
    }
}

module.exports = TotalPriceCalculator;