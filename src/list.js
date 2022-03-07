/* eslint-disable no-new-object */

const cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getGender = function () { return cody.gender }
console.log(cody.getGender())
console.log(cody)

const myObject = new Object()
myObject['0'] = 'f'
myObject['1'] = 'o'
myObject['2'] = 'o'
console.log(myObject)

// eslint-disable-next-line no-new-wrappers
// const myString = new String('too')
// console.log(myString)

// eslint-disable-next-line no-unused-vars
class person {
  constructor (living, age, gender) {
    this.living = living
    this.age = age
    this.gender = gender
    this.getGender = function () { return this.gender }
  }
}
// eslint-disable-next-line new-cap
const smith = new person(true, 33, 'male')
console.log(smith)

const myNumber = new Number(23)
const myString = new String('male')
const myBoolean = new Boolean(false)
const myObject = new Object();
const myArray = new Array('foo', 'bar')
const myfuction = new Function('x', 'y', 'return x*y')
const myDate = new Date()
const myRegExp = new RegExp('\bt[a-z]+\b')
const myError = new Error('Sorry!')
console.log(myNumber.constructor)
console.log(myString.constructor)
console.log(myObject.constructor);
console.log(myArray.constructor)
console.log(myfuction.constructor)
console.log(myDate.constructor)
console.log(myRegExp.constructor)
console.log(myError.constructor)
