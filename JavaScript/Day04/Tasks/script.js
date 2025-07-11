// function logger() {
//     console.log('my name is jonas');
// }
// //calling function
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// //function decleration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //function expresssion
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);
// //arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;

// }
// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1991, 'jonas'));
//funtion calling other function
// function cutPeiceFruit(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePeice = cutPeiceFruit(apples);
//     const orangePeice = cutPeiceFruit(oranges);
//     console.log(apples, oranges)
// //     const juice = `juice with ${applePeice} apples and ${orangePeice} oranges`;
// //     return juice;
// // };
// // console.log(fruitProcessor(2, 3));


//the switch statement
// const day = 'wednesday';

// switch (day) {
//     case 'monday':
//         console.log('go to the coding meeting');
//         break;
//     case 'tuesday':
//         console.log('prepare a  theaory vedio');
//         break;
//     case 'wednesday':
//         console.log('practice code');
//         break;
//     case 'thrusday':
//         console.log('write code example');
//         break;
//     case 'friday':
//         console.log('record vedio');
//         break;
//     case 'saturday':
//     case 'sunnday':
//         console.log('enjoy the weekend');
//         break;
//     default:
//         console.log('not a valid day!');
// }
// if (day === 'monday') {
//     console.log('go to the coding meeting');
// }
// else if (day === 'tuesday') {
//     console.log('prepare a  theaory vedio');
// }
// else if (day === 'wednesday') {
//     console.log('practice code');
// }
// else if (day === 'thrusday') {
//     console.log('write code example');
// }
// else if (day === 'friday') {
//     console.log('record vedio');
// }
// else if (day === 'saturday' || day === 'sunday') {
//     console.log('enjoy the weekend');
// }
// else {
//     console.log('nothing to do');
// }
// //conditional operators
// const age = 10;
// // age >= 18 ?
// //     console.log('i like to drink wine') :
// //     console.log('i like to drink water');
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);
// console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);


// //function decleration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //function expresssion
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);