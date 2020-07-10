"use strict";
// union type 检查类型 null undefined never
// union type
var unionType = 12;
unionType = "12";
// 检查类型
var checkType = 10;
console.log(typeof unionType);
// null 和 undefined
var myNull = null;
myNull = 5;
// never never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型可以赋值给never。即使any也不能赋值给never，通常表现为抛出异常或无法继续执行到终止点。
function error(message) {
    throw new Error(message);
}
error("gea");
