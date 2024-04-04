//Defining Templates Classes
interface Product {
    getProductName(): string;
}

class Keyboard implements Product {
    getProductName(): string {
        return 'Keyboard';
    }
}

class Mousepad implements Product {
    getProductName(): string {
        return 'Mousepad';
    }
}

//Defining Creators (Factories)
interface ProductFactory {
    factoryMethod(): Product;
}

class KeyboardFactory implements ProductFactory {
    factoryMethod(): Product {
        return new Keyboard();
    }
}

class MousepadFactory implements ProductFactory {
    factoryMethod(): Product {
        return new Mousepad();
    }
}

// Testing
const keyboard = new KeyboardFactory().factoryMethod();
const mousepad = new MousepadFactory().factoryMethod();

console.log(keyboard.getProductName())
console.log(mousepad.getProductName())
