// Objects 

// const tinderUser2 = new Object() // Singleton object  
// console.log(tinderUser2);


const tinderUser = {} // Non-Singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Unique",
            lastname : "Jain",
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

// const obj3 = { obj1 , obj2 }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// const returnedTarget = Object.assign(target {}, source(obj1));

// const obj4 = Object.assign( {} , obj1, obj2, obj3)

// Spread Operator
const obj5 = {...obj1,...obj2,...obj3}

// console.log(obj5);

const users = [
    {
        id : 1,
        email : "h@gmail.com",
    },
    {
        id : 1,
        email : "h@gmail.com",
    },
    {
        id : 1,
        email : "h@gmail.com",
    },
    {
        id : 1,
        email : "h@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// [Prototype]]:  Object
// // constructor : 
// Object() hasOwnProperty()
//          isPrototypeOf()
//          propertyIsEnumerable()
//          toLocaleString()
//          toString()
//          valueOf()
//          __defineGetter__()
//          __defineSetter__()
//          __lookupGetter__()
//          __lookupSetter__()
//          __proto__()



