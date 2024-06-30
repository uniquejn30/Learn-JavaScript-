const user = {
    username: "unique",
    price : 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // this refer to empty object & Browse m isse windows bol tha h 

// this keyword is not work in the functions,
// function chai() {
//     let username = "unique"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username = "unique"
//     console.log(this.username);
// }

// chai()


// Arrow Function:- 
// syntax
// () => {}

// const chai =  () => {
//     let username = "unique"
//     console.log(this);
// }

// chai()

// Explicit Return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return 
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2) 

const addTwo = (num1, num2) =>  ({username: "uique"}) // for object 

console.log(addTwo(3,4));

const myArray = [2, 3, 4, 5, 6]

// myArray.forEach()
