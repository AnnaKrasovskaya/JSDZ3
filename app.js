//Задание 1
// let n = 20;
// if (n >= 0 && n <= 100) {
//   console.log(n);
// } else {
//   console.log("Переменная не в диапазоне чисел от 0 до 100");
// }

// Задание 2
// const engineers = {
//   Den: 1000,
//   Matt: 5000,
//   Steve: 2000,
// };
// for (const key in engineers) {
//   console.log(`Заработная плата ${key} составляет ${engineers[key]} `);
// }

// Задание 3
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//   i % 2 === 1 ? console.log(arr[i]) : "";
// }

// Задание 4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (let i = 0; i < numbers.length; i++)
//   console.log(`Индексу ${i} соответствует число numbers ${numbers[i]}`);

// Задание 5
// let questions = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//   },
//   {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0,
//   },
// ];
// for (let element of questions) {
//   element.usersAnswer = null;
// }
// console.log(questions);

// Задание 6
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let sum = 0;
// let max = 42;

// for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);

// for (let element of numbers) {
//   console.log(element);
// }

// for (let element of numbers) {
//   sum += element;
// }
// console.log(sum);

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] % 2 === 0 ? (sum += numbers[i]) : "";
// }
// console.log(sum);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// let indexes = [];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] === max ? indexes.push(i) : "";
// }
// console.log(indexes);

// // Задание 7
// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let newArr = [];
// for (let item of arr) {
//   if (item >= 0) {
//     newArr.push(item);
//   }
// }
// console.log(newArr);

// Задание 8
// let nums = [5, 4, 3, 8, 0];
// let limit = 5;
// let number = [];
// for (let item of nums) {
//   if (item >= limit) {
//     number.push(item);
//   }
// }
// console.log(number);

// Задание 9
// const users = [
//   { name: "Vasya", age: 23 },
//   { name: "Olya", age: 12 },
//   { name: "Anna", age: 22 },
//   { name: "Alex", age: 18 },
//   { name: "Valery", age: 8 },
// ];
// for (let element of users) {
//   element.age > 15 ? console.log(element.name) : "";
// }

// Задание 10
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let vegetable = [];
for (let element of vegetables) {
  vegetable.push({ word: element, length: element.length });
}
console.log(vegetable);

for (let element of vegetable) {
  console.log(element.word + "-" + element.length);
}
