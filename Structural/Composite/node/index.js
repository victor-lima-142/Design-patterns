// This class is a product
var IndividualProduct = /** @class */ (function () {
    function IndividualProduct(name, price) {
        this.name = name;
        this.price = price;
    }
    IndividualProduct.prototype.addProduct = function (product) { };
    IndividualProduct.prototype.getPrice = function () {
        return this.price;
    };
    IndividualProduct.prototype.getName = function () {
        return this.name;
    };
    return IndividualProduct;
}());
// This class starts to use the composite fundamentals, it's a product too
var ComboProduct = /** @class */ (function () {
    function ComboProduct(comboName) {
        this.productList = [];
        this.comboName = comboName;
    }
    ComboProduct.prototype.getPrice = function () {
        var total = 0;
        this.productList.forEach(function (product) { return (total += product.getPrice()); });
        return total;
    };
    ComboProduct.prototype.getName = function () {
        return this.comboName;
    };
    ComboProduct.prototype.addProduct = function (product) {
        this.productList.push(product);
    };
    return ComboProduct;
}());
var designPatterns = new IndividualProduct("Design Patterns", 20.00);
var cleanCode = new IndividualProduct("Clean Code", 22.00);
var refactoring = new IndividualProduct("Refactoring", 18.00);
var ITBooksCombo = new ComboProduct("Combo of IT books");
ITBooksCombo.addProduct(designPatterns);
ITBooksCombo.addProduct(cleanCode);
ITBooksCombo.addProduct(refactoring);
console.log(ITBooksCombo.getPrice());
