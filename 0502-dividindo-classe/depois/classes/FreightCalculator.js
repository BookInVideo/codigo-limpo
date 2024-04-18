class FreightCalculator {
    _taxPerKilogramPercentage = 0.6;

    calculate(cartItems) {
        const totalKg = this._getTotalKilograms(cartItems);
        return (totalKg * this._taxPerKilogramPercentage) / 100;
    }

    _getTotalKilograms(cartItems) {
        const kilograms = cartItems.map(i => i.product.kilograms * i.quantity);
        const result = kilograms.reduce((prev, current) => prev + current);
        return result;
    }
}

module.exports = FreightCalculator;