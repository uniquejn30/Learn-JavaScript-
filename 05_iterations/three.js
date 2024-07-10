// // for of
// ["", "", ""] Strings in Array
// [{}, {}, {}] Object in Array

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
    
// }

// const greeting = "Hello World!"
// for (const greet of greeting) {
//     console.log(greet);
// }

// Maps

const map = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United State of America")
map.set(`Fr`, "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
    
}

const myObject = {
    ' game 1' : 'NFS',
    ' game 2 ': 'Spiderman'

}

// for (const [key, value] of myObject) {
//     console.log(key, ':- ', value);
// }