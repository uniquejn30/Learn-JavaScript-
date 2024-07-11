// Reduce() in JS 

const myNum = [1,2,3]

// const myTotal = myNum.reduce( function (acc , currentval) {
//     console.log(`acc: ${acc} and currentval: ${currentval}`);
    
//     return acc + currentval
// }, 0)



const myTotal = myNum.reduce( (acc, currentval) => acc+currentval, 0)
    
console.log(myTotal);


const shoppingCart = [
    {
        itemname : "py course",
        price : 2999
    },
    {
        itemname : "java course",
        price : 299
    },
    {
        itemname : "Data Science course",
        price : 7999
    },
    {
        itemname : "JavaScript course",
        price : 999
    },
]

const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(priceTopay);
