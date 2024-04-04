class Singleton {
    private static _instance: Singleton | null = null;

    private constructor() {
        // We can't enable "new Singleton" calls inside project
    }

    static get instance(): Singleton {
        if (!Singleton._instance) {
            // Here we use something similar to recursion. At second call, _instance isn't more null.
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

const singleton1 = Singleton.instance;
const singleton2 = Singleton.instance;

console.log(singleton1 === singleton2); // Exit: true