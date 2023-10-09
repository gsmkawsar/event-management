<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>A: {}</i>
<i>Due to JavaScript's behavior, when you assign a value to an undeclared variable, it creates a global variable implicitly. So, in your code, greetign is treated as a global variable, and an empty object {} is assigned to it.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>C: "12"</i>
<i>The answer is indeed "12" because JavaScript performs type coercion in this case. When you use the + operator with a number and a string, JavaScript converts the number to a string and then concatenates the two strings together.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>A: ['🍕', '🍫', '🥑', '🍔']</i>
<i>You create an array food with four elements: ["🍕", "🍫", "🥑", "🍔"].

You create an object info with a property favoriteFood, which is initially assigned the value "🍕". This value is a reference to the first element of the food array.

You then modify the favoriteFood property of the info object to "🍝". This change only affects the info object and doesn't modify the food array.

When you log food to the console, it remains unchanged because you haven't made any changes to the food array itself. So, the output is still ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>B: Hi there, undefined</i>
<i>In JavaScript, when you define a function with parameters, such as function sayHi(name), those parameters act as placeholders for values that you can provide when you call the function.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>C: 3</i>
<i>because the code is using the forEach method to iterate through the nums array and count the number of truthy values. In JavaScript, a value is considered truthy</i>

</p>
</details>
