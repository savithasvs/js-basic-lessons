function createGame (gameName) {
  let score = 0
  return function win () {
    score++
    return `Your name ${gameName} score is ${score}`
  }
}
const someName = createGame('football')
const someNumber = createGame('cricket')
console.log(someName())
console.log(someName())
console.log(someName())
console.log(someNumber())
// closure///

