const userEmail = "u@unique.ai"
const emptyobj = {}

if(userEmail){
    console.log("got user email");
} else {
    console.log("Don't have user email");  
}


// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// Check for arrey is empty or not
// if (userEmail.length === 0) {
//     console.log(" Arrey is empty");
    
// }

// Check for Object is empty or not
if (Object.keys(emptyobj).length ===0 ) {
    console.log(" Object is empty");
    
}

// Nullish Coalescing Operator (??): null, Undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary operator 

// conduction ? true : false

const iceteaPrize = 100
iceteaPrize <= 80 ? console.log("less than 80") : console.log("more than 80");



