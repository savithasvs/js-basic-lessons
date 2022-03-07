/* eslint-disable no-unused-vars */
const person = {
  first: 'venkat',
  last: 'Krishnan',
  age: 100
}
console.log(person.first)
console.log(person.last)
console.log(person.age)
person.first = 'Tom'
person.last = 'Jerry'
console.log(person.first)
console.log(person.last)
person.last = null
console.log(person.last)

// eslint-disable-next-line no-unused-vars
const empty = {}
// eslint-disable-next-line no-unused-vars
const point = { x: 10, y: 50 }
console.log(point.x)
console.log(point.y)
const point2 = { x: point.x, y: point.y + 1 }
const book = {
  'main title': 'Java script',
  'sub-title': 'Guide to Java Script for beginners',
  for: 'students',
  author: {
    first: 'venkat',
    last: 'krishnan'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
// eslint-disable-next-line no-undef
// console.log(book.sub - title)
console.log(book.for)
