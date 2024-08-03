// Dated: 03.08.2024
// Topics to cover Map, Set, weakMap, weakSet
// ==========================================

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
