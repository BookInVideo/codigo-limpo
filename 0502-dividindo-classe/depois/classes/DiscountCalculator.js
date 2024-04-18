class DiscountCalculator {
    _discountPercentage = 5;
    _minValueToApplyDiscount = 250;

    calculate(basePrice) {
        if (basePrice > this._minValueToApplyDiscount) {
            return this._calculateDiscount(basePrice);
        } else {
            return 0;
        }
    }

    _calculateDiscount(basePrice) {
        const discount = (basePrice * this._discountPercentage) / 100;
        return parseFloat(discount.toFixed(2));
    }
}

module.exports = DiscountCalculator;