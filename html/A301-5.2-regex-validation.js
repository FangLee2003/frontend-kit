// A301-5.2: Regular Expression Validation Functions

// 1. Validate Credit Card (16 digits only)
function validateCreditCard(cardNumber) {
    const regex = /^\d{16}$/;
    return regex.test(cardNumber);
}

// 2. Validate if value is a number (integer or decimal)
function isNumber(value) {
    const regex = /^-?\d+(\.\d+)?$/;
    return regex.test(value);
}

// 3. Validate Email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// 4. Validate URL (http://, https://, or www.)
function validateURL(url) {
    const regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/.*)?$/;
    return regex.test(url);
}

// 5. Validate Alphanumeric (letters and numbers only, no special characters)
function validateAlphanumeric(str) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(str);
}

// === TEST CASES ===

console.log('=== Credit Card Validation ===');
console.log('1234567890123456:', validateCreditCard('1234567890123456')); // true
console.log('4532015112830366:', validateCreditCard('4532015112830366')); // true
console.log('123456:', validateCreditCard('123456')); // false
console.log('12345678901234567:', validateCreditCard('12345678901234567')); // false (17 digits)
console.log('');

console.log('=== Number Validation ===');
console.log('123:', isNumber('123')); // true
console.log('-45.67:', isNumber('-45.67')); // true
console.log('3.14:', isNumber('3.14')); // true
console.log('abc:', isNumber('abc')); // false
console.log('12.34.56:', isNumber('12.34.56')); // false
console.log('');

console.log('=== Email Validation ===');
console.log('user@example.com:', validateEmail('user@example.com')); // true
console.log('test.name@domain.co.uk:', validateEmail('test.name@domain.co.uk')); // true
console.log('invalid@:', validateEmail('invalid@')); // false
console.log('@example.com:', validateEmail('@example.com')); // false
console.log('no-at-sign.com:', validateEmail('no-at-sign.com')); // false
console.log('');

console.log('=== URL Validation ===');
console.log('http://www.w3schools.com:', validateURL('http://www.w3schools.com')); // true
console.log('https://www.example.com:', validateURL('https://www.example.com')); // true
console.log('www.google.com:', validateURL('www.google.com')); // true
console.log('example.com:', validateURL('example.com')); // true
console.log('invalid:', validateURL('invalid')); // false
console.log('');

console.log('=== Alphanumeric Validation ===');
console.log('User123:', validateAlphanumeric('User123')); // true
console.log('Password2024:', validateAlphanumeric('Password2024')); // true
console.log('ABC123xyz:', validateAlphanumeric('ABC123xyz')); // true
console.log('User@123:', validateAlphanumeric('User@123')); // false
console.log('Hello!:', validateAlphanumeric('Hello!')); // false
console.log('Name 456:', validateAlphanumeric('Name 456')); // false (space)
