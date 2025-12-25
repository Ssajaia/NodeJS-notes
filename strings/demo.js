// string_functions_demo.js

// primitives vs object
const a = "JavaScript is fun";
const b = new String("JavaScript is fun");

console.log(a === b);              // false
console.log(typeof a);             // string
console.log(typeof b);             // object

// slice
const text = "Programming";
console.log(text.slice(3, 8));     // gramm

// searching
const phrase = "Node.js runs on V8 engine";

console.log(phrase.includes("V8"));        // true
console.log(phrase.startsWith("Node"));    // true
console.log(phrase.endsWith("engine"));    // true
console.log(phrase.indexOf("o"));           // first index
console.log(phrase.lastIndexOf("o"));       // last index

// replace
const dirty = "foo bar foo";
console.log(dirty.replace("foo", "baz"));      // baz bar foo
console.log(dirty.replaceAll("foo", "baz"));   // baz bar baz

// case conversion
const mixed = "HeLLo WoRLd";

console.log(mixed.toUpperCase());
console.log(mixed.toLowerCase());
console.log("i".toLocaleUpperCase("tr")); // İ

// trimming
const spaced = "   Node.js   ";
console.log(spaced.trim());
console.log(spaced.trimStart());
console.log(spaced.trimEnd());

// split / join
const csv = "red,green,blue";
const arr = csv.split(",");
console.log(arr);

const letters = ["x", "y", "z"];
console.log(letters.join("_"));

// immutability proof
let imm = "abc";
imm[1] = "x";
console.log(imm); // abc
