const name = "Unique Jain "
const repoCount =  50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('unique-uj-com')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('q'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 5);
console.log(anotherString)

const newStringOne = "    unique     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://unique.com/unique%20jain"


console.log(url.replace('%20', '-')) 

console.log(url.includes('sundar'))

console.log(gameName.split('-'))
