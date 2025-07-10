from abc import ABC, abstractmethod

class DataExporter(ABC):
    """Abstract base class defining the template method for exporting data."""

    def export(self):
        """Template method that defines the algorithm skeleton."""
        self.open_file()
        self.write_header()
        self.write_data()
        self.close_file()

    @abstractmethod
    def open_file(self):
        """Opens the file."""
        pass

    @abstractmethod
    def write_header(self):
        """Writes the header to the file."""
        pass

    @abstractmethod
    def write_data(self):
        """Writes the data to the file."""
        pass

    @abstractmethod
    def close_file(self):
        """Closes the file."""
        pass

class CSVExporter(DataExporter):
    """Concrete implementation of DataExporter for CSV files."""

    def open_file(self):
        """Open CSV file."""
        print("Opening CSV file...")

    def write_header(self):
        """Write CSV header."""
        print("Writing CSV header...")

    def write_data(self):
        """Write CSV data."""
        print("Writing CSV data...")

    def close_file(self):
        """Close CSV file."""
        print("Closing CSV file.")
