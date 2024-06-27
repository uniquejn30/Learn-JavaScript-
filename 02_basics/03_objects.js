// singleton used in only constructor 
// Object.create

// In Arrays :-
// myArray = ["U" ," n"]
// myArray[1]

// Object literals :- https://www.w3schools.com/js/js_object_definition.asp
// Use :-  Key , Values 

const mySym = Symbol("Key1")
//  Symbol (Data Type):- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


const JsUser = {
    name: "Unique",
    "full name" : "Unique Jain",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "uniquejn3004gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturedy"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);


// JsUser.email = "unique@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "unique@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






