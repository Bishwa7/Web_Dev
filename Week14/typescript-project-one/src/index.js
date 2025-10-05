"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
// greet
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Bishwa");
// sum
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
// function taking another function and running it after 1sec
function delayed(fn) {
    setTimeout(fn, 1000);
}
delayed(function () {
    console.log("Hello");
});
// delayed2 function takes sum2 function and runs after 1 second
function delayed2(fn, a, b) {
    setTimeout(() => {
        const ans = fn(a, b);
        console.log(ans);
    }, 5000);
}
function sum2(a, b) {
    return a + b;
}
delayed2(sum2, 1, 2);
//# sourceMappingURL=index.js.map