abstract class Prototype {
    abstract public Prototype clone();

    abstract public String toString();
}

// Shallow copy
class User extends Prototype {
    protected String name;
    protected int age;

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public User clone() {
        return new User(this.name, this.age);
    }
}

// Deep copy
class DeepUser extends User {
    private Address address;

    public DeepUser(String name, int age, Address address) {
        super(name, age);
        this.address = address;
    }

    @Override
    public String toString() {
        return "DeepUser{" +
                "name='" + this.name + '\'' +
                ", age=" + this.age +
                ", address='" + address + '\'' +
                '}';
    }

    @Override
    public DeepUser clone() {
        Address addressClone = this.address.clone();
        return new DeepUser(this.name, this.age, addressClone);
    }

    public Address getAddress() {
        return address;
    }
}

class Address extends Prototype {
    private String street;
    private String city;

    public Address(String street, String city) {
        this.street = street;
        this.city = city;
    }

    @Override
    public String toString() {
        return "Address{" +
                "street='" + street + '\'' +
                ", city='" + city + '\'' +
                '}';
    }

    @Override
    public Address clone() {
        return new Address(this.street, this.city);
    }

    public String getCity() {
        return city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setCity(String city) {
        this.city = city;
    }
}

public class Main {
    private static void runShallowCopy() {
        System.out.println("Shallow copy\n");
        User user1 = new User("John Doe", 30);
        User user2 = user1.clone();
        System.out.println(user1);
        System.out.println(user2);
    }

    private static void runDeepCopy() {
        System.out.println("Deep copy\n");
        Address address = new Address("123 Main St", "Anytown");
        DeepUser user1 = new DeepUser("John Doe", 30, address);
        DeepUser user2 = user1.clone();
        user2.getAddress().setCity("New York");
        user2.getAddress().setStreet(null);
        System.out.println(user1.toString());
        System.out.println(user2.toString());
    }

    public static void main(String[] args) {
        Main.runShallowCopy();
        System.out.println("----------------------------------------------");
        Main.runDeepCopy();
    }
}
