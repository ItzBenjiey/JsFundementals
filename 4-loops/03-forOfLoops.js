/* For Of Loops
- where for in loops look at enumerable, or countable properties- for of loops look at iterable properties
    -iretable properties are properties that we can parse through with numbers, or indices
    - for in loops: better suited for objects
    -for of loops: better suited for arrays
let student = { 
    name:'peter'
    awesome: true,
    degree: 'JavaScript',
    week: 1
*/
//using a for of loop with an object with throw an error since for 
let student ={
    name: 'ben',
    awesome: true,
    degree:'javascript',
    week: 1
}
for (let item in student) {
    console.log(item)
}
let catArray = ['tabby', 'brittish shorthair', 'maine coon', 'rag doll'];
for (let cat of catArray){
    console.log(cat);
}
for (let i =0; i< catArray.length; i++){
    console.log(catArray[i]);
}
// for (let i - 0: i <)