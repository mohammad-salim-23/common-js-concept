// const first = 2;
// const second = "2";
// const first =1;
// const second = true;
// const first =0;
// const second = false;
// const first = {x:5};
// const second = {x:5};
// const first = [];
// const second = [];//non-prinitive data type er ketre tara refference same ki na check kore
const first = [];
const second = first;
if(first==second){
    console.log("values are equal");
}else{
    console.log("values are not equal");
}
// type coercion
// type conversion
// type casting