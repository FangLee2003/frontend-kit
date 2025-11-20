# JavaScript Cheatsheet

## Variables
```javascript
let mutable = "can change";
const immutable = "cannot reassign";
```

## Arrays
```javascript
let arr = [1, 2, 3];
arr.push(4); arr.pop(); // Add/remove end
arr.unshift(0); arr.shift(); // Add/remove start
arr.slice(1, 3); // Extract [2, 3]
arr.splice(2, 1, 'new'); // Remove & add at index

// Transform & filter
arr.map(x => x * 2); // [2, 4, 6]
arr.filter(x => x > 2); // [3]
arr.reduce((sum, x) => sum + x, 0); // 6
arr.find(x => x > 2); // 3
arr.includes(3); // true
arr.sort((a, b) => a - b); // Sort ascending

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
document.querySelector('.class');
document.querySelectorAll('div');

// Create & Modify
let el = document.createElement('div');
el.textContent = "Hello";
el.innerHTML = "<strong>Hello</strong>";
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('show');

// Insert
parent.appendChild(el);
parent.insertBefore(newEl, refEl);
el.remove();

// Events
el.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target);
});

// Event delegation - hiệu quả cho nhiều elements
document.addEventListener('click', e => {
  if(e.target.matches('.btn')) {
    console.log('Button clicked');
  }
});

// Form handling
let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData); // {email: 'a@b.com', ...}
  console.log(data);
});

// Render array to HTML (A301-5.4 pattern)
let items = [{name: 'A'}, {name: 'B'}];
let html = items.map(i => `<div>${i.name}</div>`).join('');
document.getElementById('list').innerHTML = html;
```

## Classes
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() { return `Hello, I'm ${this.name}`; }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

let student = new Student("Jane", 16, "10th");
```

## String Methods
```javascript
let str = "Hello World";
str.length; // 11
str.toLowerCase(); str.toUpperCase();
str.slice(0, 5); // "Hello"
str.split(" "); // ["Hello", "World"]
str.replace("World", "JS");
str.includes("World"); // true
str.trim(); // Remove whitespace
`Hello ${name}`; // Template literal
```

## LocalStorage
```javascript
localStorage.setItem('key', JSON.stringify(value));
let data = JSON.parse(localStorage.getItem('key'));
localStorage.removeItem('key');
```