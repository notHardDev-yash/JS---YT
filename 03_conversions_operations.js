let score = true;
//if score = null then type is number when after convert to number and the actually value is 0;
//if score = undefined then type is number when after convert to number and the actually value is NaN;
//if score = boolean(true/false) then after convert to number the type is number and the actually value is 1 if true and 0 if false.
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);//convert to number 
// console.log(typeof valueInNumber);
// console.log(typeof(valueInNumber));
//to check is there is actually a number in score
// console.log(valueInNumber);// NaN is the output it means that not a number......it's a issue of JS

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn)
// console.log(booleanIsLoggedIn)

//========operations===========

let value = 3
let negvalue = -value 
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%8);
// console.log(2**2);

let str1= "Yash";
let str2 = " Yadav"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + "2");//12
// console.log(1 + "2");//12
// console.log("1" + 2);//12
// console.log(1 + 2 + "3");//33
// console.log("1" + 2 + 3);//123

// console.log(+true);//1
// console.log(+"")//0

let num1, num2, num3
num1= num2= num3 = 2+2

let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);//101

//prefix and postfix
//prefix
console.log("Prefix")
let x = 4;
let y = ++x;
// console.log(x);
// console.log(y);


//postfix
console.log("Postfix");

let a = 4;
let b = a++;
// console.log(a);
// console.log(b);

