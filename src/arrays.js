const names = ['John', 'sam', 'potor'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);
//names is an array of Strings
// length is a property of arrray
// it returns a number
// the lower bound of an array is 0
// the upper bound of the array is length - 1;
// the index for john is 0
// sam 1
// peter 2

//---methods of Array---
names.push('suresh');
console.log('After push: ' + names);

//push will add the items at the end

//...is called as the spread opertor
//it represents the entire items in the array
const names2 = [...names, 'Raj'];
console.log('names2:' + names2);

names.unshift('poppy')
console.log('unshift:' + names);
//it add data to the beginning
//so the index no of the res of the values will changes now

const names3 = ['raj', ...names]
console.log(names3)
// this will add data at the beginning

//----Method Slice--
//create a new array
const bikes = ['bianchi','miele','panasonie','miyata', 'RE'];
const b1 = [...bikes.slice(0,2)];
console.log(b1);
//slice takes 2 parameters
//from ,to
//it has copied 2 values from index 0 and assigned to b1

const b2 = [...bikes.slice(3)];
console.log(b2);//from index 3

const newBikes = [
    ...bikes.slice(0,2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes: ' + newBikes);
//Index 0 and 1 values from bikes is copied using the slice(0,2) methods.
//The first 2 values are copied,in the 2nd index value 'benotto' is pushed,
//the thied index again value from bikes is copied using slice(2)-the values from the 2 index of bikes are copied.
const newBikes2 = [
    ...newBikes.slice(0,2),
    ...newBikes.slice(4)
];
console.log('newBikes2: ' + newBikes2);
//new array called newBikes2 is created.
 //then from index 0 two values are copied
 //then the value from index 4 to last index is copied
 const indexofsam = names.findIndex(names => names ==='sam');
 console.log('IndexOfSAM: ' + indexofsam);

 //function to delete a name from the array

 /*function deleteName(name) {
     const indexofJohn = names.findIndex(names => names === name);
     console.log('IndexofJohn:' + indexofJohn)
     const newone = [
         ...names.slice(0,indexofJohn),
         ...names.slice(indexofJohn+1)
     ];
     console.log('indexofJohn:'+ newone);
 }
 deleteName('potor');*/

 function deleteName(nametodelete, names) {
     const indexOfname = names.findIndex(n => n === nametodelete);
     console.log('indexOf name to delete'+indexOfname);
    const newArray =[
     ...names.slice(0, indexOfname),
     ...names.slice(indexOfname+1)
     ];
     return newArray;
    }
    const deletesNames=deleteName('john', names);
    console.log(deletesNames);
    console.log(names);
    

const numbers = [1,2,3,4,5,6,7,8,9];
//console.log(numbers);
//numbers.splice(3,2);
//(method) Array<number>.splice(start:number,deleteCount?: number)
//Mutation Method - modifies/deletes the 
//console.log(numbers);   //splice deletes the value.
//splice(staring index from where the value to be  deleted, number of values to be deleted)
// //(method) Array<number>.slice(start?:number , end? number)
// //imuutable method -does not chanes the source array.
const pizzaSlice = numbers.slice(2,4);//start and end index
console.log('pizzaSlices: '+ pizzaSlice);
console.log('Original Numbers: ' + numbers);
//  numbers.reverse();// mutable one/
//splice deletes the value, slice shows number from the index value.. 
//anytime you want to use a mutation method and not mutate the original array
//we need to take a copy of the array
numbers.reverse();
console.log(numbers);
//const numbers = [1,2,3,4,5,6,7,8,9];
//anytime you want to use a mutation method and Not mutable the original array
//we need to tak a copy of the array
const numberReversed = [...numbers].reverse();
console.log(numberReversed);