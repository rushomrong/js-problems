/**
 * put odd numbers in an array
 */

function oddAverage(numbers) {
  for (const number of numbers) {
    if (number % 2 === 1) {
      console.log(number);
    }
  }
}

const numbers = [42, 55, 60, 92, 7, 105, 6, 113];
console.log(numbers);
