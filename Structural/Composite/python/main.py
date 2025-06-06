from typing import List
from abc import ABC, abstractmethod

class Product(ABC):
    """
    Represents the base component in the Composite Pattern.
    """
    @abstractmethod
    def get_price(self) -> float:
        """
        Get the price of the product.

        :return: float price of the product
        """
        pass

    @abstractmethod
    def get_name(self) -> str:
        """
        Get the name of the product.

        :return: str name of the product
        """
        pass


class IndividualProduct(Product):
    """
    Represents a single product item.
    Implements the Product interface.
    """
    def __init__(self, name: str, price: float):
        self.name = name
        self.price = price

    def get_price(self) -> float:
        return self.price

    def get_name(self) -> str:
        return self.name  # Corrigido o tipo de retorno


class ShoppingCart(Product):
    """
    Represents a collection of products or other carts.
    Implements the Product interface.
    """
    def __init__(self, cart: str):
        self.cart = cart
        self.product_list: List[Product] = []

    def get_price(self) -> float:
        return sum(product.get_price() for product in self.product_list)

    def get_name(self) -> str:
        return self.cart

    def add_product(self, product: Product):
        self.product_list.append(product)

    def list_product(self) -> None:
        for product in self.product_list:
            print(f"Product: {product.get_name()}, Price: {product.get_price()}")


class Main:
    """
    Client Class
    Demonstrates the Composite usage.
    """
    @staticmethod
    def main():
        book1 = IndividualProduct("Design Patterns", 20.00)
        book2 = IndividualProduct("Clean Code", 22.00)
        book3 = IndividualProduct("Refactoring", 18.00)

        tech_books = ShoppingCart("IT Books")
        tech_books.add_product(book1)
        tech_books.add_product(book2)
        tech_books.add_product(book3)

        promo_book = IndividualProduct("You Don't Know JS", 15.00)

        mega_cart = ShoppingCart("Mega Cart")
        mega_cart.add_product(tech_books)
        mega_cart.add_product(promo_book)

        tech_books.list_product()
        print(f"Total Price: {tech_books.get_price()}")

        mega_cart.list_product()
        print(f"Total Price of Mega Cart: {mega_cart.get_price()}")


if __name__ == "__main__":
    Main.main()
