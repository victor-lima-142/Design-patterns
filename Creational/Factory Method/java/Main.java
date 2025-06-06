/**
 * Interface representing a generic notification.
 */
interface Notification {
    /**
     * Sends the notification to the user.
     */
    void notifyUser();
}

/**
 * Sends notifications via Email.
 * 
 * @see Notification
 */
class EmailNotification implements Notification {
    /**
     * Sends an Email notification.
     */
    public void notifyUser() {
        System.out.println("Sending an Email Notification");
    }
}

/**
 * Sends notifications via SMS.
 *
 * @see Notification
 */
class SMSNotification implements Notification {
    /**
     * Sends an SMS notification.
     */
    public void notifyUser() {
        System.out.println("Sending an SMS Notification");
    }
}

/**
 * Factory class to create Notification instances.
 * This class uses the Factory Method pattern to encapsulate the instantiation logic.
 * It allows for the creation of different types of notifications without exposing the instantiation logic to the client code.
 */
class NotificationFactory {
    /**
     * Creates a Notification instance based on the given type.
     *
     * @param type The type of notification (e.g., "email", "sms").
     * @return A Notification instance.
     * @throws IllegalArgumentException if the type is unknown.
     */
    public static Notification createNotification(String type) {
        if (type.equalsIgnoreCase("email")) {
            return new EmailNotification();
        } else if (type.equalsIgnoreCase("sms")) {
            return new SMSNotification();
        }
        throw new IllegalArgumentException("Unknown type");
    }
}

/**
 * Client - demonstrate the Factory Method pattern.
 */
class Main {
    /**
     * Main method to demonstrate the Factory Method pattern.
     *
     * @param args Command line arguments (not used).
     */
    public static void main(String[] args) {
        // Create an Email notification
        Notification emailNotification = NotificationFactory.createNotification("email");
        emailNotification.notifyUser();

        // Create an SMS notification
        Notification smsNotification = NotificationFactory.createNotification("sms");
        smsNotification.notifyUser();
    }
}