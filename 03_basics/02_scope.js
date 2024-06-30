// let a = 10;
// const b = 20;
// var c = 300;
// {} -> scope
// closer &  nested 

// let a =300;
if(true) {
    // let a = 10;
    // const b = 20;
    // var c = 30;
    // console.log("Inner a: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "unique"

    function two() {
        const website = " Youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if (true) {
    const username = "unique"

    if (username == "unique") {
        const website = "youtube"
        // console.log(username + website);
    }
    
}
// console.log(username);

// +++++++++++++++++++++++++++ Interesting +++++++++++++++++++


console.log(addone(5));
function addone(num) {
    return num + 1
    
}
// addone(5)
 


addTwo(5)
const addTwo = function (num) {
    return num + 2
    
}