/* eslint-disable semi */
const age = 100
const money = 1000.50
console.log(typeof age)
console.log(typeof money)
console.log('10' - '3');

console.log(Math.round(2.5));
console.log(Math.floor(2.4));
console.log(Math.ceil(2.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidsGets = Math.floor(sweets / kids);
console.log(eachKidsGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

const x = 2 ** 3;
console.log(x);
// x = Math.pow(2, 3);
// console.log(x);
console.log(0.1 + 0.2);
// let costOfproduct = 1000.95;
// eslint-disable-next-line no-unused-vars
const costOfproduct = 10095;

console.log(typeof Infinity);
console.log(typeof -Infinity);
// eslint-disable-next-line no-unused-vars
//const result = 10 / 'hello';
//console.log(typeof NaN);

// check the datatype of a value
 let x = 100;
 let result = Number.isInteger(x);
console.log(`Is  x a number: ${result}`);
const y = 'abcd';
result = Number.isInteger(y);
console.log(`Is y a string: ${result}`);
result = (typeof y === 'string');
const flag = true;
result = (typeof flag === 'boolean');
console.log(`Is flag a boolean: ${result}`);
const nos = [1, 2, 3, 4, 5];
result = (typeof nos === 'object');
console.log(`Is x an object: ${result}`);
