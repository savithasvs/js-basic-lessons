class Pizza {
    // constructor
    constructor(toppings= [], customer) {
        this.toppings = toppings;
        this.customer = customer;
    }
    static extraToppings = ['pepperoni', 'cheese'];
    //static method
    static sayThankyou() {
        console.log('thankyou');
    }
    //instance property
    slices = 10;
    get noOfSlices() {
        return this.slices;
    }

    set noOfSlices(value) {
        // slices = value;
        this.slices = value;
    }
    eat() {
        console.log(this.toppings);
        console.log(this.customer);
    }
//instance method
    getCokeOrPepsi = () => {
        console.log("coke");
        console.log("Pepsi");
        console.log(this);

    }
    //private field can oly be modifiyed
    #bankBalance = 1000;

    get balance() {
     return this.#bankBlanace
 };
 set balance(value) {
     this.#bankBlanace =value
 };
 
}

const myLunch = new Pizza(['onion', 'mushroom','capcicum'], 'sumi');
// console.log(myLunch);
myLunch.eat();
myLunch.toppings = ['Carrot', 'Almonds' , 'Lobster'];
console.log(myLunch.toppings);

console.log(Pizza.extraToppings);//static member cannot need the object reference
Pizza.extraToppings =['onions', 'lettuce'];
console.log(Pizza.extraToppings);
//static method
Pizza.sayThankyou();


console.log(myLunch.noOfSlices);
myLunch.noOfSlices = 6;
console.log(myLunch.noOfSlices);
myLunch.getCokeOrPepsi();
myLunch.slices =12;
console.log( myLunch.noOfSlices);
myLunch.balance = 5000;
console.log(myLunch.balance);
myLunch.#Bankbalance = 5000;
console.log(myLunch.balance);