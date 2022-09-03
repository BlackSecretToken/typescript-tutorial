"use strict";
exports.__esModule = true;
exports.person = void 0;
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
exports.person = new Person('171-28-0926', 'John', 'Doe');
console.log(exports.person.getFullName());
