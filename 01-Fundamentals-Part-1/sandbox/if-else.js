const drivingAge = 18;
const ageSarah = 19;

function isOldEnough(age) {
  if (age >= drivingAge) {
    return true;
  } else {
    return false;
  }
}

if (isOldEnough(ageSarah)) {
  console.log("Driving license for Sarah, woo hoo! 🚗");
} else {
  console.log("Sarah, you're too young to drive. 🚫");
  console.log(`Try again in ${drivingAge - ageSarah} year(s). 😭`);
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);