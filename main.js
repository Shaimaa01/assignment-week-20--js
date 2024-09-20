// assignment 1

let currentDate = new Date();
let birthday = new Date("Apr 11 ,2000");
let dateDiff = currentDate - birthday;

let seconds = dateDiff / 1000;
console.log(`${seconds} Seconds`);

let minutes = seconds / 60;
console.log(`${minutes} Minutes`);

let hours = minutes / 60;
console.log(`${hours} Hours`);

let days = hours / 24;
console.log(`${days} Days`);

let months = days / 30;
console.log(`${months} Months`);

let years = months / 12;
console.log(`${years} Years`);

// Needed Output

// ("1247939400 Seconds");
// ("20798990 Minutes");
// ("346650 Hours");
// ("14444 Days");
// ("481 Months");
// ("40 Years");

// assignment 2

let dateTen = new Date("1980-01-01T00:00:01");
console.log(dateTen);

// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// assignment 3

let date3 = new Date();
date3.setDate(0);

let monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let monthName = monthsName[date3.getMonth()];

console.log(
  `Previous Month Is ${monthName} And Last Day Is  ${date3.getDate()}`
);
console.log(date3);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

//assignment 4

let date4 = new Date("Apr 11 2000");
console.log(date4);

let date5 = new Date(2000, 3, 11);
console.log(date5);

let date6 = new Date();
date6.setFullYear(2000, 3, 11);
date6.setHours(0, 0, 0);
console.log(date6);

// Needed Output

// ("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
// ("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
// ("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");

// assignment 5
let t0 = performance.now();
// for (i = 1; i < 100000; i++) {
//   // console.log(i)
// }
let t1 = performance.now();

console.log(`Loop Took ${Math.floor(t1 - t0)} Milliseconds.`);
// Needed Output

// "Loop Took 1921 Milliseconds."

// assignment 6

// Write Your Generator Function Here
function* gen() {
  let num = 14;
  let difference = 140;

  while (true) {
    yield num;
    num += difference;
    difference += 200;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// assignment 7

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  let uniqueValue = new Set();

  for (let value of genNumbers()) {
    uniqueValue.add(value);
  }

  for (let value of genLetters()) {
    uniqueValue.add(value);
  }

  for (let value of uniqueValue) {
    yield value;
  }
}

let generator2 = genAll();

console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next()); // {value: 2, done: false}
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: 4, done: false}
console.log(generator2.next()); // {value: 5, done: false}
console.log(generator2.next()); // {value: "A", done: false}
console.log(generator2.next()); // {value: "B", done: false}
console.log(generator2.next()); // {value: "C", done: false}
console.log(generator2.next()); // {value: "D", done: false}

// assignment 8

// main.js File

import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";


console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

