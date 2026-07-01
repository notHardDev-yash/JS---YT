const name = "yash";
const repoCount = 12;

// console.log(name + repoCount); //it's old way of writing this

//new way: backticks (``)

// console.log(`Hellow my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("Yash");

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));

const anothername = "    one    ";
console.log(anothername.trim())

