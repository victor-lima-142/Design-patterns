from typing import List
from abc import ABC, abstractmethod, ABCMeta

# This is the main class/interface (this case is interface) in composite pattern. The father class
class Product(ABC):
    __metaClass__ = ABCMeta

    @abstractmethod
    def get_price():
        pass

    @abstractmethod
    def get_name():
        pass
    
    @abstractmethod
    def add_product():
        pass
    
# This class is an individual product
class IndividualProduct(Product):
    name: str
    price: float

    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def get_price(self) -> float:
        return self.price
    
    def get_name(self) -> float:
        return self.name
    
    def add_product(self, product: Product):
        pass

# This class starts to use the composite fundamentals, it's a product too
class ComboProduct(Product):
    combo_name: str
    product_list: List[Product] = []

    def __init__(self, combo_name: str):
        self.combo_name = combo_name
    
    def get_price(self) -> float:
        total: float = 0.0
        for product in self.product_list:
            total += product.get_price()
        return total

    def get_name(self) -> str:
        return self.combo_name
    
    def add_product(self, product: Product):
        self.product_list.append(product)
        

# Testing
design_patterns = IndividualProduct("Design Patterns", 20.00);
clean_code = IndividualProduct("Clean Code", 22.00);
refactoring = IndividualProduct("Refactoring", 18.00);

it_books_combo = ComboProduct("Combo of IT books");
it_books_combo.add_product(design_patterns);
it_books_combo.add_product(clean_code);
it_books_combo.add_product(refactoring);

print(it_books_combo.get_price());