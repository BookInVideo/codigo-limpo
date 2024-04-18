const address = {
    state: 'sp'
}

const cart = [
    {
        product: {
            name: 'Camiseta preta',
            price: 78.99,
            kilograms: 90
        },
        quantity: 3,
    }
];

const CART_WITH_1_ITEM = [
    {
        product: {
            name: 'Camiseta preta',
            price: 78.99,
            kilograms: 90
        },
        quantity: 3,
    }
]

const CART_WITH_2_ITEMS = [
    {
        product: {
            name: 'Camiseta preta',
            price: 78.99,
            kilograms: 90
        },
        quantity: 3,
    },
    {
        product: {
            name: 'Bermuda jeans',
            price: 44,
            kilograms: 150
        },
        quantity: 7,
    },
];

module.exports = {
    address,
    cart,
    CART_WITH_1_ITEM,
    CART_WITH_2_ITEMS,
}