// To calculate the average price of all the products
function avg(data) {
  let sum = 0;
  let { products } = data;
  for (let i = 0; i < products.length; i++) {
    sum += products[i]["price"];
  }
  return sum / products.length;
}

let result = avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(`The average price is $${result}`);
