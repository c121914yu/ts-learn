"use strict";
var sumVal = {
    money: 20,
    count: function (value) {
        this.money += value;
    },
};
var handleCount = {
    name: "Henry",
    sumVal: sumVal,
    friend: ["24", "24r"],
};
console.log(handleCount);
handleCount.sumVal.count(500);
console.log(handleCount);
