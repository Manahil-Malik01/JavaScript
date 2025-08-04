"use strict";

// Using an object inside another
let person2 = {
  name: "Manahil",
  age: 20,
};

let players = {
  person1: {
    name: "Manahil",
    age: 20,
  },
  person2, // no need to do anything else, just put the name of the object
};

console.log("The players are: ", players);

// Declaring function inside object
let obj = {
  name: "Manahil",
  printThestring() {
    console.log(`${this.name} is a good person`);
  },
};
obj.printThestring();

// Accessing variables by names
let Name = "Manahil";
let lastName = "Malik";
let age = 20;
let numbers = [1, 2, 3, 4];

let obj2 = {
  Name,
  lastName,
  age,
  numbers,
};

console.log("The object2 is: ", obj2);
