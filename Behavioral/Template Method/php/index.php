<?php

/**
 * Abstract class that defines the template for exporting data.
 */
abstract class DataExporter {
    /**
     * Template method defining the skeleton of the algorithm.
     *
     * @return void
     */
    public function export(): void {
        $this->openFile();
        $this->writeHeader();
        $this->writeData();
        $this->closeFile();
    }

    /**
     * Opens the file.
     *
     * @return void
     */
    abstract protected function openFile(): void;

    /**
     * Writes the header.
     *
     * @return void
     */
    abstract protected function writeHeader(): void;

    /**
     * Writes the data.
     *
     * @return void
     */
    abstract protected function writeData(): void;

    /**
     * Closes the file.
     *
     * @return void
     */
    abstract protected function closeFile(): void;
}

/**
 * Concrete implementation for CSV export.
 */
class CSVExporter extends DataExporter {
    protected function openFile(): void {
        echo "Opening CSV file...\n";
    }

    protected function writeHeader(): void {
        echo "Writing CSV header...\n";
    }

    protected function writeData(): void {
        echo "Writing CSV data...\n";
    }

    protected function closeFile(): void {
        echo "Closing CSV file.\n";
    }
}

?>