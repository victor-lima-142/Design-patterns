<?php

// This is the main class/interface (this case is interface) in composite pattern. The father class
interface Product {
    public function getPrice();
    public function getName();
    public function addProduct(Product $product);
}

// This class is an individual product
class IndividualProduct implements Product {
    public float $price;
    public string $name;

    public function __construct(string $name, float $price) {
        $this->name = $name;
        $this->price = $price;
    }

    public function addProduct(Product $product) {}

    public function getPrice() {
        return $this->price;
    }

    public function getName() {
        return $this->name;
    }
}

// This class starts to use the composite fundamentals, it's a product too
class ComboProduct implements Product {
    public string $comboName;
    private array $productList;

    public function __construct(string $comboName) {
        $this->comboName = $comboName;
        $this->productList = [];
    }

    public function getPrice() {
        $total = 0.0;
        foreach ($this->productList as $product) {
            $total += $product->getPrice();
        }
        return $total;
    }

    public function getName() {
        return $this->comboName;
    }

    public function addProduct(Product $product) {
        array_push($this->productList, $product);
    }
}

// Testing
$designPatterns = new IndividualProduct("Design Patterns", 20.0);
$cleanCode = new IndividualProduct("Clean Code", 22.0);
$refactoring = new IndividualProduct("Refactoring", 18.0);

$ITBooksCombo = new ComboProduct("Combo of IT books");
$ITBooksCombo->addProduct($designPatterns);
$ITBooksCombo->addProduct($cleanCode);
$ITBooksCombo->addProduct($refactoring);

echo $ITBooksCombo->getPrice();

?>