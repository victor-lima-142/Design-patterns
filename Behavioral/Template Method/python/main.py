from abc import ABC, abstractmethod

# Defining Abstract Class
class PrepareDrink(ABC):
    @abstractmethod
    def step1(self):
        pass

    @abstractmethod
    def step2(self):
        pass

    @abstractmethod
    def step3(self):
        pass

    @abstractmethod
    def step4(self):
        pass

    @abstractmethod
    def step5(self):
        pass

    # Defining Template method
    def prepareMyDrink(self):
        self.step1()
        self.step2()
        self.step3()
        self.step4()
        self.step5()


# Defining Concrete Classes
class PrepareCoffee(PrepareDrink):
    def step1(self):
        print("Boiling water")
    
    def step2(self):
        print("Pour boiling water through coffee powder")
    
    def step3(self):
        print("Pour the coffee into a cup")
    
    def step4(self):
        print("Add sugar or milk to the cup")
    
    def step5(self):
        print("Mix, and the coffee is ready")

class PrepareTea(PrepareDrink):
    def step1(self):
        print("Boiling water")
    
    def step2(self):
        print("Place the tea bag")
    
    def step3(self):
        print("Pour the tea into a cup")
    
    def step4(self):
        print("Add lemon to tea")
    
    def step5(self):
        print("Mix, and the tea is ready")


if __name__ == "__main__":
    print("----------------------------------------------")
    print("Preparing Coffee")
    print("----------------------------------------------")
    prepareCoffee = PrepareCoffee()
    prepareCoffee.prepareMyDrink()
    print("\n----------------------------------------------")
    print("Preparing Tea")
    print("----------------------------------------------")
    prepareTea = PrepareTea()
    prepareTea.prepareMyDrink()    
