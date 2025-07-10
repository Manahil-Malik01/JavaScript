// Test Case 1
{
    const marksMass = 78;
    const marksHeight = 1.69;
    const johnsMass = 92;
    const johnsHeight = 1.95;

    const marksBMI = marksMass / marksHeight ** 2;
    const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
    const markHigherBMI = marksBMI > johnsBMI;

    console.log(marksBMI, johnsBMI, markHigherBMI);
}

// Test Case 2
{
    const marksMass = 95;
    const marksHeight = 1.88;
    const johnsMass = 85;
    const johnsHeight = 1.76;

    const marksBMI = marksMass / marksHeight ** 2;
    const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
    const markHigherBMI = marksBMI > johnsBMI;

    console.log(marksBMI, johnsBMI, markHigherBMI);
}
//2nd challange
const marksMass = 95;
const marksHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
const markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI, markHigherBMI);

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI.toFixed(1)}) is higher than John's (${johnsBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnsBMI.toFixed(1)}) is higher than Mark's (${marksBMI.toFixed(1)})!`);
}
//3rd challange
// Average scores for original version
const scoreDolphin1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = (88 + 91 + 110) / 3;
console.log('Original Scores:', scoreDolphin1, scoreKoalas1);

if (scoreDolphin1 > scoreKoalas1) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas1 > scoreDolphin1) {
    console.log('Koalas win the trophy');
} else {
    console.log('Both win the trophy!');
}

// BONUS VERSION: Minimum 100 points requirement to win
const scoreDolphin2 = (97 + 112 + 80) / 3;
const scoreKoalas2 = (109 + 95 + 50) / 3;
console.log('Bonus Scores:', scoreDolphin2, scoreKoalas2);

if (scoreDolphin2 > scoreKoalas2 && scoreDolphin2 >= 100) {
    console.log('Dolphins win the trophy ');
} else if (scoreKoalas2 > scoreDolphin2 && scoreKoalas2 >= 100) { // ← FIXED HERE
    console.log('Koalas win the trophy ');
} else if (
    scoreDolphin2 === scoreKoalas2 &&
    scoreDolphin2 >= 100 &&
    scoreKoalas2 >= 100
) {
    console.log('Both win the trophy! ');
} else {
    console.log('No one wins the trophy ');
}
