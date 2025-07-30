// array distructuring
"use strict";

const arr = [1, 2, 3, [4, 5]];
/////////////////////////////////////////////// distructuring
const [a, b, c, d] = arr;
console.log(a, b, c, d);
// outpput        1 2 3 [ 4, 5 ]
/////////////////////////////////////////////////nested arrays
const [e, f, g, [h, i]] = arr;
console.log(e, f, g, h, i);
//output           1 2 3 4 5

///////////////////////////////////////////////...rest perimeter
let aRR = [1, 2, 3, 4, 5];
const [first, ...rest] = aRR;
console.log("first is: ", first);
console.log("rest is:  ", rest); // returns rest of the array values other than first

///////////////////////////////////////////////////swaping values
let q = 5;
let p = 3;
[q, p] = [p, q];
console.log("q now is: ", q);
console.log("p now is: ", p);

const array = [
  ["GLi", "XLi", "BMW", "ferrari"],
  ["salad", "Biryani", "noodles", "chicken"],
  ["brown", "black", "purple", "grey"],
  ["football", "jodu", "taicondo"],
];
///////////////////////////////distructuring into cars,foods,colors and hobbies
const [cars, food, colors, hobby] = array;
console.log("cars are:", cars);
console.log("foods are:", food);
console.log("colors are:", colors);
console.log("hobbies are:", hobby);
////////////////////////////// function returning more than one values
function favouriteCollection() {
  const random = Math.trunc(Math.random() * 4);
  return [cars[random], food[random], colors[random], hobby[random]];
}

let person = favouriteCollection();
console.log(person);

// destructuring objects

("use strict");

//////////////////////////////destructuring simple objects///////////////////
const user = {
  name: "Manahil",
  age: 19,
  roll_no: 69,
};

const { name, age, roll_no } = user;
//////no need of using user.name, user,age and user.roll_no etc
console.log(`name is: ${name} \nage is: ${age} \nroll_no is: ${roll_no}`);

//////////////////////////////Renaming variables/////////////////////////////

const { name: firstname, age: yearsOld } = user;
console.log("first name is: ", firstname);
console.log("age is: ", yearsOld);
//it will print the name=Manahil and age=19

//////////////////////////////////default values/////////////////////////////

const student = {
  student_name: "Manahil Malik",
  Student_Roll: 69,
  student_degree: "BSCYS",
};

//destructing with default values

const { Name = "Manahil", S_age = "19", language = "punjabi" } = student;
//if the value is present in student(object) it should be assigned otherwise the default value is used which is assigned using "=" operator
console.log("Student name is: ", Name);
console.log("Student age  is: ", S_age);
console.log("Student language is: ", language);
// as language is not present in the student object it will print the deault value which is punjabi

/////////////////////////////////Rest property///////////////////////////////
//the ... rest propertiy works the same as in arrays

const object = {
  x: 10,
  y: 20,
  z: 30,
  q: 40,
};
//destructing
const { x, ...otherDetails } = object;
console.log("the first value is: ", x);
console.log("other values are:  ", otherDetails);
