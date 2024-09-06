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

/**
 * Right formula to check
 * 1. those year that is not divisible by 100 and if the year is divisible by 4, then it will be a leap year
 */

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

//call the function
//const leapYear = isLeapYear(2028);
// console.log(leapYear);
const isLeap = isLeapYear2(2100);
const isLeap2 = isLeapYear2(1900);
const isLeap3 = isLeapYear2(1800);
const isLeap4 = isLeapYear2(2052);

console.log(isLeap, isLeap2, isLeap3, isLeap4);
