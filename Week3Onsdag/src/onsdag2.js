//Observe: no return type, no type on parameters
//Function Declaration
function add(n1, n2) {
    return n1 + n2;
}
//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}
//Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//The following questions might seem trivial, 
//but it's extremely important that you can answer (and understand) each, in order to do the JS-stuff we want to do this semester
//2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.

console.log(add(1, 2))     // What will this print? 3
console.log(add)          // What will it print and what does add represent? prints the function add
console.log(add(1, 2, 3)); // What will it print 3 - the last parameter is ignored
console.log(add(1));	  // What will it print prints an error, it requires two parameters	
console.log(cb(3, 3, add)); // What will it print - the message from cb with the two numbers added and 6 as a result
console.log(cb(4, 3, sub)); // What will it print - the message from cb with the two numbers added and 1 as a result
//console.log(cb(3, 3, add())); // What will it print (and what was the problem) - add should've been a reference instead of a function call
console.log(cb(3, "hh", add));// What will it print - will print the message from the function and concat 3 + hh = 3hh.

/* 
 3)  Error Handling
 7 will fail due to missing/wrong arguments. But it will fail runtime, not as with Java, at compile time.
 
 We can check arguments in JavaScript as sketched below and provide better errors by throwing our own exceptions:
 
 typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
 typeof callback === "function" //Will fail if callback is undefined or is not a function
 
 */
try {
    console.log(cb(3, 3, add()));
} catch (e) {
    console.log(e.name + ": " + e.message);
}
/*
 Rewrite the Callback function expression (cb)  to make a check for all its three required arguments, and throw an Error if any of the arguments do not match as explained here.
 
 Surround the call to the function with a try-catch block, and provide a more user-friendly error message if the function throws an error
 
 
 More Callbacks 
 Take another look at the function expression declared in cb, and the provided callbacks in 5+6. What we have in cb is a very generic function, that can take any callback that can do something with two numbers and return a value.
 
 4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
 5) Call cb, this time with an anonymous function that divides the first argument with the second
 */
function mul(n1, n2) {
    return n1 * n2;
}
console.log(cb(3, 3, mul));
function div(n1, n2) {
    return n1 / n2;
}
console.log(cb(3, 3, div));

/*
 Callbacks (with map, filter and forEach)
 We saw a simple example of a callback above. Let's get familiar with callbacks, using some of the array-type’s built-in methods.
 Getting comfortable with filter, map and forEach:
 
 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
 Use the forEach method to iterate and print (console.log) both the original and the new array.
 */
let boys = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

let arrayFilter = boys.filter(function lengthOfNames(name) {
    return name.length <= 3;
});
console.log(arrayFilter);
/*
 2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
 
 */
let bigboys = boys.map(function uppercase(a) {
    return a.toUpperCase();
});
console.log(bigboys);
/*
 We will continue with this exercise tomorrow when we start manipulating the browser's DOM
 
 3) Use map, join + just a little bit more to create a function, which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
 <ul>
 <li>Lars</li>
 <li>Peter</li>
 <li>Jan</li>
 <li>Ian</li>
 <ul>
*/
let listboys = boys.map(function (name){
    return "<li>" + name + "</li>";
});
let listboysAsString = "<ul>" + listboys.join("") + "</ul>";
console.log(listboysAsString);
/*
 The output above was shown with newlines for readability, but this is actually what we want (why):
 
 <ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li><ul>
 

 Tomorrow we will use DOM manipulation and place this into a “running” web-page.

4)  Given this JavaScript array
*/
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
/*
a) Use the filter filter function to get arrays with only:
Cars newer than 1999
Al  Volvo’s
All cars with a price below 5000

*/
let carYear = cars.filter(function(car){
    return car.year > 1999; 
});

let carMake = cars.filter(function(car){
    return car.make === "Volvo"; 
});
let carPrice = cars.filter(function(car){
    return car.price < 5000;
});
console.log(carYear);
console.log(carMake);
console.log(carPrice);
/*

4a)      Use map, join + just a little bit more to implement a function, that , given the cars array used above, 
will create, and return a string with valid SQL statements to insert the data into a table with matching column
 names (id, year, make, model, price) as sketched below:

INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );
...

 */
let carSql = cars.map(function(car){
    c = Object.values(car)
    return "INSERT INTO cars (id,year,make,model,price VALUES (" + c + ")";
});
console.log(carSql);

/*
 Asynchronous Callbacks
Most of the javascript callbacks you will be using will be asynchronous, in contrary to map, filter and forEach which are synchronous (MAKE SURE you understand the difference)

1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

*/
// The delay added means that the msg messages will be printed last
/*
2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
 */
// yup.