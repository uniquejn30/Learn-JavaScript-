// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element== 5){
//         console.log("5 is best number");
        
//     }
//     console.log(element);
// }
// console.log(element);


for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loops value: ${i}`);
    
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner Loop value: ${j} and inner loop values: ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}


