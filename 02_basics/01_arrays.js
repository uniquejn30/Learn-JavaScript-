// Arrays :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [ 0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array( 1, 2, 3, 4)

// console.log(myArr[1]);


// Arrays methods

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9) // inserting the elements in first position of array
// myArr.shift() // Delete the first element form the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(19));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A" , myArr);

const myn1 = myArr.slice(1 , 3)

console.log("B" , myArr);
console.log(myn1);


const myn2 = myArr.splice(1 , 3)
console.log("C" , myArr);
console.log(myn2);



