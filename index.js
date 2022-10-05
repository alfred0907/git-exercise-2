const { square, fahrenheit, rectangleArea, isPalindrome } = require('./lib');
const n = 5;
const celsius = 37;
const a = 5;
const b = 10;
const arrStrings = ['sample', 'Racecar'];

console.log(`The square of ${n} is ${square(n)}.`);
console.log(`${celsius}°C is equivalent to ${fahrenheit(celsius)}°F.`);
console.log(`Area of rectangle (${a}, ${b}) = ${rectangleArea(a,b)}.`);
for (let i = 0; i < arrStrings.length; i++) {
    if (isPalindrome(arrStrings[i])) {
        console.log(`${arrStrings[i]} is a Palindrome.`);
    } else {
        console.log(`${arrStrings[i]} is not a Palindrome.`);
    }
}
