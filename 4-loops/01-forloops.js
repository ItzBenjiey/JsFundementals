// 1. set var   2. condition to be met  4. incrementer
for(let i=0;    i<10;                   i++){ // i = i+1
// 3. for loop body: code to be ran in condition not false
console.log(i);
}


/*
1. set var
2. condition to be met. the loop will continue to run until this condition evaluates as false
3. body of the for loop: code to be ran as long as condition evaluates as true
4. incrementer: the number in which we want to increase the value of our var by. 
    -these steps will continue to repeat until the condition eval as false. 
*/

// challenege: using a for loop, count to 20 by 2
for (let i = 0; i <=20; i +=2) {
    console.log(i);
}

// challenge: using a for loop, count from 10 to 0 going down by 1

for (let i = 10; i <=0; i--) {
    console.log(i);
}

// challenge using for loop count form 0 to -24 by 2

for (let i = 0; i >=-24; i -=2) {
    console.log(i);
}

// challenge using a loop go through a name and display each letter indv
let name = 'benjamin'
console.log(name.length);
// 0 <8
for (let num=0;num< name.length;num++){
    console.log(name[num]);

}
// challenge; write a loop that adds up all numbers from 1-50 (should equal 1275)

let sum = 0
for (let i = 1; sum <= 50; i ++){
    sum+= i 
    console.log(sum)
}