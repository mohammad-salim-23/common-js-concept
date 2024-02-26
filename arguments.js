
function sum(a,b,c){
    console.log(arguments);//eita sudu function er betore kaaj kore
     const args = [...arguments];
    // console.log(args);
    const result = a+b+c;
    return result;
}


const total = sum(5,1,2,3,4);
// console.log(total);
console.log(typeof sum);
console.log( sum.length);