// Strategy
interface PaymentStrategy {
    pay(amount: number): void
}

// Context
class ShoppingCart {
    private _amount: number;

    constructor(private _paymentStrategy: PaymentStrategy) {
        this._amount = 0
    }

    get paymentStrategy() { return this._paymentStrategy }

    get amount() { return this._amount }

    setPaymentStrategy(paymentStrategy: PaymentStrategy) {
        this._paymentStrategy = paymentStrategy;
    }

    processPayment() {
        this._paymentStrategy.pay(this._amount);
    }

    add(value: number) { this._amount += value }

    remove(value: number) {
        const currentAmount = this._amount;
        if (currentAmount - value < 0) console.log("Cannot remove more than the current amount.");
        else this._amount -= value
    }

    reset() { this._amount = 0 }
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

class Main {
    static main() {
        const cardMethod: PaymentStrategy = new CardPaymentStrategy();
        const paypalMethod: PaymentStrategy = new PaypalPaymentStrategy();
        const cashMethod: PaymentStrategy = new CashPaymentStrategy();

        const cart = new ShoppingCart(cardMethod);
        cart.add(100);
        cart.processPayment();

        cart.remove(50);
        cart.setPaymentStrategy(paypalMethod);
        cart.processPayment();

        cart.reset();
        cart.add(190);
        cart.setPaymentStrategy(cashMethod);
        cart.processPayment();
    }
}

Main.main();