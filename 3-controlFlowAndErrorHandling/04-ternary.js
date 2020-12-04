// Ternary act as shorcut for writing if & if/else statements

let num = 6;

//Ternary:
(num >0) ? console.log('yes') : console.log('no');
// (condition) ? code to run if condition true : code to run if condition not true

// INstead of:
if (num > 0) {
    console.log('yes');     // easier to read with alot of different condtion or youre planning on nesting
} else {
    console.log('no');
}

// Conditional with if & else if
if(num>10) {
    console.log('a first statement');
} else if (num<0) {
    console.log('another statement');
} else { 
    console.log('yet another,man');
}
// same as above using ternary
(num>10) ? console.log('a first statement') : (num < 0) ? console.log('another statment') :
console.log('yet another,man');

// can also rewrite ternary to make more readible:
(num>10) ? console.log('a first statement') 
: (num < 0) ? console.log('another statment') 
:console.log('yet another,man');

/*
challenge 
let age=29; 
   if (age >= 25) {
     console.log("You can do anything");
} else if (age >=21){
    console.log("You Can drink");
} else if (age >=18) {
    console.log("You can voted");
} else if (age >= 17){ 
    console.log("Youre too young to do anything");
}
make into Ternary
*/

let age=1000000000000000000000000000000000000;
(age >= 25) ? console.log('you can do anything')
: (age >= 21) ? console.log('you can drink')
: (age >= 18) ? console.log('you can vote')
:console.log('you cant do nothing')
