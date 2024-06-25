// Primitive (Call by Value)

// 7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt
// Javascript is Dynamically-typed languages


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // Undefined
let username = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 34784873598290393



// Non-Primitive (Call by Reference)
// Non-Primitive datatype are Object Functions

// 3 types : Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "dogo"] // Array 
// Variable name 
let myObj = 
// Object start
{
    
    name: "unique",
    age: 21,
}
// Object end

// Functions

const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof bigNumber); // Output :- Undefined 
console.log(typeof anotherId); // Output :- Symbol 
console.log(typeof outsideTemp); // Output :- Object
console.log(typeof scoreValue); // Output :- Number
console.log(typeof myFunction); // Output :- Object-function

// https://262.ecma-international.org/5.1/#sec-11.4.3