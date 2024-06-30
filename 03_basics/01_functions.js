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

// console.log(loginUserMessage("unique"));
// console.log(loginUserMessage());

// Rest Operator (...num1)
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 300, 2000));

const user = {
    username: "Unique",
    prices: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user);
handleObject({
    username : "sam",
    price : 399,    
});

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 1000]));
