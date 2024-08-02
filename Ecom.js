class Product {
    constructor(id, name, description, price, category) {
        this.id = id,
            this.name = name,
            this.description = description,
            this.price = price,
            this.category = category
    }

    displayDetails() {
        return `${this.id} ${this.name} ${this.description} ${this.price}`
    }
}

class ShoppingCart {
    constructor() {
        this.products = []
    }
    addProduct(product) {
        this.products.push(product)
        return `${product.name} product has been added to cart`
    }

    removeProduct(productId) {
        const index = this.products.findIndex(product => product.id === productId)
        if (index !== -1) {
            const removedProduct = this.products.slice(index, 1)[0];
            return `${removedProduct.name} product has been removed`
        } else {
            return `${productId} doesn't exist`
        }
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0)
    }
    viewCart() {
        if (this.products.length === 0) {
            return 'Your Cart is empty'
        }

        return this.products.map(product => product.displayDetails())
    }
}

const product1 = new Product(1, "LuxSoap", "It is a sopa used for bath", 30, "Beauty");
const product2 = new Product(1, "LuxSoap", "It is a sopa used for bath", 30, "Beauty");
const product3 = new Product(1, "LuxSoap", "It is a sopa used for bath", 30, "Beauty");
// console.log(product1.displayDetails())


const cart = new ShoppingCart();
console.log(cart.addProduct(product1))
console.log(cart.addProduct(product2))

console.log(`Total:$${cart.calculateTotal()}`)

// console.log(cart.viewCart())