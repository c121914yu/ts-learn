"use strict";
var MyMath;
(function (MyMath) {
    const PI = 3.14;
    function calcCircle(val) {
        return val * PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
