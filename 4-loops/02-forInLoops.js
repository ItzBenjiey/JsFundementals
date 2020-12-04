/*
for in loops

-great for iterating over values in an object. properties in an obj are what are known as enumerable prop. 
enumerable means that properties can be counted 
    -for in loops iterate over an objects enumerable property
*/
// obj hold what are called key/value pairs
let student = {
    //key   value
    name:   'Ben',
    awesome: true,
    degree: 'JavaScript',
    week:    1
}

for(let item in student) {
    console.log(item) // gives key
    console.log(student[item]) // gives value of key
}

let catArray=['tabby', 'brittish shorthair', 'maine coon', 'rag doll'];
for (let cat in catArray) {
    // console.log(cat); // gives the index
    console.log(catArray[cat]); // gives the value of index
}

//challenge: write a for in loop, capitalizes first letter of a name , and lowecases the rest of the name
let name = 'beNJaMiN'
let capName;
for (let index in name) {

//console.log(index); //gives indexes of name varible - 0,1,2, ect
   if(index==0){
       capName=name[index].toUpperCase();
}else{
    capName+= name[index].toLowerCase();
}

}
console.log(capName);

