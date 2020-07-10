"use strict";
function returnTest() {
    return "hello";
}
console.log(returnTest());
function r2() {
    return 2;
}
function r3() {
    return [2, 3];
}
console.log(r3());
// 空
function r4() { }
function sum(a, b) {
    return a + b;
}
// 指定函数类型
var testFun;
testFun = sum;
console.log(testFun(5, 6));
