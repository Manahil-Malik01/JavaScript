"use strict";

class Person {
  constructor(f_name, l_name, birth, grade) {
    this.first_name = f_name;
    this.last_name = l_name;
    this.birthYear = birth;
    this.CGPA = grade;
  }

  // Static method (not tied to a single object)
  static hello(name) {
    console.log(`Hello ${name}`);
  }
}

const Manahil = new Person("manahil", "malik", 2005, 3.7);
console.log("Initial object:", Manahil);

// calling static method (no object needed)
Person.hello("Manahil Malik");

Manahil.CGPA = 4;
console.log("After modifying CGPA:", Manahil);

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

let sum = MathUtils.add(5, 3);
let product = MathUtils.multiply(4, 6);

console.log("Sum:", sum); // 8
console.log("Product:", product); // 24
