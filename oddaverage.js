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
  // console.log(odds);
  // bijor songkha gular jugfoler somosti

  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }

  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [42, 55, 60, 92, 7, 105, 6, 113];
const avg = oddAverage(numbers);
console.log("Average of the odd number is: ", avg);
