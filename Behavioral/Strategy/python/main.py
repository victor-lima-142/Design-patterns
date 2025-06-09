from abc import ABC, abstractmethod

# Strategy
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: float) -> None:
        pass


# Context
class ShoppingCart:
    def __init__(self, payment_strategy: PaymentStrategy):
        self._payment_strategy = payment_strategy
        self._amount = 0

    def set_payment_method(self, payment_strategy: PaymentStrategy) -> None:
        self._payment_strategy = payment_strategy

    def add(self, value: float) -> None:
        self._amount += value

    def remove(self, value: float) -> None:
        if (value > self._amount):
            raise ValueError("Not enough items in the cart")
        else:
            self._amount -= value
    
    def reset(self) -> None:
        self._amount = 0

    def process_payment(self) -> None:
        self._payment_strategy.pay(self._amount)


# Concrete Strategies
class CreditCardPaymentStrategy(PaymentStrategy):
    def pay(self, amount: float) -> None:
        print(f"Paid {amount} using credit card")


class PayPalPaymentStrategy(PaymentStrategy):
    def pay(self, amount: float) -> None:
        print(f"Paid {amount} using PayPal")


class BitcoinPaymentStrategy(PaymentStrategy):
    def pay(self, amount: float) -> None:
        print(f"Paid {amount} using Bitcoin")


class Main:
    @staticmethod
    def main():
        card_method = CreditCardPaymentStrategy()
        paypal_method = PayPalPaymentStrategy()
        bitcoin_method = BitcoinPaymentStrategy()

        cart = ShoppingCart(card_method)
        cart.add(100.0)
        cart.process_payment()

        cart.remove(50.0)
        cart.set_payment_method(paypal_method)
        cart.process_payment()

        cart.reset()
        cart.add(200.0)
        cart.set_payment_method(bitcoin_method)
        cart.process_payment()

Main.main()