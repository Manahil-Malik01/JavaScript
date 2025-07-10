const friend = ['Michel', 'steven', 'Peter'];
//Add elements
const newLength = friend.push('Jay');
console.log(friend);
console.log(newLength);

friend.unshift('John');//add at first index

console.log(friend);

//Remove elements
friend.pop();//remove last element---
const popped = friend.pop();
console.log(popped);
console.log(friend);
friend.shift();//remove  from  first index
console.log(friend);
console.log(friend.indexOf('steven'));//return the index of mentioned value---
console.log(friend.indexOf('bob'));//return the index of unmentioned value in negative---

friend.push(23);
console.log(friend.includes('steven'));//return true 
console.log(friend.includes('bob'));//return false
console.log(friend.includes('23'));//return false
console.log(friend.includes(23));//return true

if (friend.includes('Peter')) {
    console.log('You have a friend Peter');
}