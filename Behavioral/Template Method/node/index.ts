// Defining Abstract Class
abstract class PrepareDrink {
	// Defining Template method
	public prepareMyDrink(): void {
		this.step1();
		this.step2();
		this.step3();
		this.step4();
		this.step5();
	}

	protected abstract step1(): void;
	protected abstract step2(): void;
	protected abstract step3(): void;
	protected abstract step4(): void;
	protected abstract step5(): void;
}

// Defining Concrete Classes
class PrepareCoffee extends PrepareDrink {
	protected step1(): void {
		console.log("Boiling water");
	}

	protected step2(): void {
		console.log("Pour boiling water through coffee powder");
	}

	protected step3(): void {
		console.log("Pour the coffee into a cup");
	}

	protected step4(): void {
		console.log("Add sugar or milk to the cup");
	}

	protected step5(): void {
		console.log("Mix, and the coffee is ready");
	}
}

class PrepareTea extends PrepareDrink {
	protected step1(): void {
		console.log("Boiling water");
	}

	protected step2(): void {
		console.log("Place the tea bag");
	}

	protected step3(): void {
		console.log("Pour the tea into a cup");
	}

	protected step4(): void {
		console.log("Add lemon to tea");
	}

	protected step5(): void {
		console.log("Mix, and the tea is ready");
	}
}

class Main {
	static main() {
		// Creating an instance of the concrete class
		const prepareCoffee: PrepareDrink = new PrepareCoffee();
		// Calling the template method
		prepareCoffee.prepareMyDrink();

		console.log("\n----------------------------------------------\n");
		// Creating an instance of the concrete class
		const prepareTea: PrepareDrink = new PrepareTea();
		// Calling the template method
		prepareTea.prepareMyDrink();
	}
}

Main.main();