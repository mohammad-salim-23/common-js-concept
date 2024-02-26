/*
 Truthy:
 1.true
 2.any number (+ve,-ve) will be truthy other than 0
3.any string will be truthy except empty string
4.{}; object
5.[]: array all time truthy
 Falsy:
 1.false
 2.0
 3.''(empty string)
 4.undefined
 5.null
*/
// const x = -8;
// const x = "iii"
// let x = null;
// let x={};
let x=[];
// console.log(x);

if(x){
    console.log('value of x is truthy')
}else{
     console.log('value of x is falsy');
}
// optional
// check falsy
const y = '';
if(!y){
    console.log('value is falsy')

}
const z=5;
// check true
if(!!z){
    console.log("value is truthy");
}