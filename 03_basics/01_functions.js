// function
function sayMyName(){
    console.log("U");
    console.log("N");
    console.log("I");
    console.log("Q");
    console.log("U");
    console.log("E");
}

// sayMyName()
// Reference [sayMyName] Executive [ () ]

// (num1 , num2) is Parameters
// function addTwoNumber( num1, num2 ){

//     console.log(num1 + num2 );
// }

function addTwoNumber( num1, num2 ){
 // result is Variable in function

    // let result = num1 + num2
    // return result // key-word

    return num1 + num2

    console.log("Unique");
    
    
} 

// () Argument 
// result is another Variable of outside the function , Both are not same Variable
const result = addTwoNumber(3, 5)

// console.log("Result : ",  result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
        if(!username){
        console.log("Please enter a username")
        return
    }
        return `${username} just logged in `
    
}

console.log(loginUserMessage("unique"));
// console.log(loginUserMessage());


