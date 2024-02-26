/**
 * 8 ways to get undefined
 * 1.variable that is not initialized will give undefined
 * 2.function with no return 
 * 3.parameter that is not passed will be undefined
 * 4.if return has nothing on the right side will return undefined
 * 5.property that doesn't exist on an object will give you undefined
 * 6.accessing array elements outside the index range
 * 7.deleting an element inside an array
 * 8.set a value directly to undefined
 */
let first;
// console.log(first);
function second(a,b){
    const total = a+b;
}
// console.log(second());
function third(a,b,c,d){
    const total = a+b+c+d;
    // console.log(a,b,c,d);
}
third(2,5);

function noNegative(a,b){
    if(a<0 || b<0){
        return ;
    }
    return a+b;
}
// console.log(noNegative(-2,-3));
const fifth = {
    id:2,
    name:'ponchom',

}

// console.log(fifth.id,fifth.salary);
const sixth = [4,5,8,99,66];
delete sixth[1];//you should not do it. Instead use splice
// console.log(sixth);
// console.log(sixth[1],sixth[5],sixth[20])
const eighth = undefined;
// console.log(eighth);
const ninth = null;

console.log(typeof undefined); //output:undefined
console.log(typeof null);//output:object
