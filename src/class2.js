function car () {
  let milsDriven = 0
  let speed = 0

  this.accelerate = (velocity, distance) => {
    speed += velocity
    milsDriven += distance
  }
  this.getMilesDriven = () => milsDriven
  this.getSpeed = () => speed
}
// eslint-disable-next-line new-cap
const testCarModule = new car()
console.log('Miles:' + testCarModule.getMilesDriven())
console.log('Speed:' + testCarModule.getSpeed())

testCarModule.speed = 100
testCarModule.milsDriven = 10
console.log('Miles:' + testCarModule.getMilesDriven())
console.log('Speed:' + testCarModule.getSpeed())

testCarModule.accelerate(4, 10)
console.log('Miles:' + testCarModule.getMilesDriven())
console.log('Speed:' + testCarModule.getSpeed())
