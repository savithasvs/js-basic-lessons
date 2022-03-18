/* eslint-disable no-unused-vars */
// const doc = doctorize('venkat')
// console.log(doc)
// function doctorize (firstName) {
//   return `Dr.${firstName}`
// }

/// ---anon Function---
// function (firstName) {
//     return `Dr. ${firstName}`
// }

// Function Expression

const doctorize = function (firstName) {
  return ` Dr.${firstName}`
}
const doc = doctorize('venkat')
console.log(doc)
// ----------Arrow Functions---
const inchToCM = inches => {
  console.log(inches)
  return inches * 2.54
}

const resultcm = inchToCM(10)
console.log(resultcm)

const funcA = () => {
  console.log('hi')
}
funcA()

const add = (a, b = 3) => a + b
const inTocm = (inches) => inches * 2.54

console.log(add(100))
console.log(inTocm(25))

const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 })
const person = makeAPerson('savitha', 'venkatesan')
console.log(person)
// ---IIFE Immediately Invoked Function Expression
// (fuction (age) {
///  console.log (`you are cool and your age is ${age}');
// }

const employee = {
  name: 'savitha venkat',
  // methods
  sayHi: function () {
    console.log(`Hi!!! ${this.name}`)
    return `Hi ${this.name}`
  },
  print: () => {
    console.log('Hello employee')
  },
  // short hand method
  yellHi () {
    console.log(`HI ${this.name.toUpperCase()}`)
  }
}
employee.sayHi()
employee.print()
employee.yellHi()
