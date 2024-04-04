from abc import ABC, abstractmethod

# Defining Templates Classes
class Product(ABC):
    @abstractmethod
    def getProductName(self):
        pass

class Keyboard(Product):
    def getProductName(self):
        return "Keyboard"
    
class Mousepad(Product):
    def getProductName(self):
        return "Mousepad"

# Defining Creators (Factories)

class ProductFactory(ABC):
    @abstractmethod
    def factoryMethod(self):
        pass

class KeyboardFactory(ProductFactory):
    def factoryMethod(self):
        return Keyboard()
    
class MousepadFactory(ProductFactory):
    def factoryMethod(self):
        return Mousepad()
    
# Testing
keyboard = KeyboardFactory().factoryMethod();
mousepad = MousepadFactory().factoryMethod();

print(keyboard.getProductName())
print(mousepad.getProductName())
