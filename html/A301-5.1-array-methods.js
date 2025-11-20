// A301-5.1: Array Methods (filter, map, reduce)

// Data array
var users = [
    { id: 1, first_name: "Eamon", last_name: "Harhoff", email: "eharhoff0@imageshack.us", 
      gender: "Male", age: 76, salary: 18888 },
    { id: 2, first_name: "Laney", last_name: "Whittam", email: "lwhittam1@issuu.com", gender: 
      "Female", age: 42, salary: 15018 },
    { id: 3, first_name: "Lynett", last_name: "Twinberrow", email: "ltwinberrow2@gov.uk", gender: 
      "Female", age: 99, salary: 13343 }
];

// 1. Filter: Male users under 40
console.log('=== FILTER: Male users under 40 ===');
const maleUnder40 = users.filter(user => user.gender === "Male" && user.age < 40);
console.log(maleUnder40);
console.log(`Found ${maleUnder40.length} male user(s) under 40 years old\n`);

// 2. Map: Full Names
console.log('=== MAP: Full Names ===');
const fullNames = users.map(user => `${user.first_name} ${user.last_name}`);
console.log(fullNames);
console.log(`Total users: ${fullNames.length}\n`);

// 3. Reduce: Average Age
console.log('=== REDUCE: Average Age ===');
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const avgAge = (totalAge / users.length).toFixed(2);
console.log(`Total Age: ${totalAge}`);
console.log(`Number of Users: ${users.length}`);
console.log(`Average Age: ${avgAge} years`);
