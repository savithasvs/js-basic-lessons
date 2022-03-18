const maxvalue = Math.max(10, 12, 35, 60, 2, 55)
console.log(maxvalue)
// -----------
const floatvalue = parseFloat('2.032565')
console.log(floatvalue)

const intvalue = parseInt('235abcd')
console.log(intvalue)

const Intvalue = parseInt('abcd2356')
console.log(Intvalue)

const today = Date.now()
console.log(today)
// -------

function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Runnning calculate Bill!!')
  console.log('billAmount: ' + billAmount + 'taxRate: ' + taxRate + 'tipRate: ' + tipRate)
  const total = billAmount + billAmount * taxRate + billAmount * tipRate
  return total
}
calculateBill(100, 0.13)

const billtotal = calculateBill(20 + 10 + 50, 0.75)
console.log(billtotal)

// -------
// function yell (name === 'Silly Goose') {
//     return `HEY ${name.toupperCase()}`
// }
// let greetings = yell ('Venkat') //HEY VENKAT
// console.log(greetings)
// greetings = yell() //Hey silly goose
