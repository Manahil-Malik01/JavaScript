// "uses strict";
// //premitives
// let a = 10;
// let b = a;
// a = 20;

// console.log("b is: ", b);
// console.log("a is: ", a);

// //objects
// let obj = {
//   x: 10,
// };
// let obj2 = obj;
// obj2.x = 20; //it changes the initial value of x inside object from 10 to 20
// console.log("x for obj is: ", obj.x);
// console.log("x for obj2 is: ", obj2.x);

// // Argument Keyword

// ("use strict");

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log("sum without argument keyword is: ", sum(5, 6, 7));

// // using the "argument " keyword
// function add() {
//   // no need of perimeters
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// let total = add(1, 2, 5, 9, 23, 10, 54);
// console.log("sum using argument keword is: ", total);

// // more usage
// function arg() {
//   console.log("the first argument is: ", arguments[0]); //prints the first argument
//   console.log("total number of arguments are: ", arguments.length); // total no of arguments
// }

// arg("Manahil", "Malik", 24, "BSCYS");

// //this keyword in arrow function

// ("use strict");
// const obj = {
//   name: "Manahil",
//   roll_no: 11,
//   marks: 50,
//   calculateGrade: () => {
//     if (this.marks > 40) {
//       // 'this' refers to the main obj
//       return "pass";
//     } else {
//       return "fail";
//     }
//   },
//   printFullname: () => {
//     const lastname = "Malik";
//     return `${this.name} ${this.lastname}`; //"this " with last name is undefined
//     //last name cannot be accessed through 'this' keyword as it is inside arrow function
//   },
// };
// let result = obj.calculateGrade();
// console.log("result is:", result);
// let fullName = obj.printFullname();
// console.log("fullname is: ", fullName);
