var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Defining Abstract Class
var PrepareDrink = /** @class */ (function () {
    function PrepareDrink() {
    }
    // Defining Template method
    PrepareDrink.prototype.prepareMyDrink = function () {
        this.step1();
        this.step2();
        this.step3();
        this.step4();
        this.step5();
    };
    return PrepareDrink;
}());
// Defining Concrete Classes
var PrepareCoffee = /** @class */ (function (_super) {
    __extends(PrepareCoffee, _super);
    function PrepareCoffee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrepareCoffee.prototype.step1 = function () {
        console.log("Boiling water");
    };
    PrepareCoffee.prototype.step2 = function () {
        console.log("Pour boiling water through coffee powder");
    };
    PrepareCoffee.prototype.step3 = function () {
        console.log("Pour the coffee into a cup");
    };
    PrepareCoffee.prototype.step4 = function () {
        console.log("Add sugar or milk to the cup");
    };
    PrepareCoffee.prototype.step5 = function () {
        console.log("Mix, and the coffee is ready");
    };
    return PrepareCoffee;
}(PrepareDrink));
var PrepareTea = /** @class */ (function (_super) {
    __extends(PrepareTea, _super);
    function PrepareTea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrepareTea.prototype.step1 = function () {
        console.log("Boiling water");
    };
    PrepareTea.prototype.step2 = function () {
        console.log("Place the tea bag");
    };
    PrepareTea.prototype.step3 = function () {
        console.log("Pour the tea into a cup");
    };
    PrepareTea.prototype.step4 = function () {
        console.log("Add lemon to tea");
    };
    PrepareTea.prototype.step5 = function () {
        console.log("Mix, and the tea is ready");
    };
    return PrepareTea;
}(PrepareDrink));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        // Creating an instance of the concrete class
        var prepareCoffee = new PrepareCoffee();
        // Calling the template method
        prepareCoffee.prepareMyDrink();
        console.log("\n----------------------------------------------\n");
        // Creating an instance of the concrete class
        var prepareTea = new PrepareTea();
        // Calling the template method
        prepareTea.prepareMyDrink();
    };
    return Main;
}());
Main.main();
