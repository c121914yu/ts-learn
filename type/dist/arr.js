"use strict";
var names = ["henryt", "body"];
var numbers = [1, 2, 3];
console.log(names[0]);
names[0] = "100";
console.log(names[0]);
console.log(numbers);
// 元组
var colors = ["red", 99];
// 枚举
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 100] = "Yellow";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Yellow;
var myColor2 = Color.Red;
console.log(myColor); //100
console.log(myColor2); //101
