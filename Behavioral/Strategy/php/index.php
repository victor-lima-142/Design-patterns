<?php

// Strategy
interface PaymentStrategy {
    public function pay($amount): void;
}

// Concrete strategies
class CreditCardPaymentStrategy implements PaymentStrategy {
    public function pay($amount): void {
        echo "Paying $$amount using credit card.";
    }
}

class PaypalPaymentStrategy implements PaymentStrategy {
    public function pay($amount): void {
        echo "Paying $$amount using Paypal.";
    }
}

class CashPaymentStrategy implements PaymentStrategy {
    public function pay($amount): void {
        echo "Paying $$amount using cash.";
    }
}

class PaymentProcessor {
    private PaymentStrategy $paymentMethod;

    public function __construct(PaymentStrategy $paymentMethod) {
        $this->paymentMethod = $paymentMethod;
    }

    public function processPayment($amount): void {
        $this->paymentMethod->pay($amount);
    }
}

// Auxiliar classes
class User {
    private string $name;
    private string $email;
    private PaymentStrategy $paymentMethod;

    public function __construct(string $name, string $email, ?PaymentStrategy $paymentMethod) {
        $this->name = $name;
        $this->email = $email;
        if ($paymentMethod === null) {
            $paymentMethod = new CashPaymentStrategy();
        }
        $this->paymentMethod = $paymentMethod;
    }

    public function setPaymentStrategy(PaymentStrategy $paymentMethod): void {
        $this->paymentMethod = $paymentMethod;
    }

    public function getPaymentProcessor(): PaymentProcessor {
        return new PaymentProcessor($this->paymentMethod);
    }

    public function getName(): string {
        return $this->name;
    }

    public function getEmail(): string {
        return $this->email;
    }

    public function setName(string $name): void {
        $this->name = $name;
    }

    public function setEmail(string $email): void {
        $this->email = $email;
    }
}

class Order {
    private User $user;
    private float $amount;

    public function __construct(User $user, float $amount) {
        $this->user = $user;
        $this->amount = $amount;
    }

    public function processOrder(): void {
        $this->user->getPaymentProcessor()->processPayment($this->amount);
    }

    public function setAmount(float $amount): void {
        $this->amount = $amount;
    }
}

// Example usage
$cardPaymentStrategy = new CreditCardPaymentStrategy();
$paypalPaymentStrategy = new PaypalPaymentStrategy();
$cashPaymentStrategy = new CashPaymentStrategy();

$user = new User("John Doe", "john.doe@mail.com", new CreditCardPaymentStrategy());
$order = new Order($user, 100.0);
$order->processOrder();

$user->setPaymentStrategy($cashPaymentStrategy);
$order->setAmount(200.0);
$order->processOrder();

$user->setPaymentStrategy($paypalPaymentStrategy);
$order->setAmount(300.0);
$order->processOrder();