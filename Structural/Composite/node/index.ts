/**
 * Product Interface
 * Represents the base component in the Composite Pattern.
 * 
 * @interface
 * @property {number} getPrice - Method to get the price of the product.
 * @property {string} getName - Method to get the name of the product.
 */
interface Product {
    getPrice(): number;
    getName(): string;
}

/**
 * Represents a single product item.
 * 
 * @implements {Product}
 */
class IndividualProduct implements Product {
    constructor(
        private readonly name: string,
        private readonly price: number
    ) { }

    getPrice(): number {
        const fixed = this.price.toFixed(2);
        return Number(fixed);
    }

    getName(): string {
        return this.name;
    }
}

/**
 * Composite Class - Represents a collection of products or other carts.
 * 
 * @implements {Product}
 */
class ShoppingCart implements Product {
    private readonly products: Product[] = [];

    constructor(private readonly cartName: string) { }

    getPrice(): number {
        const fixed = this.products.reduce((sum, product) => sum + product.getPrice(), 0).toFixed(2);
        return Number(fixed);
    }

    getName(): string {
        return this.cartName;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(product: Product): void {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    listProducts(): void {
        console.log(`\nCart: ${this.getName()} - Total: $${this.getPrice().toFixed(2)}`);
        this.products.forEach((p, i) =>
            console.log(`  ${i + 1}. ${p.getName()} - $${p.getPrice().toFixed(2)}`)
        );
    }
}

/**
 * Client - Demonstrates the Composite usage.
 */
class Main {
    public static main(): void {
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
