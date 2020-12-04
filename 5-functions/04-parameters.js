/*
    PARAMETERS
        - parameters are placeholders for data that we pass into the function when the function is called
                        (1)
        function hello(name) {
            console.log(`hello ${name}`);
                                 (2)
        }
                (3)
        hello('Zach');
        1. this is the parameter that the function is holding. This is just a placeholder.
        2. by calling the parameter name, it will print the value given to 'name' when the function was called
        3. this is the data that we're passing into the function, and that the parameter 'name' will then hold.
*/
//          let name = 'ben'
function hello(name) {
    console.log(hello ${name});
}

hello('ben');  // when we call the function is where we need to pass in the data we want to assing to the parameter

//--------------------------------------------

function ben(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`); //perametter
}

ben('cheese pizza'); // if you have no parameter (or placeholder) then your function cant accept data

//---------------

function counter(number) {
    console.log(i);('the console.log from the function ran', number);
}

for (let i = 0; i <= 10; i++) {
    //console.log(i);
    counter(i)
}
//challenge : write a function that holds 2 parameters. one for first name, other for last name. inside function reference 2 paramters in a console.log statment that prints off full name

function fullName(first,last){
    let fullName= `${first} ${last}`;
    console.log(`Hello, my name is ${myFullName}`)
}

