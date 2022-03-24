// 1. Define a variable
// - ES5
// var MAX_SIZE = 25 * 1024 * 1024;
// var title = 'Hello World';
// title = 'Hello ES6';

// - ES6
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6'

// 2. String Interpolation
// - ES5
// var user = { name: 'David' };
// var card = { amount: 7, product: "Bar", unitprice: 42 };
// var message = "Hello " + user.name + ",\n" +
//     "want to buy " + card.amount + " " + card.product + " for\n" +
//     "a total of " + (card.amount * card.unitprice) + " bucks?";

// - ES6
let user = { name: 'David' };
let card = { amount: 7, product: "Bar", unitprice: 42 };
const message = "Hello " + user.name + ",\n" +
    "want to buy " + card.amount + " " + card.product + " for\n" +
    "a total of " + (card.amount * card.unitprice) + " bucks?";

// 3. Rest Parameter
// - ES5
// function foo(x, y) {
//     var a = Array.prototype.slice.call(arguments, 2);
//     return (x + y) * a.length;
// };
// foo(1, 2, 'hello', true, 7) === 9;

// ES6
function foo(x, y) {
    const a = Array.prototype.slice.call(...arguments, 2);
    return (x + y) * a.length;
};
foo(1, 2, 'hello', true, 7) === 9;

// 4. Default Parameter Values
// - ES5
// function sum(x, y, z) {
//     if (y === undefined) {
//         y = 7;
//     }
//     if (z === undefined) {
//         z = 42;
//     }
//     return x + y + z;
// };

// - ES6
function sum(x, y = 7, z = 42) {
    return x + y + z;
};

console.log("Sum= ", sum(1));

// 5. Arrow Functions
// - ES5
// var evens = [1, 2, 3, 4, 5, 6];
// var odds = evens.map(function(v) { return v + 1; });
// var pairs = evens.map(function(v) { return { even: v, odd: v + 1 }; });
// var nums = evens.map(function(v, i) { return v + i; });
// var fives = [];
// nums.forEach(function(v) {
//     if (v % 5 === 0) {
//         fives.push(v);
//     }
// });

// - ES6
const evens = [1, 2, 3, 4, 5, 6];
const odds = evens.map(v => v + 1);
const pairs = evens.map(v => ({ even: v, odd: v + 1 }));
const nums = evens.map((v, i) => v + i);
const fives = [];
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

console.log("odds: ", odds);
console.log("pairs: ", pairs);
console.log("nums: ", nums);
console.log("fives: ", fives);

// 6. Classes
// - ES5
// var Shape = function(id, x, y) {
//     this.id = id;
//     this.move(x, y);
// };
// Shape.prototype.move = function(x, y) {
//     this.x = x;
//     this.y = y;
// };

// - ES6
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    };
}

// 7. Modules
// - ES5
//  lib/utils.js
// Utils = {};
// Utils.sum = function(x, y) { return x + y };
// Utils.pi = 3.141593;​
//  someApp.js
// var math = Utils;
// console.log("2π = " + math.sum(math.pi, math.pi));​
//  otherApp.js
// var sum = Utils.sum,
//     pi = Utils.pi;
// console.log('2π = ' + sum(pi, pi));

// 8. Promise
// - ES5
// function showMessAfterTimeout(msg, who, timeout, onDone) {
//     setTimeout(function() {
//         onDone(msg + ' Hi ' + who + '!');
//     }, timeout);
// }
// showMessAfterTimeout('', 'Foo', 100, function(msg) {
//     showMessAfterTimeout(msg, 'Bar', 200, function(msg) {
//         console.log('Finish after 300ms:' + msg);
//     });
// });

// - ES6
function showMessAfterTimeout(msg, who, timeout, onDone) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(`${msg} Hi  ${who} !`);
        }, timeout);
    });
}

showMessAfterTimeout('', 'Foo', 100).then((msg) => {
    showMessAfterTimeout(msg, 'Bar', 200)
        .then((msg) => console.log('Finish after 300ms:' + msg))
});

// 9. Loops
// + for…of
const myArr = ['Sam Sung', 'Iphone', 'Xiaomi', 'Bphone'];
let animal = "";
for (text of myArr) {
    animal += text + " ";
}

console.log("Example for...of: ", animal);

// + findIndex()
const myArray = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(myArray.findIndex(k => k === 2));