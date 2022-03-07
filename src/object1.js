/* eslint-disable no-unused-vars */
/* eslint-disable no-array-constructor */
// eslint-disable-next-line no-new-object
const o = new Object()
const a = new Array()
const d = new Date()
// eslint-disable-next-line no-empty-pattern
const f1 = function () {
  console.log('The Cow Jumped over the MOON')
}
console.log('Date - ' + d)
// eslint-disable-next-line no-undef
f1()
const o1 = Object.create({ x: 100, y: 200 })
console.log('x= ' + o1.x + 'y=' + o1.y)
console.log(o1)

const o2 = Object.create(null)
const o3 = Object.create(Object.prototype)
console.log(o2)
console.log(o3)
