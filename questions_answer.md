1. let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer
Answer: (B) ReferenceError: greetign is not defined
Write your explanation here:
This error occurs because i trying to assign an empty object to a variable that has not been declared, resulting in a ReferenceError.

2.
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer
Answer: (C) "12"
Write your explanation here
In Js the + operator to add values and one or both of them are strings, JavaScript performs string concatenation.

3.
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer
Answer: (A) ['🍕', '🍫', '🥑', '🍔']

Write your explanation here: 
The code starts with an array called food and an object info with a favoriteFood property set to "🍕." Changing info.favoriteFood to "🍝" doesn't affect the original food array, which remains as "🍕," "🍫," "🥑," and "🍔." They're separate.


4.
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer
Answer: (B) Hi there, undefined
Write your explanation here
In the function sayHi, there's a parameter name which is not provided when calling the function sayHi(). As a result, the parameter name inside the function is undefined. 

5.
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer
Answer: (C) 3
Write your explanation here:
In this code, the forEach loop goes through each element in the nums array. It increments the count only for non-zero values (1, 2, and 3) because the condition if (num) checks for truthiness. So, the final count is 3, and that's what gets logged to the console.