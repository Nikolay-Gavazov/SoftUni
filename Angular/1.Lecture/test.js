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
var isOpen = true;
var age = 21;
var firstName = 'Ivan';
var users = { id: 12 };
var numbers = [1, 2, 3];
var ivanUser = {
    name: 'Ivan',
    age: 30,
};
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    AnotherUserClass.prototype.getUserName = function () {
        return this.lastName;
    };
    return AnotherUserClass;
}());
var userList = [
    { lastName: 'Ivanov', id: 1 },
    { lastName: 'Petrov', id: 2 },
    { lastName: 'Dimitrov', id: 3 },
];
userList.forEach(function (_a) {
    var lastName = _a.lastName, id = _a.id;
    console.log("".concat(id, ": ").concat(lastName));
});
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.speack = function () {
        console.log('Hello there!');
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return Person;
}(Human));
var personMitko = new Person('Mitko', 20);
personMitko.speack();
