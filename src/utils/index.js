const accumulate = (acc, value ) => acc + value.price

/**
 * This function calculate Total price off a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
 return products.reduce(accumulate, 0)
}