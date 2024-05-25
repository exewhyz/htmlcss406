// var varVariable = "var";
// console.log(varVariable);

// var varVariable = "var2";
// console.log(varVariable);

// let letVariable = "let";
// console.log(letVariable);

// let letVariable = "let2"; //wrong
// console.log(letVariable);

// let newLetVariable = "let3";
// console.log(newLetVariable);

// newLetVariable = "newLetValue";
// console.log(newLetVariable);

// const constVariable = "const";
// console.log(constVariable);

// const newConstVariable = "const2";
// console.log(newConstVariable);

// newConstVariable = "newConstValue"; //wrong
// console.log(newConstVariable);

// let something;

// something = "something";

// console.log(something);

// const something; //wrong

// something = "something";

// console.log(something);

// {
//   // var varGlobalVariable = "global";
//   let letBlockVariable = "local1";
//   console.log(letBlockVariable);
// }

// let letBlockVariable = "local2";
// console.log(letBlockVariable);

// let string = "string";
// let number = 100;
// let boolean = false;
// let nullValue = null;
// let undefinedValue = undefined;

// console.log("value : ", string, "type : ", typeof string);
// console.log("value : ", number, "type : ", typeof number);
// console.log("value : ", boolean, "type : ", typeof boolean);
// console.log("value : ", nullValue, "type : ", typeof nullValue);
// console.log("value : ", undefinedValue, "type : ", typeof undefinedValue);

// const student = {
//   name: "John",
//   age: 20,
//   gender: "male",
// };

// const fruits = ["apple", "orange", 7];

// console.log(student.name);

// console.log(typeof student);
// console.log(typeof fruits);

// +,-,*,/,%,**,++,-- //Arithmetic Operators

// =,+=,-=,*=,/=,%=,**= //Assignment Operators

// ==, !=, ===, !==, >, < ,>= , <= , ? //Comparison Operators

// &&, ||, ! //Logical Operators

// if (condition) {
//   //logic
// } else {
//   //alternative logic
// }

let age = ["Nine", "Five", "Ten"];

// if (age > 0 && age < 10) {
//   console.log("A Valid Age");
// } else if (age > 10 && age < 15) {
//   console.log("You are a kid");
// } else if (age > 18) {
//   console.log("Not a kid");
// } else {
//   console.log("Not a valid age");
// }

// age > 10 ? console.log("Greater than 10") : console.log("Less than 10");

// for (let i = 0; i < age.length; i++) {
//   console.log(age[i]);
// }

// for ( keys in age ) {
//     console.log(keys);
// }

// for (value of age) {
//   console.log(value);
// }

// while (age.length === 4) {
//   console.log("hello");
// }

// do {
//   console.log("Hello from do while...");
// } while (age.length === 3);

// function test(a, b) {
//   const sum = a + b;
//   return sum;
// }

// let firstArgument = 10;
// let secondArgument = 15;

// const sumValue = test(firstArgument, secondArgument);

// console.log(sumValue);

const arrowFunc = () => {
  console.log("Arrow function");
};

arrowFunc();
