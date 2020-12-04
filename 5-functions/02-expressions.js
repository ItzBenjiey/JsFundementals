// function expressions are stored inside of a var
let hello=function() { //unnamed function - anonymous function, since this is stored in var hello we do not need to name function itself
console.log('hi!')
}
hello();

/* 
DIFFERENCE BETWEEN FUNCTIONS AND DECLARATIONS AND FUNCTION EXPRESSIONs
    -function declarations are hoisted
    - function expression are NOT hoisted
    */

    //declaration
    function decTest() {
        console.log('it worked, and I was hoisted');
    }
    decTest();
    //expression
    let expTest = function() {
        console.log('it did not work and was not hoisted');
    }
    expTest();
