/**
 * Abstract class defining a template method for exporting data.
 */
abstract class DataExporter {
  /**
   * The template method defining the skeleton of the export process.
   */
  public export(): void {
    this.openFile();
    this.writeHeader();
    this.writeData();
    this.closeFile();
  }

  /** Opens the file. */
  protected abstract openFile(): void;

  /** Writes the file header. */
  protected abstract writeHeader(): void;

  /** Writes the file data. */
  protected abstract writeData(): void;

  /** Closes the file. */
  protected abstract closeFile(): void;
}

/**
 * CSV file exporter using the template method.
 */
class CSVExporter extends DataExporter {
  protected openFile(): void {
    console.log("Opening CSV file...");
  }

  protected writeHeader(): void {
    console.log("Writing CSV header...");
  }

  protected writeData(): void {
    console.log("Writing CSV data...");
  }

  protected closeFile(): void {
    console.log("Closing CSV file.");
  }
}
