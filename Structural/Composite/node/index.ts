// This is the main class/interface (this case is interface) in composite pattern. The father class
interface Product {
    getPrice(): number;
    getName(): string;
    addProduct(product: Product): void;
}

// This class is an individual product
class IndividualProduct implements Product {
    public price: number;
    public name: string;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    addProduct(product: Product): void { }

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }
}

// This class starts to use the composite fundamentals, it's a product too
class ComboProduct implements Product {
    public comboName: string;
    private productList: Product[] = [];

    constructor(comboName: string) {
        this.comboName = comboName;
    }

    getPrice(): number {
        let total: number = 0;
        this.productList.forEach((product) => total += product.getPrice());
        return total;
    }

    getName(): string {
        return this.comboName;
    }

    addProduct(product: Product): void {
        this.productList.push(product);
    }
}

// Testing
const designPatterns = new IndividualProduct("Design Patterns", 20.0);
const cleanCode = new IndividualProduct("Clean Code", 22.0);
const refactoring = new IndividualProduct("Refactoring", 18.0);

const ITBooksCombo = new ComboProduct("Combo of IT books");
ITBooksCombo.addProduct(designPatterns);
ITBooksCombo.addProduct(cleanCode);
ITBooksCombo.addProduct(refactoring);

console.log(ITBooksCombo.getPrice());
