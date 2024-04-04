var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.getProductName = function () {
        return 'Keyboard';
    };
    return Keyboard;
}());
var Mousepad = /** @class */ (function () {
    function Mousepad() {
    }
    Mousepad.prototype.getProductName = function () {
        return 'Mousepad';
    };
    return Mousepad;
}());
var KeyboardFactory = /** @class */ (function () {
    function KeyboardFactory() {
    }
    KeyboardFactory.prototype.factoryMethod = function () {
        return new Keyboard();
    };
    return KeyboardFactory;
}());
var MousepadFactory = /** @class */ (function () {
    function MousepadFactory() {
    }
    MousepadFactory.prototype.factoryMethod = function () {
        return new Mousepad();
    };
    return MousepadFactory;
}());
// Testing
var keyboard = new KeyboardFactory().factoryMethod();
var mousepad = new MousepadFactory().factoryMethod();
console.log(keyboard.getProductName());
console.log(mousepad.getProductName());
