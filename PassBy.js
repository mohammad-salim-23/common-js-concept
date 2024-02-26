// primitive types are pass by value
function multiply(a,b){
    a=27;
    const res = a*b;
    return res;
}
let num1 = 5;
let num2 = 10;
multiply(num1,num2);
console.log(num1);
// array and object pass by refference
function makeMovie(couple1,couple2){
  couple1.partner = "Bubli";
  couple2.partner ="Maida";
}
const couple1 = {actor:"Shakib Khan",partner:"Opu Biswas"}
const couple2 = {acttor:"Salim Ali",partner:"Marjia"};
console.log(couple1,couple2);
makeMovie(couple1,couple2);
console.log(couple1,couple2);