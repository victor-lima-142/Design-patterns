/**
 * Abstract class that defines a template method for exporting data.
 */
abstract class DataExporter {

    /**
     * Template method that defines the export algorithm.
     */
    public final void export() {
        openFile();
        writeHeader();
        writeData();
        closeFile();
    }

    /**
     * Opens the output file.
     */
    protected abstract void openFile();

    /**
     * Writes the header to the output.
     */
    protected abstract void writeHeader();

    /**
     * Writes the data to the output.
     */
    protected abstract void writeData();

    /**
     * Closes the output file.
     */
    protected abstract void closeFile();
}

/**
 * Concrete exporter for CSV format.
 */
class CSVExporter extends DataExporter {

    protected void openFile() {
        System.out.println("Opening CSV file...");
    }

    protected void writeHeader() {
        System.out.println("Writing CSV header...");
    }

    protected void writeData() {
        System.out.println("Writing CSV data...");
    }

    protected void closeFile() {
        System.out.println("Closing CSV file.");
    }
}
