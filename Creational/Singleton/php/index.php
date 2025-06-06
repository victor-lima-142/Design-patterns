<?php

/**
 * Singleton Interface
 * This interface defines the contract for a database driver.
 */
interface DatabaseDriver {
    /**
     * Connects to the database.
     * @return void
     */
    public function connect(): void;

    /**
     * Disconnects from the database.
     * @return void
     */
    public function disconnect(): void;

    /**
     * Indicates whether the database connection is active.
     * @return bool
     */
    public function isConnected(): bool;
}

/**
 * Database Class
 * This class implements the Singleton pattern for a database driver.
 * It ensures that only one instance of the database driver exists.
 */
class Database implements DatabaseDriver {
    private static ?DatabaseDriver $instance = null;
    private static bool $isConnected = false;

    /**
     * Protected constructor to prevent external instantiation.
     */
    protected function __construct() {}

    /**
     * Singleton accessor.
     * Returns the single instance of the database driver.
     *
     * @return DatabaseDriver
     * @throws Exception
     */
    public static function getInstance(): DatabaseDriver {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        if (!(self::$instance instanceof Database)) {
            throw new Exception("Database instance is not of type Database");
        }
        self::$instance->connect();
        return self::$instance;
    }

    /**
     * {@inheritdoc}
     */
    public function connect(): void {
        self::$isConnected = true;
        $this->internalConnect();
    }

    /**
     * {@inheritdoc}
     */
    public function disconnect(): void {
        self::$isConnected = false;
        $this->internalDisconnect();
    }

    private function internalConnect(): void {
        echo "Database connected\n";
    }

    private function internalDisconnect(): void {
        echo "Database disconnected\n";
    }

    /**
     * {@inheritdoc}
     */
    public function isConnected(): bool {
        return self::$isConnected;
    }
}

/**
 * Client - Demonstrates the Singleton usage.
 */
class Main {
    public static function main(): void {
        $db = Database::getInstance();
        if (!$db->isConnected()) {
            throw new Exception("Database is not connected");
        }
        $db->disconnect();
    }
}

Main::main();
