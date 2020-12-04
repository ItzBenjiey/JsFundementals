/*
 -falsy values: A falsy value is a value that is considered false when encountered in a Boolean context (Boolean's are data type that can only be 'ture' or 'false')
 - there are six cases of falsy values in JavaScript
 1. false
 2. 0
 3. "".''.``
 4. null
 5. undefined
 6. NaN (not a number)

 -This means when JavaScript is expecting a boolean and is given one of these value, it will always evaluate to 'falsy'
*/

let isOn = true;  // var is on read as BOOLEAN VAl t/f

if (isOn == true) {
    console.log('The light is on!');
}

if (isOn) {
    console.log('The light is still on');
}

let isOff = false;
if (isOff == false) {
    console.log('the light is off now');
}

let weather = 65;

if(weather<70) {
    console.log('Wear a jacket')
}  