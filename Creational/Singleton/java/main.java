public class Singleton {
    private static Singleton instance;

    private Singleton() {
        // We can't enable "new Singleton" calls inside project
    }

    public static Singleton getInstance() {
        if (instance == null) {
             // Here we use something similar to recursion. At second call, instance isn't more null.
            instance = new Singleton();
        }
        return instance;
    }

    public static void main(String[] args) {
        Singleton singleton1 = Singleton.getInstance();
        Singleton singleton2 = Singleton.getInstance();

        System.out.println(singleton1 == singleton2); // Exit: true
    }
}