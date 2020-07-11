"use strict";
var MyMath;
(function (MyMath) {
    function sumVal(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumVal = sumVal;
})(MyMath || (MyMath = {}));
