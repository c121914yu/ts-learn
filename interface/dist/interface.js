"use strict";
var People = /** @class */ (function () {
    function People() {
        this.name = "yj;";
        this.age = 20;
        this.salary = 300;
    }
    People.prototype.greet = function () {
        console.log("class hellp");
    };
    return People;
}());
var person = {
    name: "yjl",
    age: 28,
    salary: 7000,
    id: "200",
    greet: function () {
        console.log("hello ");
    },
};
// person.salary = 1000 //只读
console.log(person);
person.greet();
var student = {
    name: "yjl",
    age: 28,
    salary: 7000,
    id: 200,
    greet: function () {
        console.log("hello ");
    },
};
