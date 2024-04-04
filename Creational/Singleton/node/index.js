var Singleton = /** @class */ (function () {
    function Singleton() {
        // We can't enable "new Singleton" calls inside project
    }
    Object.defineProperty(Singleton, "instance", {
        get: function () {
            if (!Singleton._instance) {
                // Here we use something similar to recursion. At second call, _instance isn't more null.
                Singleton._instance = new Singleton();
            }
            return Singleton._instance;
        },
        enumerable: false,
        configurable: true
    });
    Singleton._instance = null;
    return Singleton;
}());
var singleton1 = Singleton.instance;
var singleton2 = Singleton.instance;
console.log(singleton1 === singleton2); // Exit: true
