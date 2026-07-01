//primitive(value types)
//7 types: 
//string, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100;
const isLoggedIn = true;
const outsidetemp = null;
let userEmail;
const id = Symbol(123);
const id2 = Symbol(123);
// console.log(id==id2);//false
const bigNum = 3342836364763748838n;


//non-primitive(reference types)
//object, array, function
//array:
const heros = ["Shaktiman", "Superman", "Batman"];
//object:
let myObj = {
    name : "Yash", 
    age : 18,
    CGPA : 9.5
}
//function:
function iamfunction(){
    // console.log("Hellow I am function ");
}
// iamfunction();//function call

//Heap memory is used to store non-primitive data types. Heap me reference (address) milta hai.
//Stack memory is used to store primitive data types. or isme copy milti hai.

//heap
let myYTname = "Yash07";
let anothername = myYTname;
anothername = "Yash_Yadv07";
console.log(anothername);
console.log(myYTname);

//stack
let userOne = {
    email: "yash@123"
};

let userTwo = userOne;

userTwo.email = "yadav@123";

console.log(userOne.email);
console.log(userTwo.email);

//Primitive data types are stored in Stack Memory and are copied by value, while Non-Primitive data types are stored in Heap Memory and are copied by reference.

//Stack
// Primitive Types
// ↓
// Copy milti hai
// ↓
// Original affect nahi hota


// Heap
// Objects, Arrays, Functions
// ↓
// Reference milta hai
// ↓
// Original affect ho sakta hai