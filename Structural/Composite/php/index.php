<?php

/**
 * Interface Product
 * Represents the base component in the Composite Pattern.
 */
interface Product
{
    /**
     * Get the price of the product.
     *
     * @return float
     */
    public function getPrice(): float;

    /**
     * Get the name of the product.
     *
     * @return string
     */
    public function getName(): string;
}

/**
 * Represents a single product item.
 * 
 * @implements Product
 */
class IndividualProduct implements Product
{
    private float $price;
    private string $name;

    public function __construct(string $name, float $price)
    {
        $this->name = $name;
        $this->price = $price;
    }

    public function addProduct(Product $product)
    {
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

/*
 * Represents a collection of products or other carts.
 * Implements the Product interface.
 */
class ShoppingCart implements Product
{
    public string $comboName;
    private array $productList;

    public function __construct(string $comboName)
    {
        $this->comboName = $comboName;
        $this->productList = [];
    }

    public function getPrice(): float
    {
        $total = 0.0;
        foreach ($this->productList as $product) {
            $total += $product->getPrice();
        }
        return floatval($total);
    }

    public function getName(): string
    {
        return $this->comboName;
    }

    /**
     * Adds a product to the shopping cart.
     *
     * @param Product $product
     */
    public function addProduct(Product $product)
    {
        array_push($this->productList, $product);
    }

    public function listProducts(): void {
        echo "Products in {$this->comboName}:\n";
        foreach ($this->productList as $product) {
            echo "- {$product->getName()} (Price: {$product->getPrice()})\n";
        }
    }
}

/**
 * Client - Demonstrates the Composite usage.
 */
class Main
{
    public static function main()
    {
        $book1 = new IndividualProduct("Design Patterns", 20.0);
        $book2 = new IndividualProduct("Clean Code", 22.0);
        $book3 = new IndividualProduct("Refactoring", 18.0);

        $techBooks = new ShoppingCart("Combo of IT books");
        $techBooks->addProduct($book1);
        $techBooks->addProduct($book2);
        $techBooks->addProduct($book3);

        $promoBook = new IndividualProduct("You Don't Know JS", 15.0);

        $megaCart = new ShoppingCart("Full Book Package");
        $megaCart->addProduct($techBooks);
        $megaCart->addProduct($promoBook);

        $techBooks->listProducts();
        echo "Total price of {$techBooks->getName()}: " . $techBooks->getPrice() . "\n";

        $megaCart->listProducts();
        echo "Total price of {$megaCart->getName()}: " . $megaCart->getPrice() . "\n";
    }
}

?>