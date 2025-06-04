// Strategy
interface PaymentStrategy {
    void pay(Float amount);
}

// Context
class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    private Float amount;

    ShoppingCart(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
        this.amount = 0f;
    }

    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public void processPayment() {
        this.paymentStrategy.pay(this.amount);
    }

    public void add(Float value) {
        this.amount += value;
    }

    public void remove(Float value) {
        Float currentAmount = this.amount;
        if (currentAmount - value < 0f) {
            throw new IllegalArgumentException("Cannot remove more than the current amount.");
        }
        this.amount -= value;
    }

    public void reset() {
        this.amount = 0f;
    }
}

// Concrete Strategies
class CardPaymentStrategy implements PaymentStrategy {
    @Override
    public void pay(Float amount) {
        System.out.println("Paying $" + amount + " using card.");
    }
}

class PaypalPaymentStrategy implements PaymentStrategy {
    @Override
    public void pay(Float amount) {
        System.out.println("Paying $" + amount + " using Paypal.");
    }
}

class CashPaymentStrategy implements PaymentStrategy {
    @Override
    public void pay(Float amount) {
        System.out.println("Paying $" + amount + " using cash.");
    }
}

// Example usage
class Main {
    public static void main(String[] args) {
        PaymentStrategy cardMethod = new CardPaymentStrategy();
        PaymentStrategy paypalMethod = new PaypalPaymentStrategy();
        PaymentStrategy cashMethod = new CashPaymentStrategy();
    
        ShoppingCart cart = new ShoppingCart(cardMethod);
        cart.add(100f);
        cart.processPayment();
        

        cart.remove(50f);
        cart.setPaymentStrategy(paypalMethod);
        cart.processPayment();

        cart.reset();
        cart.add(190f);
        cart.setPaymentStrategy(cashMethod);
        cart.processPayment();
    }
}