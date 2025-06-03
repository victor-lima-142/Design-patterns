import java.util.Optional;

// Strategy
interface PaymentStrategy {
    void pay(Float amount);
}

// Context
class PaymentProcessor {
    private PaymentStrategy paymentMethod;

    PaymentProcessor(PaymentStrategy paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void setPaymentStrategy(PaymentStrategy paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void processPayment(Float amount) {
        paymentMethod.pay(amount);
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

// Auxiliar classes
class User {
    private String name;
    private String email;
    private PaymentStrategy paymentMethod;
    
    User(String name, String email, Optional<PaymentStrategy> paymentMethod) {
        this.name = name;
        this.email = email;
        PaymentStrategy usedPaymentStrategy = paymentMethod.orElse(new CashPaymentStrategy());
        this.paymentMethod = usedPaymentStrategy;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public PaymentStrategy getPaymentStrategy() {
        return this.paymentMethod;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPaymentStrategy(PaymentStrategy paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public PaymentProcessor getPaymentProcessor() {
        return new PaymentProcessor(this.paymentMethod);
    }
}

class Order {
    private User user;
    private Float amount;

    Order(User user, Float amount) {
        this.user = user;
        this.amount = amount;
    }

    public void processOrder() {
        this.user.getPaymentProcessor().processPayment(amount);
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }
}

// Example usage
class Main {
    public static void main(String[] args) {
        PaymentStrategy cardPaymentStrategy = new CardPaymentStrategy();
        PaymentStrategy paypalPaymentStrategy = new PaypalPaymentStrategy();
        
        User user = new User("John Doe", "john.doe@mail.com", Optional.empty());
        Order order = new Order(user, 100f);
        order.processOrder();
        
        user.setPaymentStrategy(cardPaymentStrategy);
        order.setAmount(200f);
        order.processOrder();

        order.setAmount(300f);
        user.setPaymentStrategy(paypalPaymentStrategy);
        order.processOrder();
    }
}