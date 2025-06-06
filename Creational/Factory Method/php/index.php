<?php

/**
 * Interface for notification types.
 */
interface Notification {
    /**
     * Sends a notification to the user.
     *
     * @return void
     */
    public function notifyUser(): void;
}

/**
 * Class for sending email notifications.
 */
class EmailNotification implements Notification {
    /**
     * Sends an email notification.
     *
     * @return void
     */
    public function notifyUser(): void {
        echo "Sending an Email Notification\n";
    }
}

/**
 * Class for sending SMS notifications.
 */
class SMSNotification implements Notification {
    /**
     * Sends an SMS notification.
     *
     * @return void
     */
    public function notifyUser(): void {
        echo "Sending an SMS Notification\n";
    }
}

/**
 * Factory class to create Notification instances.
 */
class NotificationFactory {
    /**
     * Creates a notification based on the given type.
     *
     * @param string $type The type of notification (email or sms).
     * @return Notification
     * @throws Exception If the type is unknown.
     */
    public static function createNotification(string $type): Notification {
        switch (strtolower($type)) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            default:
                throw new Exception("Unknown notification type");
        }
    }
}

class Main {
    public static function main() {
        // Create an email notification
        $emailNotification = NotificationFactory::createNotification("email");
        $emailNotification->notifyUser();

        // Create an SMS notification
        $smsNotification = NotificationFactory::createNotification("sms");
        $smsNotification->notifyUser();
    }
}

Main:::main();

?>