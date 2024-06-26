// const score = 400
// console.log(score);


// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(typeof balance); // Object

// const otherNumber = 123.8765

// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // default as a US Standard 
// console.log(hundreds.toLocaleString('en-IN')); // Indian Standard


// ++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4)); //absolute value 
// console.log(Math.abs(4));
// console.log(Math.round(6.2));
// console.log(Math.round(7.6));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(2.9));
// console.log(Math.min(2,9,1,4,5,6,7,1,10));
// console.log(Math.max(2,9,1,4,5,6,7,1,10));


console.log( Math.random()); // gives values in b/w 0-1
console.log( Math.random()*10); 
console.log(( Math.random()*10) + 1 ); 
console.log(Math.floor( Math.random()*10) + 1 ); // use for single digit number

const min =1000;
const max =9999;

console.log("Generate an OTP :- " + (Math.floor(Math.random() * (max - min + 1)) + min));


