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

// const arrowFunc = () => {
//   console.log("Arrow function");
// };

// arrowFunc();

// Variable Hoisting
// console.log(names);

// var names;

// let names; // not hoisted

//function hoisting
// hoisted();

// function hoisted() {
//   console.log("I am hoisted");
// }

//String

const string1 = "Something1";

const string2 = "Something2";

const string3 = `Some ${string1} thing3 `;

// const s4 = "I'm good"
const s4 = " I'm good ";
const s6 = ' I"m good ';
const s7 = ` I'm good " `;

//escape sequence characters(\', \n, \r, \t, \/, \b, \\, \v, \f, \")
// const s8 = ' I\'m good ';
// const s9 = ' I\nm good ';
// const s10 = ' I\tm good ';
// const s11 = ' I\rm good ';

// console.log(s11);

const str1 = "Something here";
const str2 = "String2";
const str3 = "SOMETHING CAPITAL";
const str4 = "something small";

// console.log(str1.split(" "));

// console.log(str1.split(""));
// console.log(str3.toLowerCase());
// console.log(str4.toUpperCase());

// console.log(str2.slice());
// console.log(str2.slice(0,3));
// console.log(str2.slice(2,4));
// console.log(str2.slice(3));

// console.log(str1.includes("here1"));

// console.log(str2.indexOf("n"));

function callbackFunc(a) {
  console.log(a);
}
function normalFunc(a, callbackFunc) {
  callbackFunc(a);
}

// normalFunc(100, callbackFunc);

//Array

// const arr1 = [];
// console.log(arr1);
const arr2 = ["one", "two", "three", "four"];
const arr3 = [1, 2, 3, 4];

// arr1[0] = 1;
// arr1[1] = 2;
// console.log(arr1)

// arr1[1] = 5;

// console.log(arr1);

// console.log(arr2.length)

// console.log(arr2.pop())

// console.log(arr2)
// arr2.push("five");
// arr2.shift();
// arr2.unshift("zero");
// arr2.reverse();
// const newString = arr3.toString();
// const newArr = arr2.slice(0,3);
// const joinedArr = arr2.join("-")
// const joinedArr2 = arr2.join(arr3)
// const mergedArrs = arr2.concat(arr3)

// console.log(newString);
// console.log(newArr);
// console.log(joinedArr);
// console.log(joinedArr2);
// console.log(mergedArrs);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mapMethod = array.map((num) => {
//   return num * 2;
// });
// console.log(mapMethod);

// const filteredArray = array.filter((num, i) => {
//   return num > 6;
// });

// console.log(filteredArray);

// const reduceMethod = array.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(reduceMethod);

// let a = 10;
// let b = a;

// a = 20;

// console.log("a", a);
// console.log("b", b);

let obj1 = {
  name: "Aniket",
  phone: "123",
  add: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  },
};

// let obj2 = { ...obj1 }; //shallow cloning or copy
// let obj2 = { ...obj1, add: { ...obj1.add } }; //deep cloning or copy

// const stringifiedObj1 = JSON.stringify(obj1);

// const parsedObj1 = JSON.parse(stringifiedObj1);
// let obj2 = parsedObj1;

// let obj2 = obj1;

// console.log("Prev obj1", obj1);
// console.log("Prev obj2", obj2);

// obj1.name = "John";

// obj2.name = "John";
// obj2.add.city = "Mumbai";

// console.log("obj1", obj1);
// console.log("obj2", obj2);
// console.log(obj1 === obj2);

