"use strict";
// ts中的泛型（generic）
function identify(arg) {
    return arg;
}
console.log(identify(false));
var test = identify;
console.log(test("head"));
console.log(test(1));
// function getLen<T extends number>(obj: T): any {
// 	return obj
// }
function getLen(obj) {
    return obj;
}
var obj = {
    number: 20,
    len: 30,
};
console.log(getLen(obj));
