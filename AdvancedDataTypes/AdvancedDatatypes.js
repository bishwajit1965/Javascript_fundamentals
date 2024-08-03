// Dated: 03.08.2024
// Topics to cover Map, Set, weakMap, weakSet
// ==========================================

// Object
// Description: The fundamental data type used to store collections of data and more complex entities.
// Example:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return (
      this.firstName + " " + this.lastName + "is " + this.age + " years old."
    );
  },
};
console.log(person.fullName());

// Array
// Description: A special type of object used for storing ordered collections of items.
// Example:
const numbers = [1, 2, 3, 4, 5];

// Function
// Description: Functions are regular objects with callable functionality.
// Example:
function greet() {
  console.log("Hello, World!");
}
greet();

// Date
// Description: An objet to work dates and times.
// Example:
const now = new Date();
console.log("Now it is:", now);

// Map :
//Description: A collection of key - value pairs where keys can be any type.
// Example:
const map = new Map();
map.set("name", " Bishwajit Paul");
map.set("age", 60);
console.log("My name is :", map.get("name"));
console.log("My age is :", map.get("age"));

// Set
//Description: A collection of unique values.
// Example:
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
console.log("The set size is:", set.size);

// WeakMap
// Description: Similar to Map but keys must be objects, and they do not prevent garbage
// Example:
const weakmap = new WeakMap();
const obj = {};
weakmap.set(obj, "Car");
console.log("The object is:", weakmap.get(obj));

// WeakSet
// Description: Similar to Set but values must be objects and they do not prevent garbage
// Example:
const weakSet = new WeakSet();
const object = { name: "Book" };
weakSet.add(object);
console.log("The object is: ", object.name);

// Typed Arrays
// Description: Arrays for handling binary data (like buffers)
// Example:
const buffer = new ArrayBuffer(24);
const view = new Uint8Array(buffer);
view[0] = 255;
console.log("The array buffer result is: ", view);

// BigInteger
// Description: A numeric data type that can represent integers with arbitrary precision.
// Example:
const bigInteger = 1234567890123456789012345678901234567890n;
console.log("The big integer is: ", bigInteger);

// Symbol
// Description: A unique and immutable primitive value often used to identify object properties.
// Example:
const sym = Symbol("Bird");
console.log("The symbol is:", sym);
