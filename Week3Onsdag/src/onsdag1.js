console.log("a Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.")

let boys = ["Peter", "Lars", "Ole"];
console.log(boys);
let girls = ["Janne","Hanne","Sanne"];
console.log(girls);
console.log("b) Create a new array called all, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls.")
let all = boys.concat(girls);
console.log(all);
console.log("c) The array type has a cool method to reduce an array into a single string join() (you will love this method)")

let comma = all.join(",");
console.log(comma);

let hyphen = all.join("-");
console.log(hyphen);

console.log("The array type provides methods to add items to the start - unshift() and to the end push(..) of an array.");
console.log("d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners");
console.log(all.push("Lone","Gitte"));
console.log(all);

console.log("e)  Add the names Hans and Kurt to the start of the array");
console.log(all.unshift("Hans","Kurt"));
console.log(all);

console.log("The array type provides methods to remove items from the start shift() and from the end pop(..) of an array.");
console.log("f)  Remove the first name in the array (Hans)")

console.log(all.shift());

console.log("g)  Remove the last name from the array (Gitte)");

console.log(all.pop());

console.log("The array type provides a method splice(..) which changes the array by removing existing elements and/or adding new");
console.log("h) Remove Ole and Janne from the middle of the array");

console.log(all.splice(3,2));

console.log("The array type provides a method reverse() to reverse the elements of an array");
console.log("i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.");

console.log(all.reverse());

console.log("The array type provides a method sort() to sort the elements of an array");
console.log("j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.");

console.log(all.sort);

console.log("k) The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not");
console.log("Write a user-defined sort method to fix this problem.");

console.log(all);
all.sort(
    function(a, b) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    }
  );
console.log(all);

console.log("Array methods with callbacks (there are many)");
console.log("The array type provides a method map() which returns a new array of the return value from executing the callback on every array item.");
console.log("l) Convert all the names in the array to uppercase.");


function upper(a){
return a.toUpperCase;
}
let uppermap = all.map(function (x) {
    x.toUpperCase;
    return x;
})
console.log(uppermap);


console.log("The array type has a method filter() that creates a new array with all elements that pass the test implemented by the provided callback");
console.log("m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback). ");

function filteringByLetter(a){
    return a.charAt(0) === "l" || a.charAt(0) === "L";
}
console.log(all.filter(filteringByLetter));