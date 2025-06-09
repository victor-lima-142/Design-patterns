// Defining Abstract Class
abstract class PrepareDrink {
    // Defining Template method
    public void prepareMyDrink() {
        step1();
        step2();
        step3();
        step4();
        step5();
    }

    protected abstract void step1();
    protected abstract void step2();
    protected abstract void step3();
    protected abstract void step4();
    protected abstract void step5();
}

// Defining Concrete Classes
class PrepareCoffee extends PrepareDrink {
    protected void step1() {
        System.out.println("Boiling water");
    }

    protected void step2() {
        System.out.println("Pour boiling water through coffee powder");
    }

    protected void step3() {
        System.out.println("Pour the coffee into a cup");
    }

    protected void step4() {
        System.out.println("Add sugar or milk to the cup");
    }

    protected void step5() {
        System.out.println("Mix, and the coffee is ready");
    }
}

class PrepareTea extends PrepareDrink {
    protected void step1() {
        System.out.println("Boiling water");
    }

    protected void step2() {
        System.out.println("Place the tea bag");
    }

    protected void step3() {
        System.out.println("Pour the tea into a cup");
    }

    protected void step4() {
        System.out.println("Add lemon to tea");
    }

    protected void step5() {
        System.out.println("Mix, and the tea is ready");
    }
}


// Testing
public class Main {
    public static void main(String[] args) {
        // Creating an instance of the concrete class
        PrepareDrink prepareCoffee = new PrepareCoffee();
        // Calling the template method
        prepareCoffee.prepareMyDrink();

        System.out.println("\n----------------------------------------------\n");
        
        // Creating an instance of the concrete class
        PrepareDrink prepareTea = new PrepareTea();
        // Calling the template method
        prepareTea.prepareMyDrink();
    } 
}