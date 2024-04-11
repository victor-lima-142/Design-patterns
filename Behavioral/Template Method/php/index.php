<?php

// Defining Abstract Class
abstract class PrepareDrink {
    // Defining Template method
    public function prepareMyDrink() {
        $this->step1();
        $this->step2();
        $this->step3();
        $this->step4();
        $this->step5();
    }

    abstract protected function step1();
    abstract protected function step2();
    abstract protected function step3();
    abstract protected function step4();
    abstract protected function step5();
}

// Defining Concrete Classes
class PrepareCoffee extends PrepareDrink {
    protected function step1() {
        echo "Boiling water\n";
    }

    protected function step2() {
        echo "Pour boiling water through coffee powder\n";
    }

    protected function step3() {
        echo "Pour the coffee into a cup\n";
    }

    protected function step4() {
        echo "Add sugar or milk to the cup\n";
    }

    protected function step5() {
        echo "Mix, and the coffee is ready\n";
    }
}

class PrepareTea extends PrepareDrink {
    protected function step1() {
        echo "Boiling water\n";
    }

    protected function step2() {
        echo "Place the tea bag\n";
    }

    protected function step3() {
        echo "Pour the tea into a cup\n";
    }

    protected function step4() {
        echo "Add lemon to tea\n";
    }

    protected function step5() {
        echo "Mix, and the tea is ready\n";
    }
}


// Testing
echo "----------------------------------------------\n";
echo "Preparing Coffee\n";
echo "----------------------------------------------\n";

// Creating an instance of the concrete class
$prepareCoffee = new PrepareCoffee();
// Calling the template method
$prepareCoffee->prepareMyDrink();

echo "\n----------------------------------------------\n";
echo "Preparing Tea\n";
echo "----------------------------------------------\n";

// Creating an instance of the concrete class
$prepareTea = new PrepareTea();
// Calling the template method
$prepareTea->prepareMyDrink();
?>