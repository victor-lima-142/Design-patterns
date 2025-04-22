export interface Prototype {
    clone: (...args: any | any[]) => Prototype
}

// Shallow copy
export class User implements Prototype {
    constructor(public name: string, public age: number) { }

    clone() {
        return Object.assign(Object.create(this), this)
    }

    toJSON() {
        return {
            name: this.name,
            age: this.age
        }
    }
}

// Deep copy
export class Address implements Prototype {
    constructor(public street: string, public city: string) { }

    clone() {
        return Object.assign(Object.create(this), this)
    }

    toJSON() {
        return {
            street: this.street,
            city: this.city
        }
    }
}

export class DeepUser extends User implements Prototype {
    constructor(name: string, age: number, public addresses: Address[]) {
        super(name, age);
    }

    clone() {
        const userClone = Object.assign(Object.create(this));
        userClone.addresses = this.addresses.map(address => address.clone());
        return userClone;
    }

    toJSON() {
        return {
            name: this.name,
            age: this.age,
            addresses: this.addresses.map(address => address.toJSON())
        }
    }
}




// Bootstrap
const bootstrap = {
    runDeepCopy() {
        const address1 = new Address('123 Main St', 'Anytown');
        const address2 = new Address('456 Maple Ave', 'Othertown');
        const addresses = [address1].concat(address2)

        const john = new DeepUser('John', 30, addresses)
        console.log(john.toJSON())

        const joe = john.clone();
        joe.name = 'Joe';
        joe.addresses[0].street = '789 Elm St'
        console.log(joe.toJSON())
    },


    runShallowCopy() {
        const john = new User('John', 30)
        console.log(john.toJSON())

        const joe = john.clone();
        joe.name = 'Joe';
        joe.age = 40;
        console.log(joe.toJSON())
    },

    start() {
        console.log("Shallow Copy\n");
        this.runShallowCopy();
        console.log("\n\n-------------------------------------------------------------\n\n");
        console.log("Deep Copy\n");
        this.runDeepCopy();
    }
}

bootstrap.start();