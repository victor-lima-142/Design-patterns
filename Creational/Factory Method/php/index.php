<?php

# Defining Templates Classes
interface Product {
    public function getProductName();
}

class Keyboard implements Product {
    public function getProductName() {
        return "Keyboard";
    }
}

class Mousepad implements Product {
    public function getProductName() {
        return "Mousepad";
    }
}

# Defining Creators (Factories)
abstract class ProductFactory {
    abstract public function factoryMethod(): Product;
}

class KeyboardFactory extends ProductFactory {
    public function factoryMethod(): Product {
        return new Keyboard();
    }
}

class MousepadFactory extends ProductFactory {
    public function factoryMethod(): Product {
        return new Mousepad();
    }
}

# Testing
$keyboardFactory = new KeyboardFactory();
$keyboard = $keyboardFactory->factoryMethod();
$mousepadFactory = new MousepadFactory();
$mousepad = $mousepadFactory->factoryMethod();

echo $keyboard->getProductName()."\n";
echo $mousepad->getProductName();

?>