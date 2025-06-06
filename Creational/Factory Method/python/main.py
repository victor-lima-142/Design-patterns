from abc import ABC, abstractmethod

class Notification(ABC):
    """Abstract base class for notifications."""

    @abstractmethod
    def notify_user(self):
        """Send the notification to the user."""
        pass


class EmailNotification(Notification):
    """Notification implementation for email."""

    def notify_user(self):
        """Send an email notification."""
        print("Sending an Email Notification")


class SMSNotification(Notification):
    """Notification implementation for SMS."""

    def notify_user(self):
        """Send an SMS notification."""
        print("Sending an SMS Notification")


class NotificationFactory:
    """Factory for creating Notification objects."""

    @staticmethod
    def create_notification(type: str) -> Notification:
        """
        Create a notification based on the given type.

        Args:
            type (str): The type of notification ("email" or "sms").

        Returns:
            Notification: An instance of a Notification subclass.

        Raises:
            ValueError: If the notification type is unknown.
        """
        if type == "email":
            return EmailNotification()
        elif type == "sms":
            return SMSNotification()
        else:
            raise ValueError("Unknown notification type")

class Main:
    """Client - demonstrate the Factory Method pattern."""

    @staticmethod
    def main():
        # Create an email notification
        email_notification = NotificationFactory.create_notification("email")
        email_notification.notify_user()

        # Create an SMS notification
        sms_notification = NotificationFactory.create_notification("sms")
        sms_notification.notify_user()


if __name__ == "__main__":
    Main.main()