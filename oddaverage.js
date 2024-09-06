/**
 * put odd numbers in an array
 */

function oddAverage(numbers) {
  //array
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      // console.log(number);
      odds.push(number); //pushing all the odd number in array
    }
  }
  console.log(odds);
}

const numbers = [42, 55, 60, 92, 7, 105, 6, 113];
const avg = oddAverage(numbers);
console.log("Average of the odd number is: ", numbers);
