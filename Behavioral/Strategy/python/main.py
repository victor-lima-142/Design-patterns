from abc import ABC, abstractmethod

# Strategy
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: float) -> None:
        pass


# Context
class PaymentProcessor:
    def __init__(self, strategy: PaymentStrategy):
        self._strategy = strategy

    def set_strategy(self, strategy: PaymentStrategy) -> None:
        self._strategy = strategy

    def process_payment(self, amount: float) -> None:
        self._strategy.pay(amount)


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


# Auxiliar classes
class User:
    def __init__(self, name: str, email: str, payment_method: PaymentStrategy = None):
        if payment_method is None:
            payment_method = CreditCardPaymentStrategy()
        self._payment_method = payment_method
        self._name = name
        self._email = email

    def set_payment_method(self, strategy: PaymentStrategy) -> None:
        self._payment_method = strategy
    
    def set_name(self, name: str) -> None:
        self._name = name
    
    def set_email(self, email: str) -> None:
        self._email = email

    def get_name(self) -> str:
        return self._name
    
    def get_email(self) -> str:
        return self._email
    
    def get_payment_processor(self) -> PaymentProcessor:
        return PaymentProcessor(self._payment_method)

class Order:
    def __init__(self, user: User, amount: float):
        self._amount = amount
        self._user = user

    def process_payment(self) -> None:
        self._user.get_payment_processor().process_payment(self._amount)


# Example usage
card_method = CreditCardPaymentStrategy()
paypal_method = PayPalPaymentStrategy()
bitcoin_method = BitcoinPaymentStrategy()

user = User("John Doe", "RZ2H2@example.com", card_method)
order = Order(user, 100.0)
order.process_payment()

user.set_payment_method(paypal_method)
order = Order(user, 200.0)
order.process_payment()

user.set_payment_method(bitcoin_method)
order = Order(user, 300.0)
order.process_payment()