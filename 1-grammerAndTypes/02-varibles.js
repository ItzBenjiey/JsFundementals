/*
    -Varibles are named containers for storing data values/types
    -used to refer to data points held by varible at later time
*/

    let     number  =       3;
/*  (1)    (2)      (3)     (4)

    1- Js keyword
    2- varible name
    3- assignment operator
    4- value of varible
*/

let numberOne = 5; 
let numberTwo = 3;

console.log(numberOne+numberTwo);

/*
    -a variable name must begin with a letter, underscore or a dollar sign
    -number may follow but not come first
    -JS is Caps Sensative
    -noSpacesAllowedInVaribleNames
    -camelCaseIsTheBestPraticeForVaribleNames
*/

/*
    var, let, const

        -var: 'old' keyword for varibles
        -let 'new' keywrod for varibles
        -const: 'new' keyword for varibles; declares and unchangable value

    declaration vs initialization
        declarations are the LEFT SIDE of the assignment operator when writting a var.
        inlitilazation is the right of the assignment operator, or the value we're assigning to a varible
*/

let x;
console.log('Declaration:', x);
x=10;
console.log("Initialization", x);
x=20;
console.log('Reinitialization', x);

