var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircle(val) {
        return val * PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function sumVal(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumVal = sumVal;
})(MyMath || (MyMath = {}));
// 引入其他文件
/// <reference path="circle.ts"/>
/// <reference path="sumVal.ts"/>
console.log(MyMath.sumVal(5, 10));
console.log(MyMath.calcCircle(8));
