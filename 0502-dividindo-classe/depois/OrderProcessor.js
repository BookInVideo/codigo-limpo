/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const Order = require('./Order');
const OrderFormatter = require('./classes/OrderFormatter');
const FreightCalculator = require('./classes/FreightCalculator');
const BasePriceCalculator = require('./classes/BasePriceCalculator');
const DiscountCalculator = require('./classes/DiscountCalculator');
const TotalPriceCalculator = require('./classes/TotalPriceCalculator');

class OrderProcessor {
    processToXml(cartItems) {
        const orderFormatter = new OrderFormatter();
        const processedOrder = this.process(cartItems);
        return orderFormatter.formatToXml(processedOrder);
    }

    process(cartItems) {
        const order = new Order();
        order.freight = this._calculateFreight(cartItems);
        order.basePrice = this._calculateBasePrice(cartItems);
        order.discount = this._getDiscount(order.basePrice);
        order.totalPrice = this._calculateTotalPrice(order);
        return order;
    }

    _calculateFreight(cartItems) {
        const freightCalculator = new FreightCalculator();
        return freightCalculator.calculate(cartItems);
    }
    
    _calculateTotalPrice(order) {
        const totalPriceCalculator = new TotalPriceCalculator();
        return totalPriceCalculator.calculate(order);
    }

    _getDiscount(basePrice) {
        const discountCalculator = new DiscountCalculator();
        return discountCalculator.calculate(basePrice)
    }

    _calculateBasePrice(cartItems) {
        const basePriceCalculator = new BasePriceCalculator()
        return basePriceCalculator.calculate(cartItems);
    }
}

module.exports = OrderProcessor;