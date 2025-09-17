"use strict";

class Person {
  constructor(f_name, l_name, birth, grade) {
    this.first_name = f_name;
    this.last_name = l_name;
    this.birthYear = birth;
    this.CGPA = grade;
  }
  //setter method to set gpa only if greater than 3.5
  set grade(gpa) {
    if (gpa > 3.5) {
      this.CGPA = gpa;
    } else {
      return;
    }
  }

  //getter method for full name (CamelCase formatting)
  get fullName() {
    const new_name = this.first_name + " " + this.last_name;
    return new_name
      .split(" ")
      .map((half) => half[0].toUpperCase() + half.slice(1))
      .join(" ");
  }
}

const Manahil = new Person("manahil", "malik", 2005, 3.7);
console.log("Initial object:", Manahil);

// now updating CGPA using setter
Manahil.grade = 4;
console.log("After modifying CGPA:", Manahil);

// getting formatted full name
console.log("Full Name:", Manahil.fullName);
