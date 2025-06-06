import java.util.ArrayList;

/**
 * Interface Product
 * Represents the base component in the Composite Pattern.
 */
interface Product {
    /**
     * Gets the price of the product.
     * 
     * @return the product price as a number.
     */
    double getPrice();

    /**
     * Gets the name of the product.
     * 
     * @return the product name as a string.
     */
    String getName();

    void addProduct(Product product);
}

/**
 * Class IndividualProduct Represents a single product item.
 * Implements the Product interface.
 * 
 * @see Product
 */
class IndividualProduct implements Product {
    public double price;
    public String name;

    public IndividualProduct(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public void addProduct(Product product) {
    }

    @Override
    public double getPrice() {
        return this.price;
    }

    @Override
    public String getName() {
        return this.name;
    }
}

/*
 * Represents a collection of products or other carts.
 * Implements the Product interface.
 * 
 * @see Product
 */
class ShoppingCart implements Product {
    public String cartName;
    private ArrayList<Product> productList;

    public ShoppingCart(String cartName) {
        this.cartName = cartName;
        this.productList = new ArrayList<Product>();
    }

    @Override
    public double getPrice() {
        double total = 0;
        for (Product product : this.productList) {
            total += product.getPrice();
        }
        return total;
    }

    @Override
    public String getName() {
        return this.cartName;
    }

    @Override
    public void addProduct(Product product) {
        this.productList.add(product);
    }

    public void listProducts() {
        System.out.println("Products in " + this.cartName + ":");
        for (Product product : this.productList) {
            System.out.println("- " + product.getName() + ": $" + product.getPrice());
        }
    }
}

/**
 * Client - Demonstrates the Composite usage.
 */
public class Main {
    public static void main(String[] args) {
        Product book1 = new IndividualProduct("Design Patterns", 20.0);
        Product book2 = new IndividualProduct("Clean Code", 22.0);
        Product book3 = new IndividualProduct("Refactoring", 18.0);

        ShoppingCart techBooks = new ShoppingCart("Tech Book Combo");
        techBooks.addProduct(book1);
        techBooks.addProduct(book2);
        techBooks.addProduct(book3);

        Product promoBook = new IndividualProduct("You Don't Know JS", 15.0);

        ShoppingCart megaCart = new ShoppingCart("Full Book Package");
        megaCart.addProduct(techBooks);
        megaCart.addProduct(promoBook);

        megaCart.listProducts();
        techBooks.listProducts();

        System.out.println("\nTotal for Mega Cart: $" + megaCart.getPrice());
        System.out.println("\nTotal for Tech Books Combo: $" + techBooks.getPrice());
    }
}