// Dates


// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// console.log(myCreatedDate);
// let myNewDate = new Date("2024-06-26") // YY-MM-DD
// console.log(myNewDate.toLocaleString());

// let myCreatedDate = new Date("06-26-2024") // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // in mile seconds 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default' , {
   weekday: "long"
   
})





