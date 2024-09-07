// math functions
// find a lowest or minimum value

const min = Math.min(5, 40, 10, 35, 100, -99);
console.log(min);

// find a maximum or heighest value
const max = Math.max(5, 40, 10, 35, 100, -99);
console.log(max);

/// find the gap difference between the numbers
console.log(Math.abs(20 - 15));
//downgrade the numbers value using floor. It will round the numbers
console.log(Math.floor(2.999));
//Increase the value of the numbers of point values using ceil. It will round the numbers
console.log(Math.ceil(2.9995));

/// it will randomize all the numbers or array.  We can use it for making a lottery winner
const rand = Math.round(Math.random() * 10);
console.log(rand);
