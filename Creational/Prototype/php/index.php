<?php

abstract class AbstractModel {
    abstract public function getData(): string;
}
abstract class Prototype extends AbstractModel {
    abstract public function clone(): Prototype;
}

// Shallow copy
class User extends Prototype {
    public string $name;
    public int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function clone(): Prototype {
        return clone $this;
    }

    public function getData(): string {
        return "Name: {$this->name}, Age: {$this->age}";
    }
}

// Deep copy
class Address extends Prototype {
    public string $street;
    public string $city;

    public function __construct(string $street, string $city) {
        $this->street = $street;
        $this->city = $city;
    }

    public function clone(): Prototype {
        return clone $this;
    }

    public function getData(): string {
        return "Street: {$this->street}, City: {$this->city}";
    }
}

class DeepUser extends User {
    public array $addresses;

    public function __construct(string $name, int $age, array $addresses) {
        parent::__construct($name, $age);
        $this->addresses = $addresses;
    }

    public function clone(): Prototype {
        $clone = clone $this;
        $clone->addresses = array_map(function($address) {
            return $address->clone();
        }, $this->addresses);
        return $clone;
    }

    public function getData(): string {
        $str = parent::getData();
        $str .= ", Addresses: " . implode(', ', array_map(function($address) {
            return $address->getData();
        }, $this->addresses));
        return $str;
    }
}

$shallowUser = new User('John Doe', 30);
$shallowUserClone = $shallowUser->clone();
$shallowUserClone->name = 'Jane Doe';

$address1 = new Address('123 Main St', 'Anytown');
$deepUser = new DeepUser('John Doe', 30, [$address1]);
$deepUserClone = $deepUser->clone();
$deepUserClone->addresses[0]->street = '456 Elm St';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <section>
            <h1>Shallow copy</h1>
            <h2>Base user</h2>
            <ul>
                <li><?php echo $shallowUser->getData(); ?></li>
            </ul>

            <h2>Copy user</h2>
            <ul>
                <li><?php echo $shallowUserClone->getData(); ?></li>
            </ul>
        </section>

        <section>
            <h2>Deep user</h2>
            <ul>
                <li><?php echo $deepUser->getData(); ?></li>
            </ul>

            <h2>Copy user</h2>
            <ul>
                <li><?php echo $deepUserClone->getData(); ?></li>
            </ul>
        </section>
    </main>
</body>
</html>