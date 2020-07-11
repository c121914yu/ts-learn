"use strict";
class Animal {
    constructor() {
        this._name = "余金隆";
    }
    //私有属性赋值
    set setName(val) {
        this._name = val;
    }
    // 私有属性取值
    get getName() {
        return this._name;
    }
}
// 直接通过类调用，不需要实例化
Animal.PI = 3.14;
let a = new Animal();
// 相当于一个属性而不是函数
console.log(a.getName);
a.setName = "yyy";
console.log(a.getName);
console.log(Animal.PI);
