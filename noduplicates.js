// find the unique ones from the duplicates

//declaring variables
const names = [
  "Rusho",
  "Bishal",
  "Luxmi",
  "Bishal",
  "James",
  "Tomal",
  "Rusho",
  "Tomal",
];
const numbers = [1, 5, 8, 55, 90, 55, 30, 2, 5, 7, 66, 90, 6];

// create function
function noDuplicates(array) {
  //blank array to store data
  const unique = [];
  //condition if items of array is false
  for (const items of array) {
    if (unique.includes(items) === false) {
      unique.push(items); // push the unique names in to the black array
    }
  }
  return unique;
}

//call the function
const uniqueArray = noDuplicates(names);
console.log(uniqueArray);
