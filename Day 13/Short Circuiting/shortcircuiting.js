"use strict";

/////////////////////////////////////////AND (&& ) Operator////////////////////////////////////////////////
// 🔹 Rule of && (Logical AND) in JavaScript:
// 👉 It evaluates from left to right
// 👉 It returns the first falsy value it finds
// 👉 If no falsy value is found, it returns the last value

const A = 0 && 5;
// Left is 0 (falsy) → returns 0 without checking right
console.log("A = ", A);

const B = "Zoha" && null;
// "Zoha" is truthy → checks right → null is falsy → returns null
console.log("B = ", B);

const C = "Ali" && "Sara";
// Both truthy → returns last value → "Sara"
console.log("C = ", C);

/////////////////////////////////////OR (||) Operator//////////////////////////////////////////////////////
// 🔹 Rule of || (Logical OR) in JavaScript:
// 👉 It evaluates left to right
// 👉 It returns the first truthy value it finds
// 👉 If no truthy value is found, it returns the last value

const D = 0 || 7;
// 0 falsy → returns 7 (truthy)
console.log("D = ", D);

const E = "Hira" || null;
// "Hira" is truthy → returns it without checking right
console.log("E = ", E);

const F = "Adeel" || "Hamza";
// "Adeel" is truthy → returns it
console.log("F = ", F);

const G = undefined || NaN;
// Both falsy → returns last one → NaN
console.log("G = ", G);

const I = NaN || undefined;
// Both falsy → returns last one → undefined
console.log("I = ", I);

const H = null || undefined;
// Both falsy → returns last one → undefined
console.log("H = ", H);

//////////////////////////  Nullish Coalescing Operator (??) ///////////////////////////////////////////////
// 🔹 Rule of ?? (Nullish Coalescing):
// 👉 If left value is null/undefined → returns right value
// 👉 Otherwise returns left (even if falsy like 0, false, "")

console.log(null ?? "default"); // "default"
console.log(undefined ?? "backup"); // "backup"
console.log(0 ?? 100); // 0 (not null/undefined)
console.log(false ?? true); // false (not null/undefined)
console.log("" ?? "text"); // "" (not null/undefined)

///////////////////////////// Short Brainstorming //////////////////////////////////
console.log("Zoha" || undefined || "Ayesha");
// "Zoha" is truthy → returns "Zoha"

console.log("Zoha" && null && "Ayesha");
// "Zoha" truthy → checks next → null falsy → returns null

console.log("Zoha" ?? null ?? "Ayesha");
// "Zoha" is not null/undefined → returns "Zoha"
