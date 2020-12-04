let myName = 'bEN';
if (myName[0]==myName[0].toUpperCase()) {
    console.log(myName);
}   else {
    console.log("Hey, this isn't written correctly")
}

if (myName[0]==myName[0].toUpperCase()) {
        console.log(myName.charAt(0)); 
} else {
    console.log(myName.slice(1).toLowerCase())  }

if (myName[0] == myName[0].toUpperCase()) {
        console.log(mName.charAt(1)+(myNasme.slice(1).toLowerCase())); 
} else {
    console.log("not true body:", myName.charAt(0).toUpperCase()+(myName.slice(1).toLowerCase()));
}

let adress = "Indy, IN";
console.log(adress.substr(-4, 3))   // start at end go back 4 spaces, read the next 3 (, I)

let address2= "Indianapolis, IN";
console.log(address2.substr(-2));   // (-) means start at end and go back 2 spaces(N)

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

let num = -5;
switch (true) {
    case (num <0 && num > -10):
    console.log('case 1 ran');
    break;
case(num>0):
    console.log('case 2 ran');
    // break;
    default:
            console.log('didnt work');
}

let officeCharacter = "pam";
switch (officeCharacter){
case "Michael":
    console.log("my mind is going a mile an hour");
case "dwight":
    console.log("Perfectenschlag")
    break;
case "jim":
    console.log("bears. beets. battlestar galatica.")
    break;
default:
    console.log(`I'm sorry, ${officeCharacter}, but I do know you?`);
    console.log('I\'m sorry,'+""+officeCharacter+",", 'but do I know you?');
    break;
}