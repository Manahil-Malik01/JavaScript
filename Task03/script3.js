const jonas = {
    firstName: 'jonas',
    lastName: 'Schemendata',  // use camelCase for consistency
    job: 'teacher',
    age: 2037 - 1991,          // evaluate the expression instead of using a string
    friends: ['Micheal', 'Peter', 'Steven']  // plural is more appropriate
};

console.log(jonas);

// Accessing properties
console.log(jonas.lastName);           // dot notation
console.log(jonas['lastName']);        // bracket notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // becomes jonas['firstName'] -- valid

console.log(jonas['last' + nameKey]);  // becomes jonas['lastName'] --valid

// Prompt user for property
const interestedIn = prompt(
    'What do you want to know about Jonas? Choose between firstName, lastName, job, age, and friends'
);

// Check if the input is valid
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between: firstName, lastName, job, age, and friends');
}
jonas.location = 'Port';
jonas['twiter'] = '@jonas';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
