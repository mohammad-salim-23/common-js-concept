// javascript dynamic type programming language
// primitive data type
const a=5;
const b = "Samsu kopai na ekn ar";

// Non primtitive data type
const ages = [45,65,48];
const student = {id:23, class:7}

// difference
// 2 ta alada alada vabe memory te jayga nibe, tader address alada hobe


let x = 5;
let y = x;
console.log(x,y);//5,5

// non-primitive er ketre
let p = {job:"web developer"}
let q=p;// p and q memory te eki jaygay tader address, q te jodi partially kunu change kora hoy seta p teu change hobe
q.job = 'Front-end-developer';
console.log(p,q);