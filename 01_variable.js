const accountId = 1234;
let accountEmail = "yash@abc.com";
var accountPassword = 121;
accountCity = "Jaipur";//don't use this method to decalare variable ........beacuse it is not good for proffestional coder and we write this here because it's also possible , we can declare the variable without any use of keyword like const, let, var.
let accountState ;
//don't use var because of issue in block scope and funcitonal scope 

//accountId = 2 // not allowed// in const keyword

accountEmail = "yy@gmail.com";
accountPassword = 21233;
accountCity = "Raipur";

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//in tabular form

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

