/**
 * Database Class
 * This class implements the Singleton pattern for a database driver.
 * It ensures that only one instance of the database driver exists.
 *
 * @class
 *
 * @implements {DatabaseDriver}
 */
var Database = /** @class */ (function () {
    function Database() {
    }
    Object.defineProperty(Database, "instance", {
        get: function () {
            if (!Database._instance) {
                Database._instance = new Database();
            }
            if (!(Database._instance instanceof Database)) {
                throw new Error("Database instance is not of type Database");
            }
            Database._instance.connect();
            return Database._instance;
        },
        enumerable: false,
        configurable: true
    });
    Database.prototype.connect = function () {
        Database._isConnected = true;
        this._connect();
    };
    Database.prototype.disconnect = function () {
        Database._isConnected = false;
        this._disconnect();
    };
    Database.prototype._connect = function () {
        console.log("Database connected");
    };
    Database.prototype._disconnect = function () {
        console.log("Database disconnected");
    };
    Object.defineProperty(Database.prototype, "isConnected", {
        get: function () {
            return Database._isConnected;
        },
        enumerable: false,
        configurable: true
    });
    Database._instance = null;
    Database._isConnected = false;
    return Database;
}());
/**
 * Client - Demonstrates the Singleton usage.
 */
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var db = Database.instance;
        if (!db.isConnected) {
            throw new Error("Database is not connected");
        }
        db.disconnect();
    };
    return Main;
}());
Main.main();
