# JavaScript Cheatsheet

## Mục lục
1. [Variables](#variables)
2. [Arrays](#arrays)
3. [Objects](#objects)
4. [Functions](#functions)
5. [Control Flow](#control-flow)
6. [Async/Await & Fetch](#asyncawait--fetch)
7. [DOM Manipulation](#dom-manipulation)
8. [Classes](#classes)
9. [Window & BOM](#window--bom-browser-object-model)
10. [ES6+ Features](#es6-features)
11. [String Methods](#string-methods)
12. [LocalStorage](#localstorage)
13. [Map & Set](#map--set)
14. [JSON Methods](#json-methods)
15. [Math Methods](#math-methods)
16. [Number Methods](#number-methods)
17. [Timing Functions](#timing-functions)
18. [Console Methods](#console-methods)
19. [Date Methods](#date-methods)
20. [RegExp](#regexp-regular-expressions)

---

## Variables
```javascript
let mutable = "can change";
const immutable = "cannot reassign";
```

## Arrays
```javascript
let arr = [1, 2, 3];

// Add/Remove
arr.push(4); arr.pop(); // Add/remove end
arr.unshift(0); arr.shift(); // Add/remove start
arr.splice(2, 1, 'new'); // Remove & add at index
arr.slice(1, 3); // Extract [2, 3] (doesn't modify original)

// Search
arr.indexOf(3); // 2 (index of first occurrence)
arr.lastIndexOf(3); // Last occurrence index
arr.includes(3); // true
arr.find(x => x > 2); // First element > 2
arr.findIndex(x => x > 2); // Index of first element > 2

// Transform
arr.map(x => x * 2); // [2, 4, 6]
arr.filter(x => x > 2); // [3]
arr.reduce((sum, x) => sum + x, 0); // 6
arr.forEach((item, index) => console.log(item, index));

// Sort & Reverse
arr.sort((a, b) => a - b); // Sort ascending
arr.sort((a, b) => b - a); // Sort descending
arr.reverse(); // Reverse in place

// Join & Split
arr.join(', '); // "1, 2, 3"
'a,b,c'.split(','); // ['a', 'b', 'c']

// Check & Test
arr.every(x => x > 0); // true if all pass
arr.some(x => x > 2); // true if at least one passes
Array.isArray(arr); // true

// Flat & Concat
[[1, 2], [3, 4]].flat(); // [1, 2, 3, 4]
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

// Fill
arr.fill(0); // Fill all with 0
arr.fill(0, 2, 4); // Fill index 2-4 with 0
Array(5).fill(0); // [0, 0, 0, 0, 0]

// From & Of
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from({length: 3}, (_, i) => i); // [0, 1, 2]
Array.of(1, 2, 3); // [1, 2, 3]

// Combined filtering (A301-5.4 pattern)
let items = [{name: 'A', category: 'x'}, {name: 'B', category: 'y'}];
let filtered = items.filter(i => i.category === 'x' && i.name.includes('A'));
```

## Objects
```javascript
let obj = { name: "John", age: 30 };
obj.name; obj["age"]; // Access

Object.keys(obj); // ["name", "age"]
Object.values(obj); // ["John", 30]
Object.entries(obj); // [["name", "John"], ["age", 30]]

let {name, age} = obj; // Destructure
let extended = {...obj, city: "NYC"}; // Spread
```

## Functions
```javascript
function regular(a, b = "default") { return a + b; }
const arrow = (x, y) => x + y;
const single = x => x * 2;

// IIFE - Immediately Invoked Function Expression (A301-5.4 pattern)
(function() {
  const private = 'hidden';
  console.log('Runs immediately');
})();

// Rest & Spread
function rest(first, ...more) { console.log(first, more); }
let args = [1, 2, 3];
regular(...args);
```

## Control Flow
```javascript
if (condition) { } else if (other) { } else { }
let result = condition ? "yes" : "no"; // Ternary

for (let i = 0; i < 5; i++) { }
for (let item of array) { }
for (let key in object) { }

while (condition) { }

try { } catch (error) { console.error(error); } finally { }
```

## Async/Await & Fetch
```javascript
// Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
promise.then(result => console.log(result)).catch(err => console.error(err));

// Async/Await
async function fetchData() {
  try {
    let response = await fetch('/api/data');
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Fetch API
fetch('/api/users')
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

fetch('/api/users', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({name: 'John'})
});
```

## DOM Manipulation
```javascript
// Select
document.getElementById('id');
document.getElementsByClassName('class'); // HTMLCollection (live)
document.getElementsByTagName('div'); // HTMLCollection (live)
document.querySelector('.class'); // First match
document.querySelectorAll('div'); // NodeList (static)

// Create & Modify
let el = document.createElement('div');
el.textContent = "Hello"; // Text only (safe from XSS)
el.innerText = "Hello"; // Respects CSS styling
el.innerHTML = "<strong>Hello</strong>"; // Parse HTML (XSS risk)
el.setAttribute('data-id', '123');
el.getAttribute('data-id');
el.removeAttribute('data-id');
el.id = 'myId';
el.className = 'myClass';
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('show');
el.classList.contains('active'); // true/false
el.classList.replace('old', 'new');

// Style
el.style.color = 'red';
el.style.backgroundColor = 'blue';
el.style.cssText = 'color: red; background: blue';
getComputedStyle(el).color; // Get actual computed style

// Data attributes
el.dataset.userId = '123'; // data-user-id="123"
el.dataset.userId; // "123"

// Insert & Remove
parent.appendChild(el); // Add as last child
parent.insertBefore(newEl, refEl); // Insert before reference
parent.prepend(el); // Add as first child
parent.append(el1, el2); // Add multiple at end
el.insertAdjacentHTML('beforebegin', '<p>Before</p>');
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
el.remove(); // Remove self
parent.removeChild(el); // Remove child
el.replaceWith(newEl); // Replace element

// Traversing
el.parentElement; el.parentNode;
el.children; // HTMLCollection of child elements
el.childNodes; // NodeList (includes text nodes)
el.firstElementChild; el.lastElementChild;
el.nextElementSibling; el.previousElementSibling;
el.closest('.parent-class'); // Find nearest ancestor matching selector

// Clone
let clone = el.cloneNode(true); // true = deep clone (with children)

// Events
el.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default action
  e.stopPropagation(); // Stop bubbling
  console.log(e.target); // Element that triggered event
  console.log(e.currentTarget); // Element listener is attached to
  console.log(e.type); // 'click'
});
el.removeEventListener('click', handler);

// Event delegation - efficient for multiple elements
document.addEventListener('click', e => {
  if(e.target.matches('.btn')) {
    console.log('Button clicked');
  }
});

// Common events: click, dblclick, mouseenter, mouseleave, mouseover, mouseout
// focus, blur, input, change, submit, keydown, keyup, keypress, load, DOMContentLoaded

// Form handling
let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData); // {email: 'a@b.com', ...}
  console.log(data);
  form.reset(); // Clear form
});

// Input validation
let input = document.querySelector('input');
input.addEventListener('input', e => {
  console.log(e.target.value);
  input.setCustomValidity('Invalid input'); // Custom error
  input.reportValidity(); // Show error
});

// Render array to HTML (A301-5.4 pattern)
let items = [{name: 'A'}, {name: 'B'}];
let html = items.map(i => `<div>${i.name}</div>`).join('');
document.getElementById('list').innerHTML = html;

// Scroll
window.scrollTo(0, 0); // Scroll to top
window.scrollTo({top: 0, behavior: 'smooth'});
el.scrollIntoView({behavior: 'smooth', block: 'center'});

// Dimensions & Position
el.offsetWidth; el.offsetHeight; // Width/height including border
el.clientWidth; el.clientHeight; // Width/height excluding border
el.scrollWidth; el.scrollHeight; // Full scrollable width/height
el.offsetTop; el.offsetLeft; // Position relative to offsetParent
el.getBoundingClientRect(); // {top, left, width, height, ...}

// Focus
el.focus();
el.blur();
document.activeElement; // Currently focused element
```

## Classes
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() { return `Hello, I'm ${this.name}`; }
  
  // Getter & Setter
  get info() { return `${this.name}, ${this.age}`; }
  set info(value) { [this.name, this.age] = value.split(','); }
  
  // Static method (called on class, not instance)
  static compare(a, b) { return a.age - b.age; }
  
  // Private fields (ES2022)
  #privateField = 'secret';
  getPrivate() { return this.#privateField; }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call parent constructor
    this.grade = grade;
  }
  
  // Override method
  greet() { return `${super.greet()}, grade ${this.grade}`; }
}

let student = new Student("Jane", 16, "10th");
Person.compare(person1, person2); // Static method
```

## Window & BOM (Browser Object Model)
```javascript
// Window properties
window.innerWidth; window.innerHeight; // Viewport size (excluding scrollbar)
window.outerWidth; window.outerHeight; // Browser window size
window.scrollX; window.scrollY; // Scroll position
window.pageXOffset; window.pageYOffset; // Same as scrollX/Y

// Window methods
window.open('url', 'name', 'width=500,height=400'); // Open new window
window.close(); // Close current window
window.moveTo(x, y); // Move window
window.resizeTo(width, height); // Resize window
window.print(); // Print dialog

// Screen
screen.width; screen.height; // Screen resolution
screen.availWidth; screen.availHeight; // Available space (minus taskbar)
screen.colorDepth; // Bits per pixel

// Location (URL)
location.href; // Full URL
location.protocol; // "https:"
location.host; // "www.example.com:8080"
location.hostname; // "www.example.com"
location.port; // "8080"
location.pathname; // "/path/page.html"
location.search; // "?id=123&name=test"
location.hash; // "#section"
location.assign('url'); // Navigate to URL
location.replace('url'); // Navigate (no history)
location.reload(); // Reload page
location.reload(true); // Force reload from server

// History
history.back(); // Go back
history.forward(); // Go forward
history.go(-2); // Go back 2 pages
history.pushState({page: 1}, 'title', '/page1'); // Add history entry
history.replaceState({page: 2}, 'title', '/page2'); // Replace current
window.addEventListener('popstate', e => console.log(e.state));

// Navigator (browser info)
navigator.userAgent; // Browser info string
navigator.language; // "en-US"
navigator.onLine; // true if online
navigator.cookieEnabled; // true if cookies enabled
navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));
navigator.clipboard.writeText('text'); // Copy to clipboard
navigator.clipboard.readText().then(text => console.log(text));

// URL API
let url = new URL('https://example.com/path?id=123#section');
url.protocol; url.hostname; url.pathname; url.search; url.hash;
url.searchParams.get('id'); // "123"
url.searchParams.set('name', 'test');
url.searchParams.append('tag', 'js');
url.searchParams.delete('id');
url.searchParams.toString(); // "name=test&tag=js"

// URLSearchParams (query strings)
let params = new URLSearchParams('?id=123&name=test');
params.get('id'); // "123"
params.has('name'); // true
params.getAll('tag'); // Get all values for key
for(let [key, value] of params) { console.log(key, value); }

// Cookies
document.cookie = "user=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
document.cookie.split('; ').find(row => row.startsWith('user=')); // Read
```

## ES6+ Features
```javascript
// Destructuring
let [a, b, c] = [1, 2, 3];
let [first, ...rest] = [1, 2, 3, 4]; // first=1, rest=[2,3,4]
let {name, age} = {name: 'John', age: 30};
let {name: userName, age: userAge} = obj; // Rename
let {name = 'Unknown'} = {}; // Default value

// Spread operator
let arr2 = [...arr1]; // Copy array
let obj2 = {...obj1}; // Copy object
let merged = [...arr1, ...arr2]; // Merge arrays
let combined = {...obj1, ...obj2}; // Merge objects
Math.max(...[1, 2, 3]); // Apply to function

// Rest parameters
function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }
sum(1, 2, 3, 4); // 10

// Default parameters
function greet(name = 'Guest', msg = 'Hello') { return `${msg} ${name}`; }

// Arrow functions
const add = (a, b) => a + b;
const square = x => x * x; // Single param, no parentheses
const log = () => console.log('Hi'); // No params
const obj = x => ({value: x}); // Return object (wrap in parentheses)
// Note: Arrow functions don't have their own 'this'

// Template literals
let name = 'John';
let msg = `Hello ${name}!`; // String interpolation
let multi = `Line 1
Line 2`; // Multi-line
let expr = `2 + 2 = ${2 + 2}`; // Expressions

// Enhanced object literals
let x = 10, y = 20;
let obj = {
  x, y, // Shorthand: x: x, y: y
  method() { return this.x; }, // Method shorthand
  ['computed' + 'Key']: 'value' // Computed property name
};

// Optional chaining
obj?.prop; // undefined if obj is null/undefined
obj?.method?.(); // Call method if exists
arr?.[0]; // Array access

// Nullish coalescing
let value = null ?? 'default'; // "default" (only null/undefined, not 0 or '')
let count = 0 || 10; // 10 (|| treats 0 as falsy)
let count2 = 0 ?? 10; // 0 (?? only null/undefined)

// Logical assignment
x ||= 10; // x = x || 10
x &&= 10; // x = x && 10
x ??= 10; // x = x ?? 10

// Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
promise.then(result => console.log(result))
       .catch(err => console.error(err))
       .finally(() => console.log('Cleanup'));

// Promise methods
Promise.all([p1, p2, p3]); // Wait for all (fails if any fails)
Promise.allSettled([p1, p2, p3]); // Wait for all (returns all results)
Promise.race([p1, p2, p3]); // First to complete
Promise.any([p1, p2, p3]); // First to succeed

// Async/Await
async function fetchData() {
  try {
    let response = await fetch('/api/data');
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Modules (ES6 import/export)
// export
export const name = 'John';
export function greet() { }
export default class Person { }

// import
import {name, greet} from './module.js';
import Person from './module.js'; // Default import
import * as utils from './utils.js'; // Import all
import {name as userName} from './module.js'; // Rename

// Symbol - unique identifier
let sym1 = Symbol('description');
let sym2 = Symbol('description');
sym1 === sym2; // false (always unique)
let obj = { [sym1]: 'value' }; // Use as object key

// Generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
let gen = generator();
gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
for(let val of generator()) { console.log(val); } // 1, 2, 3

// Proxy - intercept object operations
let handler = {
  get(target, prop) { return prop in target ? target[prop] : 'Not found'; },
  set(target, prop, value) { target[prop] = value; return true; }
};
let proxy = new Proxy({}, handler);
proxy.name = 'John'; // Triggers set
console.log(proxy.name); // Triggers get

// Reflect - programmatic object operations
Reflect.has(obj, 'prop'); // Same as 'prop' in obj
Reflect.get(obj, 'prop'); // Same as obj.prop
Reflect.set(obj, 'prop', value); // Same as obj.prop = value
Reflect.deleteProperty(obj, 'prop'); // Same as delete obj.prop
```

## String Methods
```javascript
let str = "Hello World";

// Basic info
str.length; // 11
str.charAt(0); // "H"
str.charCodeAt(0); // 72 (Unicode)
str[0]; // "H" (array-like access)

// Case
str.toLowerCase(); str.toUpperCase();
str.toLocaleLowerCase(); str.toLocaleUpperCase();

// Extract
str.slice(0, 5); // "Hello" (supports negative index)
str.substring(0, 5); // "Hello" (no negative)
str.substr(0, 5); // "Hello" (deprecated)

// Search
str.indexOf("World"); // 6
str.lastIndexOf("l"); // 9
str.search(/world/i); // 6 (with regex)
str.includes("World"); // true
str.startsWith("Hello"); // true
str.endsWith("World"); // true

// Replace
str.replace("World", "JS"); // "Hello JS"
str.replaceAll("l", "L"); // "HeLLo WorLd"
str.replace(/o/g, "0"); // "Hell0 W0rld" (regex global)

// Split & Join
str.split(" "); // ["Hello", "World"]
str.split(""); // ['H', 'e', 'l', ...] (split each char)
['a', 'b'].join('-'); // "a-b"

// Trim
str.trim(); // Remove whitespace both ends
str.trimStart(); str.trimLeft(); // Remove left
str.trimEnd(); str.trimRight(); // Remove right

// Pad
"5".padStart(3, '0'); // "005"
"5".padEnd(3, '0'); // "500"

// Repeat & Concat
"ha".repeat(3); // "hahaha"
str.concat(" 2024"); // "Hello World 2024"

// Match
str.match(/l/g); // ["l", "l", "l"]
str.matchAll(/l/g); // Iterator

// Template literal
`Hello ${name}`; // Template literal
String.raw`C:\temp\new`; // "C:\temp\new" (no escape)
```

## LocalStorage
```javascript
localStorage.setItem('key', JSON.stringify(value));
let data = JSON.parse(localStorage.getItem('key'));
localStorage.removeItem('key');
localStorage.clear(); // Clear all
localStorage.length; // Number of items
localStorage.key(0); // Get key by index

// sessionStorage (cleared when tab closes)
sessionStorage.setItem('temp', 'data');
sessionStorage.getItem('temp');
```

## Map & Set
```javascript
// Map - key-value pairs (any type as key)
let map = new Map();
map.set('name', 'John');
map.set(1, 'number key');
map.set({id: 1}, 'object key');
map.get('name'); // "John"
map.has('name'); // true
map.delete('name');
map.size; // 2
map.clear(); // Remove all

// Iterate Map
for(let [key, value] of map) { console.log(key, value); }
map.forEach((value, key) => console.log(key, value));
Array.from(map.keys()); // Get all keys
Array.from(map.values()); // Get all values
Array.from(map.entries()); // Get all [key, value]

// Create from array
let map2 = new Map([['a', 1], ['b', 2]]);

// Set - unique values only
let set = new Set([1, 2, 3, 3]); // Set {1, 2, 3}
set.add(4);
set.has(1); // true
set.delete(1);
set.size; // 3
set.clear();

// Iterate Set
for(let value of set) { console.log(value); }
set.forEach(value => console.log(value));
Array.from(set); // Convert to array
[...set]; // Spread to array

// Set operations
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);
// Union: [...new Set([...a, ...b])]
// Intersection: [...a].filter(x => b.has(x))
// Difference: [...a].filter(x => !b.has(x))
```

## JSON Methods
```javascript
// Parse: JSON string → JS object
let obj = JSON.parse('{"name":"John","age":30}');

// Stringify: JS object → JSON string
let json = JSON.stringify({name: 'John', age: 30});
let pretty = JSON.stringify(obj, null, 2); // Pretty print with 2 spaces

// Stringify with replacer
JSON.stringify(obj, ['name', 'age']); // Only include these keys
JSON.stringify(obj, (key, value) => typeof value === 'string' ? value.toUpperCase() : value);

// Parse with reviver
JSON.parse(json, (key, value) => key === 'date' ? new Date(value) : value);
```

## Math Methods
```javascript
// Constants
Math.PI; // 3.141592653589793
Math.E; // 2.718281828459045

// Rounding
Math.round(4.7); // 5
Math.ceil(4.1); // 5 (round up)
Math.floor(4.9); // 4 (round down)
Math.trunc(4.9); // 4 (remove decimal)

// Random
Math.random(); // 0 to 1 (exclusive)
Math.floor(Math.random() * 10); // 0-9
Math.floor(Math.random() * (max - min + 1)) + min; // Random between min-max

// Min/Max
Math.min(1, 2, 3); // 1
Math.max(1, 2, 3); // 3
Math.min(...[1, 2, 3]); // Use spread for arrays

// Power & Root
Math.pow(2, 3); // 8
2 ** 3; // 8 (exponentiation operator)
Math.sqrt(16); // 4
Math.cbrt(27); // 3 (cube root)

// Abs & Sign
Math.abs(-5); // 5
Math.sign(-5); // -1 (1 for positive, 0 for zero, -1 for negative)

// Trigonometry
Math.sin(Math.PI / 2); // 1
Math.cos(0); // 1
Math.tan(Math.PI / 4); // 1
Math.asin(1); // π/2
Math.atan2(y, x); // Angle in radians

// Logarithms
Math.log(Math.E); // 1 (natural log)
Math.log10(100); // 2 (base 10)
Math.log2(8); // 3 (base 2)
Math.exp(1); // e^1
```

## Number Methods
```javascript
// Parse
parseInt('123'); // 123
parseInt('123.45'); // 123
parseInt('1010', 2); // 10 (binary)
parseFloat('123.45'); // 123.45
Number('123'); // 123 (stricter than parseInt)

// Check
Number.isNaN(NaN); // true
Number.isFinite(123); // true
Number.isInteger(123); // true
Number.isSafeInteger(123); // true

// Format
let num = 123.456;
num.toFixed(2); // "123.46" (string)
num.toPrecision(4); // "123.5" (4 significant digits)
num.toExponential(2); // "1.23e+2"
num.toString(); // "123.456"
num.toString(2); // "1111011" (binary)
num.toLocaleString('vi-VN'); // "123,456"

// Constants
Number.MAX_VALUE; // Largest number
Number.MIN_VALUE; // Smallest positive number
Number.MAX_SAFE_INTEGER; // 2^53 - 1
Number.MIN_SAFE_INTEGER; // -(2^53 - 1)
Number.POSITIVE_INFINITY; Number.NEGATIVE_INFINITY;
Number.NaN;
```

## Timing Functions
```javascript
// setTimeout - run once after delay
let timeoutId = setTimeout(() => {
  console.log('After 2 seconds');
}, 2000);
clearTimeout(timeoutId); // Cancel

// setInterval - run repeatedly
let intervalId = setInterval(() => {
  console.log('Every 2 seconds');
}, 2000);
clearInterval(intervalId); // Stop

// requestAnimationFrame - for animations (60fps)
function animate() {
  // Animation code
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

## Console Methods
```javascript
console.log('Normal message');
console.error('Error message');
console.warn('Warning message');
console.info('Info message');

// Formatting
console.log('Hello %s', 'World'); // String
console.log('Number: %d', 123); // Number
console.log('Object: %o', {a: 1}); // Object

// Grouping
console.group('Group');
console.log('Inside group');
console.groupEnd();

// Table
console.table([{name: 'John', age: 30}, {name: 'Jane', age: 25}]);

// Timing
console.time('timer');
// ... code ...
console.timeEnd('timer'); // Logs elapsed time

// Count
console.count('clicks'); // clicks: 1
console.count('clicks'); // clicks: 2
console.countReset('clicks');

// Assert
console.assert(1 === 2, 'This will show if false');

// Clear & Trace
console.clear(); // Clear console
console.trace(); // Stack trace
```

## Date Methods
```javascript
// Create Date
new Date(); // Current date/time
new Date('2024-12-25'); // From string
new Date(2024, 11, 25); // Year, month (0-11), day
new Date(2024, 11, 25, 10, 30, 0); // With time
new Date(1703505600000); // From timestamp (milliseconds)

// Get methods
let d = new Date();
d.getFullYear(); // 2024 (4 digits)
d.getMonth(); // 0-11 (0 = January)
d.getDate(); // 1-31 (day of month)
d.getDay(); // 0-6 (0 = Sunday)
d.getHours(); // 0-23
d.getMinutes(); // 0-59
d.getSeconds(); // 0-59
d.getMilliseconds(); // 0-999
d.getTime(); // Milliseconds since 1970
Date.now(); // Current timestamp (static method)

// Set methods
d.setFullYear(2025);
d.setMonth(0); // January
d.setDate(15);
d.setHours(10);
d.setMinutes(30);
d.setSeconds(45);
d.setMilliseconds(500);
d.setTime(1703505600000); // Set by timestamp

// UTC methods (same as above but UTC)
d.getUTCFullYear(); d.getUTCMonth(); d.getUTCDate();
d.setUTCFullYear(2025); d.setUTCMonth(0);

// Format/Convert
d.toString(); // "Wed Dec 25 2024 10:30:00 GMT+0700"
d.toDateString(); // "Wed Dec 25 2024"
d.toTimeString(); // "10:30:00 GMT+0700"
d.toISOString(); // "2024-12-25T03:30:00.000Z" (UTC)
d.toLocaleDateString(); // "12/25/2024" (locale format)
d.toLocaleTimeString(); // "10:30:00 AM"
d.toLocaleString(); // Date + time in locale format
d.toJSON(); // Same as toISOString()
d.valueOf(); // Same as getTime()

// Locale formatting
d.toLocaleDateString('vi-VN'); // "25/12/2024"
d.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
// "Wednesday, December 25, 2024"

// Timezone
d.getTimezoneOffset(); // Minutes difference from UTC (-420 for UTC+7)

// Date comparison
date1 > date2; // true/false
date1.getTime() === date2.getTime(); // Compare exact time

// Date arithmetic
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

// Days between dates
let diff = Math.abs(date2 - date1); // Milliseconds
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
```

## RegExp (Regular Expressions)
```javascript
// Create RegExp
let re1 = /pattern/flags;
let re2 = new RegExp('pattern', 'flags');

// Flags
// g - global (find all matches)
// i - case-insensitive
// m - multiline (^ and $ match line breaks)
// s - dotAll (. matches newlines)
// u - unicode
// y - sticky (match at exact position)

// RegExp methods
let str = "Hello World 123";
let pattern = /world/i;

pattern.test(str); // true/false (check if match exists)
pattern.exec(str); // ["World"] (returns match array or null)
pattern.exec(str); // With 'g' flag, continues from last match

// String methods with RegExp
str.match(/\d+/g); // ["123"] (all matches)
str.match(/(\w+)\s(\w+)/); // ["Hello World", "Hello", "World"] (with groups)
str.matchAll(/\w+/g); // Iterator of all matches
str.search(/world/i); // 6 (index of first match, -1 if not found)
str.replace(/world/i, 'JS'); // "Hello JS 123"
str.replaceAll(/o/g, '0'); // "Hell0 W0rld 123"
str.split(/\s/); // ["Hello", "World", "123"] (split by whitespace)

// RegExp properties
pattern.source; // "world" (pattern string)
pattern.flags; // "i" (flags string)
pattern.global; // false
pattern.ignoreCase; // true
pattern.multiline; // false
pattern.lastIndex; // 0 (position for next match with 'g' flag)

// Common patterns
/\d+/; // One or more digits
/\w+/; // One or more word characters [a-zA-Z0-9_]
/\s+/; // One or more whitespace
/[a-z]/i; // Any letter (case-insensitive)
/^start/; // Start of string
/end$/; // End of string
/./; // Any character except newline
/a|b/; // a OR b
/(abc)+/; // Group with quantifier
/[^0-9]/; // NOT digits
/a{2,4}/; // a repeated 2 to 4 times
/a*/; // 0 or more
/a+/; // 1 or more
/a?/; // 0 or 1
/(?=abc)/; // Positive lookahead
/(?!abc)/; // Negative lookahead

// Escape special characters
/\./; // Literal dot
/\*/; // Literal asterisk
/\[/; // Literal bracket
// Special chars: . * + ? ^ $ { } ( ) | [ ] \

// Practical examples
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phonePattern = /^(\+84|84|0)[3|5|7|8|9]\d{8}$/;
let urlPattern = /^https?:\/\/.+/;
let hexColorPattern = /^#[0-9A-Fa-f]{6}$/;
let ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

// Named groups (ES2018)
let datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let match = "2024-12-25".match(datePattern);
match.groups.year; // "2024"
match.groups.month; // "12"

// Replace with function
str.replace(/\w+/g, (match) => match.toUpperCase()); // "HELLO WORLD 123"
str.replace(/(\w+)\s(\w+)/, (match, p1, p2) => `${p2} ${p1}`); // "World Hello 123"
```