//swap the value

let a = 5;
let b = 9;

console.log(a, b);

const temp = a; // set a value to temp variable
a = b;
b = temp;

console.log(a, b);

/// using array

let x = 7;
let y = 10;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
