const input = '1991';
console.log(Number(input) + 18);

console.log(Number('Sarah')); // NaN

console.log(String(23), 23); // '23' 23

// Type coercion
console.log('I am ' + 23 + ' years old.'); // I am 23 years old.
console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); // 23103
console.log('23' * '2'); // 46
console.log('23' > '18'); // true

let n = '1' + 1; // '11'
n = n - 1; // 10

// n.b.: + and - don't coerce the same way.
// + coerces numbers to strings, - coerces strings to numbers.