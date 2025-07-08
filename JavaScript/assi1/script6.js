// Value and Variable
let country = 'Pakistan';
let continent = 'Asia';
let population = '6 million';
console.log(country, continent, population);

// Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);       // boolean
console.log(typeof country);        // string (no quotes needed here)
console.log(typeof population);     // string
console.log(typeof language);       // undefined

// let, const, var
language = 'Urdu';                  // already declared earlier with let, so just assign value here
const birthYear = 2004;
console.log(birthYear, language);

// Basic Operators
population = 11;                    // overwrite the string value with a number
console.log(population / 2);        // 5.5
population++;
console.log(population);            // 12
console.log(population > 6);        // true (compared to Finland)
console.log(population < 33);       // true (compared to average)

const description = "Portugal is in Europe, and its 11 million people speak Portuguese.";
console.log(description);
