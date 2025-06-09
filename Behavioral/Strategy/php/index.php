<?php

// Strategy
interface PaymentStrategy {
    public function pay($amount): void;
}

// Context
class ShoppingCart {
    private PaymentStrategy $paymentStrategy;
    private float $amount;

    public function __construct(PaymentStrategy $paymentStrategy) {
        $this->paymentStrategy = $paymentStrategy;
        $this->amount = 0.00;
    }

    public function setPaymentStrategy(PaymentStrategy $paymentStrategy): void {
        $this->paymentStrategy = $paymentStrategy;
    }

    public function processOrder(): void {
        $this->paymentStrategy->pay(amount: $this->amount);
    }

    public function reset(): void {
        $this->amount = 0.00;
    }

    public function add(float $value): void {
        $this->amount += $value;
    }

    public function remove(float $value): void {
        if ($value > $this->amount) {
            throw new Exception(message: "Not enough money in the cart.");
        }
        $this->amount += $value;
    }
}

// Concrete strategies
class CreditCardPaymentStrategy implements PaymentStrategy {
    public function pay($amount): void {
        echo "\nPaying $$amount using credit card.";
    }
}

class PaypalPaymentStrategy implements PaymentStrategy {
    public function pay($amount): void {
        echo "\nPaying $$amount using Paypal.";
    }
}

class CashPaymentStrategy implements PaymentStrategy {
    public function pay($amount): void {
        echo "\nPaying $$amount using cash.";
    }
}

class Main {
    public static function main(): void {
        $cardPaymentStrategy = new CreditCardPaymentStrategy();
        $paypalPaymentStrategy = new PaypalPaymentStrategy();
        $cashPaymentStrategy = new CashPaymentStrategy();

        $cart = new ShoppingCart(paymentStrategy: $cardPaymentStrategy);
        $cart->add(value: 100.0);
        $cart->processOrder();

        $cart->remove(value: 50.0);
        $cart->setPaymentStrategy(paymentStrategy: $cashPaymentStrategy);
        $cart->processOrder();

        $cart->reset();
        $cart->setPaymentStrategy(paymentStrategy: $paypalPaymentStrategy);
        $cart->add(value: 200.0);
        $cart->processOrder();
    }
}

Main::main();