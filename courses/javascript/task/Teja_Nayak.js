const firstName = "Teja";
const lastName = "Nayak";
const fullName = `${firstName} ${lastName}`;
const skills = ["HTML", "CSS", "JS"];
const address = "Hyderabad";
const designation = "React Developer";
const company = "Trangla";
const monthlySalary = 35000;

// Calculate salary
const calculateSalary = (monthlySalary) => monthlySalary * 12;

const annualSalary = calculateSalary(monthlySalary);

const UserBio = (firstName, lastName, address, designation, company, annualSalary) => {
    return `${firstName} ${lastName} living near ${address} and working as ${designation} for ${company}, earning around ${annualSalary} per year.`;
};


// Output
const output = UserBio(firstName, lastName, address, designation, company, annualSalary);
console.log(output);
console.log(`Skills: ${skills}`);


// Sample arithmetic operations

let a = 5;
let b = 3;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Percent


// comparison operators 
// " == "
let name1 = "Teja";
let name2 = "teja";
let isEqual = name1 == name2;
console.log(isEqual);

let num1 = 5;
let str1 = "5";
isEqual = num1 == str1;
console.log(isEqual); 

let bool1 = true;
let bool2 = 1;
isEqual = bool1 == bool2;
console.log(isEqual); 

// " === "

let name3 = "Teja";
let name4 = "teja";
let isItEqual = name3 === name4;
console.log(isItEqual);

let num5 = 5;
let string5 = "5";
isItEqual = num1 === str1;
console.log(isItEqual);

let bool3 = true;
let bool4 = 1;
isItEqual = bool3 === bool4;
console.log(isItEqual);

let bool5 = true;
let bool6 = true;
isItEqual = bool5 === bool6;
console.log(isItEqual);