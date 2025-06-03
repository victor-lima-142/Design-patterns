// Strategy
interface PaymentStrategy {
    pay(amount: number): void
}

// Context
class PaymentProcessor {
    constructor(private _strategy: PaymentStrategy) { }

    set paymentMethod(strategy: PaymentStrategy) {
        this._strategy = strategy;
    }

    process(amount: number) { this._strategy.pay(amount); }
}

// Concrete Strategies
class CardPaymentStrategy implements PaymentStrategy {
    pay(amount: number) {
        console.log(`I'm using the concrete Card Payment for payment of $${amount}`)
    }
}

class PaypalPaymentStrategy implements PaymentStrategy {
    pay(amount: number) {
        console.log(`I'm using the concrete Paypal payment for payment of $${amount}`)
    }
}

class CashPaymentStrategy implements PaymentStrategy {
    pay(amount: number) {
        console.log(`I'm using the concrete Cash payment for payment of $${amount}`)
    }
}

// Auxiliar classes
class User {
    constructor(private _name: string, private _email: string, private _paymentMethod: PaymentStrategy) { }

    set name(name: string) { this._name = name }

    get name(): string { return this._name }

    set email(email: string) { this._email = email }

    get email() { return this._email }

    get paymentMethod() { return this._paymentMethod }

    set paymentMethod(paymentMethod: PaymentStrategy) { this._paymentMethod = paymentMethod; }

    get paymentProcessor(): PaymentProcessor {
        return new PaymentProcessor(this.paymentMethod);
    }
}

class Order {
    constructor(private _user: User, private _amount: number) { }

    processPayment() {
        this._user.paymentProcessor.process(this._amount);
    }

    get user() { return this._user }

    get amount() { return this._amount }

    set amount(amount: number) { this._amount = amount }
}

// Example usage
const cardMethod: PaymentStrategy = new CardPaymentStrategy();
const paypalMethod: PaymentStrategy = new PaypalPaymentStrategy();
const cashMethod: PaymentStrategy = new CashPaymentStrategy();

const user = new User("John", "john.doe@mail.com.br", cardMethod);
const order = new Order(user, 100);
order.processPayment();

user.paymentMethod = paypalMethod;
order.amount = 200;
order.processPayment();

user.paymentMethod = cashMethod;
order.amount = 300;
order.processPayment();