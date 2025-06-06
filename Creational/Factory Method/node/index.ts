/**
 * Interface for notification classes.
 * 
 * @interface
 */
interface INotification {
    /**
     * Sends the notification.
     */
    notifyUser(): void;
}

/**
 * Notification class for email messages.
 * 
 * @implements {INotification}
 */
class EmailNotification implements INotification {
    /**
     * Sends an email notification.
     */
    notifyUser() {
        console.log("Sending an Email Notification");
    }
}

/**
 * Notification class for SMS messages.
 * 
 * @implements {INotification}
 */
class SMSNotification implements INotification {
    /**
     * Sends an SMS notification.
     */
    notifyUser() {
        console.log("Sending an SMS Notification");
    }
}

/**
 * Factory for creating Notification objects.
 */
class NotificationFactory {
    /**
     * Creates a Notification instance based on the given type.
     *
     * @param type - The type of notification ("email", "sms").
     * @returns A Notification instance.
     * @throws Error if the type is unknown.
     */
    static createNotification(type: string): INotification {
        switch (type) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            default:
                throw new Error("Unknown notification type");
        }
    }
}

/*
* Client - demonstrate the Factory Method pattern.
*/
class Main {
    /**
     * Main method to demonstrate the Factory Method pattern.
     */
    static main() {
        // Create an email notification
        const emailNotification = NotificationFactory.createNotification("email");
        emailNotification.notifyUser();

        // Create an SMS notification
        const smsNotification = NotificationFactory.createNotification("sms");
        smsNotification.notifyUser();
    }
}

Main.main();
