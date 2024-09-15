//1.
//STRING TO NUMBER:
//Create a variable named price and assign it the string value "200".
let price = "200";
//parseInt()
price = parseInt(price);
console.log(price)//200
//Number()
price = Number(price);
console.log(price)//200
//+operator
price = +price;
console.log(price)//200
console.log(typeof price);


//2.
//NUMBER TO STRING:
//Create a variable named distance and assign it the number value 150.
let distance = 150;

//toString()
distance = distance.toString();
console.log(distance);//150

//String()
distance = String(distance);
console.log(distance);//150
console.log(typeof distance);


//3.
//STRING TO DECIMAL:
//Create a variable named weight and assign it the string value "72.5"
let weight = "72.5";

//parseFloat()
weight = parseFloat(weight);

console.log(weight);//72.5
console.log(typeof weight);
