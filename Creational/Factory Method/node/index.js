/**
 * Notification class for email messages.
 *
 * @implements {INotification}
 */
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    /**
     * Sends an email notification.
     */
    EmailNotification.prototype.notifyUser = function () {
        console.log("Sending an Email Notification");
    };
    return EmailNotification;
}());
/**
 * Notification class for SMS messages.
 *
 * @implements {INotification}
 */
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    /**
     * Sends an SMS notification.
     */
    SMSNotification.prototype.notifyUser = function () {
        console.log("Sending an SMS Notification");
    };
    return SMSNotification;
}());
/**
 * Factory for creating Notification objects.
 */
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    /**
     * Creates a Notification instance based on the given type.
     *
     * @param type - The type of notification ("email", "sms").
     * @returns A Notification instance.
     * @throws Error if the type is unknown.
     */
    NotificationFactory.createNotification = function (type) {
        switch (type) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            default:
                throw new Error("Unknown notification type");
        }
    };
    return NotificationFactory;
}());
/*
* Client - demonstrate the Factory Method pattern.
*/
var Main = /** @class */ (function () {
    function Main() {
    }
    /**
     * Main method to demonstrate the Factory Method pattern.
     */
    Main.main = function () {
        // Create an email notification
        var emailNotification = NotificationFactory.createNotification("email");
        emailNotification.notifyUser();
        // Create an SMS notification
        var smsNotification = NotificationFactory.createNotification("sms");
        smsNotification.notifyUser();
    };
    return Main;
}());
Main.main();
