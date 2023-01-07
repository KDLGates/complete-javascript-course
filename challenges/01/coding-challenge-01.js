const massMark1 = 78;
const heightMark1 = 1.69;

const massJohn1 = 92;
const heightJohn1 = 1.95;

function BMI(mass, height) {
  return mass / height ** 2;
}

const markBMI1 = BMI(massMark1, heightMark1);
const johnBMI1 = BMI(massJohn1, heightJohn1);
const markHigherBMI1 =
  BMI(massMark1, heightMark1) > BMI(massJohn1, heightJohn1);

const massMark2 = 95;
const heightMark2 = 1.88;

const massJohn2 = 85;
const heightJohn2 = 1.76;

const markBMI2 = BMI(massMark2, heightMark2);
const johnBMI2 = BMI(massJohn2, heightJohn2);
const markHigherBMI2 =
  BMI(massMark2, heightMark2) > BMI(massJohn2, heightJohn2);

console.log("Data 1:");
console.log("Mark's BMI: " + markBMI1);
console.log("John's BMI: " + johnBMI1);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI1);

console.log("Data 2:");
console.log("Mark's BMI: " + markBMI2);
console.log("John's BMI: " + johnBMI2);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI2);
