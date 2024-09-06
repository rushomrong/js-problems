/**
 * Simple logic
 * year will be leap year if the year is divisible by 4
 */

function isLeapYear(year) {
  //check if year is divisible by 4 or not
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

//call the function
const leapYear = isLeapYear(2028);
console.log(leapYear);
