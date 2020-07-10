"use strict";
// object & type
var dataObj = {
    name: "yjl",
    age: 50,
};
// dataObj = {}
dataObj = {
    name: "ddc",
    age: 20,
};
// 复杂对象类型
var complex = {
    data: [1, 2, 3],
    myFun: function (item) {
        return this.data.concat(item);
    },
};
console.log(complex.myFun(5));
var complex2 = {
    data: [1, 2, 3],
    myFun: function (item) {
        return this.data.concat(item);
    },
};
console.log(complex.myFun(6));
