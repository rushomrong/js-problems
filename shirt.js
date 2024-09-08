/**
 * Shirt price --> 500
 * Pant price -- > 300
 * Shoe price --> 900
 */

//function created
function productQuantity(shirt, pant, shoe) {
  //declare the product per quantity price
  const perShirtPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 900;

  //multiply the value of per product
  const totalShirtPrice = shirt * perShirtPrice;
  const totalPantPrice = pant * perPantPrice;
  const totalShoePrice = shoe * perShoePrice;

  // calculate the total value price by addition

  const totalQuantity = totalShirtPrice + totalPantPrice + totalShoePrice;

  return totalQuantity;
}

//call the function

const quantity = productQuantity(2, 0, 5); // declare the quantity of the product that you need
console.log("Total quantity price is: ", quantity + "tk.");
