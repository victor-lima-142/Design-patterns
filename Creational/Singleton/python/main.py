from abc import ABC, abstractmethod

class DatabaseDriver(ABC):
    """
    Singleton Interface
    This interface defines the contract for a database driver.
    """

    @abstractmethod
    def connect(self) -> None:
        """Connects to the database."""
        pass

    @abstractmethod
    def disconnect(self) -> None:
        """Disconnects from the database."""
        pass

    @property
    @abstractmethod
    def is_connected(self) -> bool:
        """Indicates whether the database connection is active."""
        pass


class Database(DatabaseDriver):
    """
    Database Class
    This class implements the Singleton pattern for a database driver.
    It ensures that only one instance of the database driver exists.
    """

    _instance = None
    _is_connected = False

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Database, cls).__new__(cls)
        return cls._instance

    def connect(self) -> None:
        """Connects to the database."""
        Database._is_connected = True
        self._connect()

    def disconnect(self) -> None:
        """Disconnects from the database."""
        Database._is_connected = False
        self._disconnect()

    def _connect(self):
        print("Database connected")

    def _disconnect(self):
        print("Database disconnected")

    @property
    def is_connected(self) -> bool:
        """Returns True if connected, False otherwise."""
        return Database._is_connected


class Main:
    """
    Client - Demonstrates the Singleton usage.
    """

    @staticmethod
    def main():
        """Demonstrates the usage of the Database Singleton.

        Raises:
            RuntimeError: If the database is not connected.
        """
        db: DatabaseDriver = Database()
        db.connect()
        if not db.is_connected:
            raise RuntimeError("Database is not connected")
        db.disconnect()


if __name__ == "__main__":
    Main.main()
