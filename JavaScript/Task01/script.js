const friend1 = 'Michel';
const friend2 = 'steven';
const friend3 = 'Peter';

const friend = ['Michel', 'steven', 'Peter'];
console.log(friend);
const Year = new Array(1998, 1994, 1984, 2020);
console.log(friend[0]);
console.log(friend[2]);
console.log(friend.length);
console.log(friend[friend.length - 1]);
friend[2] = 'Jay';
console.log(friend);
// friend=['Bob', 'Alice']; ----- error-----
const firstName = 'Jonas';
const Jonas = [firstName, 'Schmedatmenn', 'teacher', 2037 - 1999, friend];
console.log(Jonas);
console.log(Jonas.length);
//Exersice
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}
const year = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(year));// this return NaN not a number as year is an array---
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);