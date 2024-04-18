/*
Para baixar as dependências do projeto: 
    npm install
Para rodar os testes: 
    npm run test
*/

const OrderProcessor = require("./OrderProcessor");
const {
    CART_WITH_1_ITEM,
    CART_WITH_2_ITEMS,
} = require("./Cart.mock");

describe('OrderProcessor', function() {
    const minValueToApplyDiscount = 250;
    const discountPercetage = 5;

    it('base price with 1 item', function() {
        const orderProcessor = new OrderProcessor();
        const order = orderProcessor.process(CART_WITH_1_ITEM);
        const basePrice = calculateBasePrice(CART_WITH_1_ITEM);

        expect(order.basePrice).toBe(basePrice);
    });

    it('base price with 2 items', function() {
        const orderProcessor = new OrderProcessor();
        const order = orderProcessor.process(CART_WITH_2_ITEMS);
        const basePrice = calculateBasePrice(CART_WITH_2_ITEMS);

        expect(order.basePrice).toBe(basePrice);
    });

    it('freight according with kilograms', function() {
        const orderProcessor = new OrderProcessor();
        const processedOrder = orderProcessor.process(CART_WITH_2_ITEMS);
        const freight = calculateFreight(CART_WITH_2_ITEMS);

        expect(processedOrder.freight).toBe(freight);
    });

    it('total price with discount', function() {
        const orderProcessor = new OrderProcessor();

        const order = orderProcessor.process(CART_WITH_2_ITEMS);
        const freight = calculateFreight(CART_WITH_2_ITEMS);
        const discount = (order.basePrice * discountPercetage) / 100;
        const totalPrice = calculateTotalPrice(order.basePrice, discount, freight);

        expect(order.basePrice).toBeGreaterThan(minValueToApplyDiscount);
        expect(order.totalPrice).toBe(totalPrice);
    });

    it('total price without discount', function() {
        const orderProcessor = new OrderProcessor();
        const order = orderProcessor.process(CART_WITH_1_ITEM);
        const freight = calculateFreight(CART_WITH_1_ITEM);

        expect(order.totalPrice).toBe(order.basePrice + freight);
    });

    it('apply discount', function() {
        const orderProcessor = new OrderProcessor();

        const order = orderProcessor.process(CART_WITH_2_ITEMS);
        const discount = calculateDiscount(order.basePrice, discountPercetage);

        expect(order.basePrice).toBeGreaterThan(minValueToApplyDiscount);
        expect(order.discount).toBe(discount);
    });

    it('', function() {
        const orderProcessor = new OrderProcessor();
        const xmlOrder = orderProcessor.processToXml(CART_WITH_2_ITEMS);
        expect(xmlOrder).toBe('<Order><basePrice>544.97</basePrice><freight>7.92</freight><discount>27.25</discount><totalPrice>525.64</totalPrice></Order>');

    })
});

function calculateDiscount(basePrice, discountPercetage) {
    const discount = (basePrice * discountPercetage) / 100;
    return parseFloat(discount.toFixed(2));
}

function calculateTotalPrice(basePrice, discount, freight) {
    const totalPrice = basePrice - discount + freight;
    return parseFloat(totalPrice.toFixed(2));
}

function calculateBasePrice(items) {
    const prices = items.map(i => i.product.price * i.quantity);
    const sumOfPrices = prices.reduce((prev, current) => prev + current);
    return parseFloat(sumOfPrices.toFixed(2));
}

function calculateFreight(cartItems) {
    const kilograms = cartItems.map((item) => item.product.kilograms * item.quantity);
    const totalKilograms = kilograms.reduce((prev, current) => prev + current);
    return (totalKilograms * 0.6) / 100;
}