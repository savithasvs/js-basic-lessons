/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-var
// eslint-disable-next-line no-unused-vars
// const numbers = { x: 1, y: 2, z: 3 }
// for (const i in numbers) {
//  if (numbers.hasOwnproperty(i)) {
//   console.log(i + '-' + numbers[i])
// }
// }
// const o = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 }
// console.log(o)

// eslint-disable-next-line no-unused-vars
function createCopy (o, p) {
  for (var prop in p) {
    o[prop] = p[prop]
  }
  return o
}
// eslint-disable-next-line no-var
// var q = {}
// q = createCopy(q, o)
// console.log(q)

const r = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 }
const s = { a: 100, b: 200, c: 300, d: 400, e: 500, w: 600, x: 700, y: 800, z: 900 }
// eslint-disable-next-line no-undef
// const t = merge(r, s)
// console.log(t)
// ---------
/*
* For each property of p, delete the property with the same name from o.
* Return o.
*/
function removeCommonItem (o, p) {
  for (var prop in p) { // For all props in p
    if (o.hasownproperty(prop)) {
      delete o[prop] // Delete from o (deleting a nonexistent prop is harmless)
    }
  }
  return o
}
var t1 = removeCommonItem(s, r)
console.log(t1)
