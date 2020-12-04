/*
    BOOLEAN
    -has two possible values, true/false, yes/no, ect. 
*/

let lightIsOn = true;
console.log(lightIsOn);

let lightIsOff = false;
console.log(lightIsOff);


/*
    Null  - is an empty value. Think of it as an empty container; nothing is in it, but it stil exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
undefined

    - no value has been assigned and doesnt act as an empty container

*/

let under = undefined;
console.log(under);

let correct;
console.log(correct);

/*
    NUMBERS
        -numbers or integers are written without quotations, unlike words 
*/

let degrees = 40;
console.log(degrees);

let precise = 9999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let a = Number('123');
console.log(a);

/*
        STRINGS
        -strings are datatypes used to represent text and are either wrapped in single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = 'singlequotes';

console.log(stringOne, stringTwo);  //  string concatenation- takes two stings and combines them into one

let first = 1050 + 100;
let second = '1050' + '100'

console.log(first); // 1150
console.log(second); // 1050100

console.log(typeof first); // number
console.log(typeof second); // string

let third = 1050 + '100' // type of coersion
/* 
when javascript sees that were trying to add together a number and a string, it will combine the values instead of trying to compute the math. 
*/
console.log(third);
console.log(typeof third);

/*
OBJECT
used to store multiple values instead of single
objects are denoted by curly braces {}
objects hold key/value pairs
*/

let frodo = {
    race: 'hobbit',
 // key     value
    rings: 1,
    cloak: true
}
console.log(frodo);
/*
ARRAYS
-containers that hold a list of items
- arrays are denoted by square brackets[]
-can have an object,a string, and a BOOLEAN
*/

let burritos = ['large',4,true];

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/
let firstName = "Ben";
let lastName = "Lucas";
let houseNumber = "12407";
let streetNumber = "Sleepy Hollow Rd N";
let city = "Monticello";
let state = "IN";
let zipcode = "7960";

console.log(firstName, lastName+ ',', houseNumber, streetNumber+ ',', city + ',', state, zipcode);

// ',', (represents comma in string)
