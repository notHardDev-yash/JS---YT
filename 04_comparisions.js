//basic conversion
console.log("Basic conversions");
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);
console.log(1 != 2);

//string case
//Don't use these conversions
console.log("String cases");
console.log("1" > 2);//the 1 which is string is convert to a Number and behave as number so 1 is not greater than 2 ...so output is false
console.log("02">1);//true

//null case
//Don't use these conversions 
//when null convert to a number it is 0
console.log("Null cases");
console.log(null > 0);
console.log(null == 0);//false //because of special equality rule is applied ....iss rule ke according jab ham "==" se equate karte hai to jo null hai vo number me convert hi nhi hota so due to this ......it gives false
console.log(null == undefined);//true
console.log(null >= 0);//true//beacuse yaha equate nhi ho rhaa hai .....comparision ho raha hai

//undefined
//Don't use these conversions
console.log("Undefined cases");
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === // yeh value or data types both compare karta hai
console.log("=== conversions");
console.log("2" === 2);
console.log("2" !== 2);