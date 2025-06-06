/**
 * Represents a single product item.
 *
 * @implements {Product}
 */
class IndividualProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        const fixed = this.price.toFixed(2);
        return Number(fixed);
    }
    getName() {
        return this.name;
    }
}
/**
 * Composite Class - Represents a collection of products or other carts.
 *
 * @implements {Product}
 */
class ShoppingCart {
    constructor(cartName) {
        this.cartName = cartName;
        this.products = [];
    }
    getPrice() {
        const fixed = this.products.reduce((sum, product) => sum + product.getPrice(), 0).toFixed(2);
        return Number(fixed);
    }
    getName() {
        return this.cartName;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    listProducts() {
        console.log(`\nCart: ${this.getName()} - Total: $${this.getPrice().toFixed(2)}`);
        this.products.forEach((p, i) => console.log(`  ${i + 1}. ${p.getName()} - $${p.getPrice().toFixed(2)}`));
    }
}
/**
 * Client - Demonstrates the Composite usage.
 */
class Main {
    static main() {
        const book1 = new IndividualProduct("Design Patterns", 20.0);
        const book2 = new IndividualProduct("Clean Code", 22.0);
        const book3 = new IndividualProduct("Refactoring", 18.0);
        const techBooks = new ShoppingCart("Tech Book Combo");
        techBooks.addProduct(book1);
        techBooks.addProduct(book2);
        techBooks.addProduct(book3);
        const promoBook = new IndividualProduct("You Don't Know JS", 15.0);
        const megaCart = new ShoppingCart("Full Book Package");
        megaCart.addProduct(techBooks);
        megaCart.addProduct(promoBook);
        megaCart.listProducts();
        techBooks.listProducts();
        console.log(`\nTotal for ${megaCart.getName()}: $${megaCart.getPrice()}`);
        console.log(`\nTotal for ${techBooks.getName()}: $${techBooks.getPrice()}`);
    }
}
Main.main();
