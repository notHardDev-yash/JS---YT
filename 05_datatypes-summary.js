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

const heros = ["Shaktiman", "Superman", "Batman"];

let myObj = {
    name : "Yash",
    age : 18,
    CGPA : 9.5
}

function iamfunction(){
    console.log("Hellow I am function ");
}
// iamfunction();//function call

