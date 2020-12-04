/*
SCOPE
-scope is how a computer keeps track of all of the varibles we create in our code
- local scops {console.log}
-Global scope: varibles accesible anywhere in doc
*/

let x = 12;

function scope(){
    let x = 33;
    console.log(x);
}
scope(); //tells the function 'scope' to run with ()
console.log(x);

let y = 12;
function newScope() {
    y=33;
    y= 44;
    y=55;
    console.log(y);
}

newScope();
console.log(y);

/*
VAR vs LET
-while var and let seem to operate the same- they have alot of the same funcitonality (both allow us to declare and initialize varibles) - they also behave differently from one another
-var is scoped to the nearest function block{}, and let is scoped to the nearest enclosing block {}
*/

var testOne= 'this is a test'
let testTwo='this is another test';
console.log(testOne, testTwo);
//VAR

var x=12;
function varTest(){
    var x = 33;
    if(1==1){
        var x=45;
        console.log(x);
    }
    console.log(x)
}
varTest();
console.log(x);

//---------------------------------------------------------------------------

// LET
let y=12;
function letTest(){
    var y=33
    if(true){
    let y = 45;
    console.log(y);
}
console.log(y);
}
letTest();
console.log(y);

