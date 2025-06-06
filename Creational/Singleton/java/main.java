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
    void connect();

    /**
     * Disconnects from the database.
     */
    void disconnect();

    /**
     * Indicates whether the database connection is active.
     *
     * @return true if connected, false otherwise.
     */
    boolean isConnected();
}

/**
 * Database Class
 * This class implements the Singleton pattern for a database driver.
 * It ensures that only one instance of the database driver exists.
 *
 * @class
 * @implements DatabaseDriver
 */
class Database implements DatabaseDriver {
    private static DatabaseDriver instance = null;
    private static boolean isConnected = false;

    /**
     * Protected constructor to prevent external instantiation.
     */
    protected Database() {}

    /**
     * Singleton accessor.
     * Returns the single instance of the database driver.
     *
     * @return the singleton instance of DatabaseDriver
     */
    public static DatabaseDriver getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        if (!(instance instanceof Database)) {
            throw new IllegalStateException("Database instance is not of type Database");
        }
        instance.connect();
        return instance;
    }

    /**
     * Connects to the database.
     * Sets the isConnected flag and calls internal connect logic.
     */
    @Override
    public void connect() {
        isConnected = true;
        _connect();
    }

    /**
     * Disconnects from the database.
     * Clears the isConnected flag and calls internal disconnect logic.
     */
    @Override
    public void disconnect() {
        isConnected = false;
        _disconnect();
    }

    /**
     * Internal connect method for demonstration/logging.
     */
    private void _connect() {
        System.out.println("Database connected");
    }

    /**
     * Internal disconnect method for demonstration/logging.
     */
    private void _disconnect() {
        System.out.println("Database disconnected");
    }

    /**
     * Returns whether the database is currently connected.
     *
     * @return true if connected, false otherwise
     */
    @Override
    public boolean isConnected() {
        return isConnected;
    }
}

/**
 * Client - Demonstrates the Singleton usage.
 */
class Main {
    public static void main(String[] args) {
        DatabaseDriver db = Database.getInstance();
        if (!db.isConnected()) {
            throw new IllegalStateException("Database is not connected");
        }
        db.disconnect();
    }
}
