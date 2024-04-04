// Defining Templates Classes
interface Product {
    String getProductName();
}

class Keyboard implements Product {
    @Override
    public String getProductName() {
        return "Keyboard";
    }
}

class Mousepad implements Product {
    @Override
    public String getProductName() {
        return "Mousepad";
    }
}

// Defining Creators (Factories)
interface ProductFactory {
    Product factoryMethod();
}

class KeyboardFactory implements ProductFactory {
    @Override
    public Product factoryMethod() {
        return new Keyboard();
    }
}

class MousepadFactory implements ProductFactory {
    @Override
    public Product factoryMethod() {
        return new Mousepad();
    }
}

// Testing
public class Main {
    public static void main(String[] args) {
        ProductFactory keyboardFactory = new KeyboardFactory();
        Product keyboard = keyboardFactory.factoryMethod();

        ProductFactory mousepadFactory = new MousepadFactory();
        Product mousepad = mousepadFactory.factoryMethod();

        System.out.println(keyboard.getProductName());
        System.out.println(mousepad.getProductName());
    } 
}