from abc import ABC, abstract method;
from typing import List

class AbstractModel(ABC):
    @abstract method
    def to_string(self):
        pass

class Prototype(AbstractModel):
    @abstract method
    def clone(self):
        pass

class User(Prototype):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def to_string(self):
        return f'{self.name} {self.age}'

    def clone(self):
        user = User(self.name, self.age)
        return user

class Address(Prototype):
    def __init__(self, street, city):
        self.street = street
        self.city = city

    def to_string(self):
        return f'{self.street} {self.city}'

    def clone(self):
        address = Address(self.street, self.city)
        return address

class DeepUser(User):
    def __init__(self, name: str, age: int, addresses: List[Address]):
        super().__init__(name, age)
        self.addresses = addresses

    def to_string(self):
        string_address = ""
        for address in self.addresses:
            string_address += address.to_string() + ",\n"

        return f'{self.name} {self.age} {string_address}'

    def clone(self):
        deepUser = DeepUser(self.name, self.age, self.address)
        deepUser.addresses = [address.clone() for address in self.addresses]
        return deepUser

def main():
    user = User("John Doe", 30)
    userClone = user.clone()

    address1 = Address("123 Main St", "Anytown")
    address2 = Address("456 Elm St", "Anytown")
    deepUser = DeepUser("John Doe", 30, [address1, address2])
    deepUserClone = deepUser.clone()
    deepUserClone.addresses[0].street = "789 Oak St"

    print(user.to_string())
    print(address1.to_string())