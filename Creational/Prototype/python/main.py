from abc import ABC, abstractmethod
from typing import List


class AbstractModel(ABC):
    @abstractmethod
    def to_string(self):
        pass


class Prototype(AbstractModel):
    @abstractmethod
    def clone(self):
        pass


class User(Prototype):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def to_string(self):
        return f"{self.name} {self.age}"

    def clone(self):
        user = User(self.name, self.age)
        return user


class Address(Prototype):
    def __init__(self, street, city):
        self.street = street
        self.city = city

    def to_string(self):
        return f"{self.street} {self.city}"

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

        return f"{self.name} {self.age} {string_address}"

    def clone(self):
        deepUser = DeepUser(self.name, self.age, self.addresses)
        deepUser.addresses = [address.clone() for address in self.addresses]
        return deepUser


class Main:
    @staticmethod
    def main():
        user = User("John Doe", 30)
        userClone = user.clone()

        address1 = Address("123 Main St", "Anytown")
        address2 = Address("456 Elm St", "Anytown")
        deepUser = DeepUser("John Doe", 30, [address1, address2])
        deepUserClone = deepUser.clone()
        deepUserClone.addresses[0].street = "789 Oak St"

        print(user.to_string())
        print("\n----------------------------------------\n")
        print(userClone.to_string())
        print("\n----------------------------------------\n")
        print(address1.to_string())


if __name__ == "__main__":
    Main.main()
