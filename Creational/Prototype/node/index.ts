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


const address1 = new Address('123 Main St', 'Anytown');
const address2 = new Address('456 Maple Ave', 'Othertown');
const addresses = [address1].concat(address2)

const johnDeep = new DeepUser('John', 30, addresses)
console.log(johnDeep.toJSON())

const joeDeep = johnDeep.clone();
joeDeep.name = 'Joe';
joeDeep.addresses[0].street = '789 Elm St'
console.log(joeDeep.toJSON())


const johnShallow = new User('John', 30)
console.log(johnShallow.toJSON())

const joeShallow = johnShallow.clone();
joeShallow.name = 'Joe';
joeShallow.age = 40;
console.log(joeShallow.toJSON())