// if
// conduction like:- 
// 2<=2 , 3 != 2
// <,>, <=, >=, ==, !=, 

// const isUSerloggedIn = true
// if(isUSerloggedIn){
    //   console.log("Login Page");
    
    // }
    // if(false){
        //     console.log("Logout Page");
        // }
        

// === -> Use for type checking 
// if(2 === "2" ){
//     console.log("executed");
// }

// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
    
// }
// else{
//     console.log("greater than 50");
    
// }

// console.log("weather is good");

// const score = 100

// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${Power}`);
// }
// console.log(`User Power: ${Power}`);

// const balance  = 1000
// if(balance > 500) console.log("test"); // It is an Inplicit Scope

// let balance = 500

// if(balance < 500){
//     console.log("Less than 500");
// } else if (balance < 1000) {
//     console.log("less than 1000");
// } else  if(balance > 1500){
//     console.log("greater than 1500");
// } else {
//     console.log("Equal to 1500");   
// }

const isUSerloggedIn = true
const debitcard = true
const loggedFromGoogle = false
const loggedInEmail = true

if(isUSerloggedIn && debitcard){
    console.log("Allow to buy course");
    
}
if(loggedFromGoogle || loggedInEmail){
    console.log("User logged in ");
    
}