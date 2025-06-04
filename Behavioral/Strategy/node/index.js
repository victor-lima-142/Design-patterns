// Context
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(_paymentStrategy) {
        this._paymentStrategy = _paymentStrategy;
        this._amount = 0;
    }
    Object.defineProperty(ShoppingCart.prototype, "paymentStrategy", {
        get: function () { return this._paymentStrategy; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "amount", {
        get: function () { return this._amount; },
        enumerable: false,
        configurable: true
    });
    ShoppingCart.prototype.setPaymentStrategy = function (paymentStrategy) {
        this._paymentStrategy = paymentStrategy;
    };
    ShoppingCart.prototype.processPayment = function () {
        this._paymentStrategy.pay(this._amount);
    };
    ShoppingCart.prototype.add = function (value) { this._amount += value; };
    ShoppingCart.prototype.remove = function (value) {
        var currentAmount = this._amount;
        if (currentAmount - value < 0)
            console.log("Cannot remove more than the current amount.");
        else
            this._amount -= value;
    };
    ShoppingCart.prototype.reset = function () { this._amount = 0; };
    return ShoppingCart;
}());
// Concrete Strategies
var CardPaymentStrategy = /** @class */ (function () {
    function CardPaymentStrategy() {
    }
    CardPaymentStrategy.prototype.pay = function (amount) {
        console.log("I'm using the concrete Card Payment for payment of $".concat(amount));
    };
    return CardPaymentStrategy;
}());
var PaypalPaymentStrategy = /** @class */ (function () {
    function PaypalPaymentStrategy() {
    }
    PaypalPaymentStrategy.prototype.pay = function (amount) {
        console.log("I'm using the concrete Paypal payment for payment of $".concat(amount));
    };
    return PaypalPaymentStrategy;
}());
var CashPaymentStrategy = /** @class */ (function () {
    function CashPaymentStrategy() {
    }
    CashPaymentStrategy.prototype.pay = function (amount) {
        console.log("I'm using the concrete Cash payment for payment of $".concat(amount));
    };
    return CashPaymentStrategy;
}());
// Example usage
var cardMethod = new CardPaymentStrategy();
var paypalMethod = new PaypalPaymentStrategy();
var cashMethod = new CashPaymentStrategy();
var cart = new ShoppingCart(cardMethod);
cart.add(100);
cart.processPayment();
cart.remove(50);
cart.setPaymentStrategy(paypalMethod);
cart.processPayment();
cart.reset();
cart.add(190);
cart.setPaymentStrategy(cashMethod);
cart.processPayment();
