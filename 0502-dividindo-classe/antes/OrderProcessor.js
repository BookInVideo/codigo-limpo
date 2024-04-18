/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const Order = require('./Order');
const { XMLBuilder } = require("fast-xml-parser");

class OrderProcessor {
    _minValueToApplyDiscount = 250;
    _discountPercentage = 5;
    _taxPerKilogramPercentage = 0.6;

    processToXml(cartItems) {
        const processedOrder = this.process(cartItems);
        const xmlBuilder = new XMLBuilder();
        const xmlString = xmlBuilder.build({ Order: processedOrder });
        return xmlString;
    }

    process(cartItems) {
        const order = new Order();
        order.freight = this._calculateTaxPerKilogram(cartItems);
        order.basePrice = this._calculateBasePrice(cartItems);
        order.discount = this._getDiscount(order.basePrice);
        order.totalPrice = this._calculateTotalPrice(order);
        return order;
    }

    _calculateTaxPerKilogram(cartItems) {
        const totalKg = this._getTotalKilograms(cartItems);
        return (totalKg * this._taxPerKilogramPercentage) / 100;
    }
    
    _calculateTotalPrice(order) {
        const totalPrice = order.basePrice + order.freight - order.discount;
        return parseFloat(totalPrice.toFixed(2));
    }

    _getDiscount(basePrice) {
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

    _calculateBasePrice(cartItems) {
        const prices = cartItems.map(i => i.product.price * i.quantity);
        const result = prices.reduce((prev, current) => prev + current);
        return parseFloat(result.toFixed(2));
    }
    
    _getTotalKilograms(cartItems) {
        const kilograms = cartItems.map(i => i.product.kilograms * i.quantity);
        const result = kilograms.reduce((prev, current) => prev + current);
        return result;
    }
}

module.exports = OrderProcessor;