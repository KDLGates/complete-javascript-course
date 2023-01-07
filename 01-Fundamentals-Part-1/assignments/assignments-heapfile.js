// LECTURE: Values and Variables
const country = `The United States of America`;
const continent = `North America`;
let population = 332;

console.log(
  `${country} is on ${continent} with a population of ${population} million.`
);

// LECTURE: Datatypes
const isIsland = false;
let language;

// LECTURE: let, const and var
language = "English";
population = 333;

// LECTURE: Basic Operators
let firstPopHalf = population / 2,
  secondPopHalf = firstPopHalf;
console.log(
  `The ${country} would have a first half of ${firstPopHalf} and a second half of ${secondPopHalf}.`
);

console.log(++population);
console.log(
  `${country} has a population greater than Finland?: ${population > 6}`
);
console.log(
  `${country} has a population less than average?: ${population < 33}`
);
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

function logAmountBelowAverage(population) {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
logAmountBelowAverage(13);
logAmountBelowAverage(130);
population = 334;
