"use strict"; // if we write this , treat all JS code as newer version, but nowdays its inbuilt already so don't have to write this

//alert(3+3);//it will show error , because we are using nodeJS, not browser

//Datatypes => It is what kind of value a variable is storing.
let name = "Yash";
let age = 18;
let isLoggedIn = false;

//Primitive Data Types:
//number => 2 to power 53
let age1 = 23;
//bigInt => used for very large integers and at the end "n" make it bigInt
let bigNum = 223265623235656626298562333598566n;
//string => we write combination of charaters in the double quoted stirng => " "
let secName = "Yash Yadav";
//boolean => true/false
let isStudent = true;
//null => standalone value or intentional empty value or currently has no value
let Data = null; //null
//undefined => value is not assigned 
let val_assign ;
//Symbol => used to create unique values
let id1 = Symbol("id")
let id2 = Symbol("id")
console.log(id1 == id2) //false

//Non-Primitive Data Type

//object => 

//typeof => it gives output .... used to find the type of value

    console.log(typeof("Yash"));
    console.log(typeof(null));//object
    console.log(typeof(undefined));//undefined
    console.log(typeof(23));
    console.log(typeof(true));
    

    