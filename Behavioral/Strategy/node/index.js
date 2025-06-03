// Context
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(_strategy) {
        this._strategy = _strategy;
    }
    Object.defineProperty(PaymentProcessor.prototype, "paymentMethod", {
        set: function (strategy) {
            this._strategy = strategy;
        },
        enumerable: false,
        configurable: true
    });
    PaymentProcessor.prototype.process = function (amount) { this._strategy.pay(amount); };
    return PaymentProcessor;
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
// Auxiliar classes
var User = /** @class */ (function () {
    function User(_name, _email, _paymentMethod) {
        this._name = _name;
        this._email = _email;
        this._paymentMethod = _paymentMethod;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () { return this._name; },
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () { return this._email; },
        set: function (email) { this._email = email; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "paymentMethod", {
        get: function () { return this._paymentMethod; },
        set: function (paymentMethod) { this._paymentMethod = paymentMethod; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "paymentProcessor", {
        get: function () {
            return new PaymentProcessor(this.paymentMethod);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Order = /** @class */ (function () {
    function Order(_user, _amount) {
        this._user = _user;
        this._amount = _amount;
    }
    Order.prototype.processPayment = function () {
        this._user.paymentProcessor.process(this._amount);
    };
    Object.defineProperty(Order.prototype, "user", {
        get: function () { return this._user; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "amount", {
        get: function () { return this._amount; },
        set: function (amount) { this._amount = amount; },
        enumerable: false,
        configurable: true
    });
    return Order;
}());
// Example usage
var cardMethod = new CardPaymentStrategy();
var paypalMethod = new PaypalPaymentStrategy();
var cashMethod = new CashPaymentStrategy();
var user = new User("John", "john.doe@mail.com.br", cardMethod);
var order = new Order(user, 100);
order.processPayment();
user.paymentMethod = paypalMethod;
order.amount = 200;
order.processPayment();
user.paymentMethod = cashMethod;
order.amount = 300;
order.processPayment();
