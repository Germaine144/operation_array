// create a objects
const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];
// pushing to add new products "Desk" with a price of 150 and category "Furniture

products.push({name:"Desk" , price: 150 , category: "Furniture"});

console.log(products);

// find product watch

const watch = products.find(product => product.name === "Watch");
console.log(watch);

//Use map to create a new array of product names only.
const productNames = products.map(product => product.name);
console.log(productNames);

//Use filter to get all products that cost more than 100.
const productCost = products.filter(product => product.price >= 100);
console.log(productCost);

//Use forEach to display each product’s name and price in the format:
//Example: "Product: Laptop, Price: $800" (Log this in the console).
products.forEach(produc => {
    console.log(`Product: ${produc.name}, Price: $${produc.price}`);
});


