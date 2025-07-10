var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Abstract class defining a template method for exporting data.
 */
var DataExporter = /** @class */ (function () {
    function DataExporter() {
    }
    /**
     * The template method defining the skeleton of the export process.
     */
    DataExporter.prototype.export = function () {
        this.openFile();
        this.writeHeader();
        this.writeData();
        this.closeFile();
    };
    return DataExporter;
}());
/**
 * CSV file exporter using the template method.
 */
var CSVExporter = /** @class */ (function (_super) {
    __extends(CSVExporter, _super);
    function CSVExporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CSVExporter.prototype.openFile = function () {
        console.log("Opening CSV file...");
    };
    CSVExporter.prototype.writeHeader = function () {
        console.log("Writing CSV header...");
    };
    CSVExporter.prototype.writeData = function () {
        console.log("Writing CSV data...");
    };
    CSVExporter.prototype.closeFile = function () {
        console.log("Closing CSV file.");
    };
    return CSVExporter;
}(DataExporter));
