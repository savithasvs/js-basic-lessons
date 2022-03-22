class Pizza {
  // constructor
  constructor (toppings = [], customer) {
    this.toppings = toppings
    this.customer = customer
  }

  eat () {
    console.log(this.toppings)
    console.log(this.customer)
  }
}
const myLunch = new Pizza(['onion', 'mushroom', 'capsicum'], 'venkat')
// console.log(myLunch)
myLunch.eat()
