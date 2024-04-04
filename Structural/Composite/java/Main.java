import java.util.ArrayList; // import the ArrayList class

// This is the main class/interface (this case is interface) in composite pattern. The father class
interface Product {
    double getPrice();
    String getName();
    void addProduct(Product product);
}

// This class is an individual product
class IndividualProduct implements Product {
    public double price;
    public String name;

    public IndividualProduct(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public void addProduct(Product product) {}

    @Override
    public double getPrice() {
        return this.price;
    }

    @Override
    public String getName() {
        return this.name;
    }
}

// This class starts to use the composite fundamentals, it's a product too
class ComboProduct implements Product {
    public String comboName;
    private ArrayList<Product> productList;

    public ComboProduct(String comboName) {
        this.comboName = comboName;
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
        return this.comboName;
    }

    @Override
    public void addProduct(Product product) {
        this.productList.add(product);
    }
}


// Testing
public class Main {
    public static void main(String[] args) {
        Product designPatterns = new IndividualProduct("Design Patterns", 20.0);
        Product cleanCode = new IndividualProduct("Clean Code", 22.0);
        Product refactoring = new IndividualProduct("Refactoring", 18.0);

        Product ITBooksCombo = new ComboProduct("Combo of IT books");
        ITBooksCombo.addProduct(designPatterns);
        ITBooksCombo.addProduct(cleanCode);
        ITBooksCombo.addProduct(refactoring);

        System.out.println(ITBooksCombo.getPrice());
    }
}