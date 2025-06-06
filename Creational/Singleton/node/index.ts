/**
 * Singleton Interface
 * This interface defines the contract for a database driver.
 * 
 * @interface
 */
interface DatabaseDriver {
    /**
     * Connects to the database.
     */
    connect(): void;
    
    /**
     * Disconnects from the database.
     */
    disconnect(): void;

    /**
     * Indicates whether the database connection is active.
     */
    isConnected: boolean;
}

/**
 * Database Class
 * This class implements the Singleton pattern for a database driver.
 * It ensures that only one instance of the database driver exists.
 * 
 * @class
 * 
 * @implements {DatabaseDriver}
 */
class Database implements DatabaseDriver {
    private static _instance: DatabaseDriver | null = null;
    private static _isConnected: boolean = false;

    protected constructor() {
    }

    static get instance(): DatabaseDriver {
        if (!Database._instance) {
            Database._instance = new Database();
        }
        if (!(Database._instance instanceof Database)) {
            throw new Error("Database instance is not of type Database");
        }
        Database._instance.connect();
        return Database._instance;
    }

    public connect(): void {
        Database._isConnected = true;
        this._connect();
    }

    public disconnect(): void {
        Database._isConnected = false;
        this._disconnect();
    }

    private _connect(): void {
        console.log("Database connected");
    }

    private _disconnect(): void {
        console.log("Database disconnected");
    }

    public get isConnected(): boolean {
        return Database._isConnected;
    }
}

/**
 * Client - Demonstrates the Singleton usage.
 */
class Main {
    static main(): void {
        const db: DatabaseDriver = Database.instance;
        if (!db.isConnected) {
            throw new Error("Database is not connected");
        }
        db.disconnect();
    }
}

Main.main();
