class Singleton:
    _instance = None

    # The __new__ method is called before the __init__ method.
    # While __init__ initializes the object after its creation, __new__ creates the object itself.
    # The __new__ method is static and therefore we must use cls instead of self as a parameter
    def __new__(cls):
        if not cls._instance:
            # Here we use something similar to recursion. At second call, cls._instance isn't more None.
            cls._instance = super().__new__(cls)
        return cls._instance

singleton1 = Singleton()
singleton2 = Singleton()

print(singleton1 in singleton2) # Exit: true