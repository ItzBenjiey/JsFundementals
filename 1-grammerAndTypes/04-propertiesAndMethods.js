/* properties and Methods
-in most cases, properties are qaulities related to data we're working with, methods are actions we can perform on the data were working with.. using a method causes something to happen to data, while using a property returns info about the data
*/

// STRING PROPERTIES

//Length
let myName = 'ben';
console.log(myName.length);

//STING METHODS

let myDogsName= 'luna';
console.log(myDogsName);

let home = 'My home is Monticello'
console.log(home.includes('Monticello'));
// challenge: use google to find MDN docu for string methods, find .string'.split()' method, and implement it to get an array back from a string. 


const str = "This sentence will be split into indv parts";

const words = str.split(' '); // can add ('')- split at indv character or (',') - split at comma
console.log(words);
