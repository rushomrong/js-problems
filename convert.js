//12 inch 1 feet
function inchToFeet(inch) {
  //declare values
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction); // integer the value using parseInt
  const inchRemaining = inch % 2; // it will store the new value
  const result = feetNumber + " ft " + inchRemaining + " inch.";
  return result;
}

//call the function
const shuvoHeight = inchToFeet(75);
//console.log(shuvoHeight); //point decimal value will display
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);
