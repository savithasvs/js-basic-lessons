/* eslint-disable spaced-comment */
function getchild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
const o4 = { x: "don't change this value" }
//console.log(o4.x)
let p = getchild(o4)
//console.log(p)
/*o4 = null
p= getchild(o4)
console.log(p)*/
Object.prototype = 0
//console.log(Object)
//The prototype properties of built-in is read only.
const o5 = {}
//console.log(o5)
o5.x = 100
console.log(o5)
p = getchild(o5)
console.log(p)
p.y = 200
const q = getchild(p)
q.z = 300
console.log(q)
console.log('q.x + q.y + q.z' + (q.x + q.y + q.z))
console.log('p.x + p.y ' + (p.x + p.y))
console.log('o5.x' + (o5.x))

const book = {
  'main title': 'JavaScript',
  subtitle: 'The Definitive Guide',
  for: 'all audiences',
  author: {
    firstname: 'Donald',
    surnmae: 'Duck'
  }
}
let len
if (book) {
  if (book.subtitle) {
    len = book.subtitle.length
    console.log(len)
  } else { console.log('book.subtitle undefined:') }
} else { console.log('book is null') }
len = book && book.subtitle && book.subtitle.length
if (len) console.log(len)

console.log(book.author)
delete book.author
console.log(book.author)

console.log(book['main title'])
delete book['main title']
console.log(book['main title'])

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.toString)
