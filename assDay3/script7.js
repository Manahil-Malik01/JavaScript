
const description = `Portugal is in Europe, and its 11 million people speak Portuguese.`;
console.log(description);

// Population check------
let population = 11;
if (population > 33) {
    console.log('Portugal population is above average');
} else {
    console.log(`Portugal population is ${33 - population} million below average`);
}

// Type coercion examples--------
console.log('9' - '5');             // 4
console.log('19' - '13' + '17');    // '617'
console.log('19' - '13' + 17);      // 6 + 17 = 23
console.log('123' < 57);            // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // "114" + 9 = "1149", then -4 = 1145, -2 = 1143

// Prompt and border check-----
const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?')
);

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// Country suitability check----------
let language = 'english'; // Assigning a value--
let isIsland = false;     // Declaring isIsland to avoid reference error--

if (language === 'english' && population < 50 && !isIsland) {
    console.log('You should live in Portugal :)');
} else {
    console.log('Portugal does not meet your criteria :(');
}
