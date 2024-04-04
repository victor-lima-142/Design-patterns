<?php

class Singleton {
    private static $instance;

    public static function getInstance() {
        if (self::$instance === null) {
            // Here we use something similar to recursion. At second call, instance isn't more null.
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        // We can't enable "new Singleton" calls inside project
    }
}

$singleton1 = Singleton::getInstance();
$singleton2 = Singleton::getInstance();

echo ($singleton1 === $singleton2) ? "true" : "false"; // Exit: true

?>