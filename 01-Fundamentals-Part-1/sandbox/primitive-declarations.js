// JavaScript has 7 primitives.
// Here's an example declaration for each.

let a = 1;
let b = "";
let c = true;
let d;
let e = null;
let f = Symbol();
let g = BigInt(1);

letters = [a, b, c, d, e, f, g];
for (letter in letters) {
  // Log each primitive's type via the typeof operator as an exercise.
  // n.b.: null returning as an object is purportedly a bug in JavaScript
  if (/[aeiouAEIOU]/i.test((typeof letters[letter])[0])) {
    console.log(String(letters[letter]) + ` is an ` + typeof letters[letter]);  
  }
  else {
    console.log(String(letters[letter]) + ` is a ` + typeof letters[letter]);
  }
}
