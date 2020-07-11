"use strict";
// 类定义
class Persion {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    printAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
const persion = new Persion("yhh", "gender", 20);
console.log(persion);
console.log(persion.printAge());
persion.setAge(22);
console.log(persion.printAge());
// 继承
class Student extends Persion {
    constructor(name, gender, age, number) {
        super(name, gender, age);
        this.number = number;
    }
}
const yjl = new Student("yjl", "male", 20, "201806");
console.log(yjl);
