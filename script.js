"use strict";

let num = 20;


function firstMessageShow(text) {
  console.log(text);
  
  console.log(num);
}
firstMessageShow('Здравствуй Мир!');
console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,5));
// console.log(calc(15,15));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log('Hello!');
};
logger();

const calc = (a, b) => {
  console.log('1');
  return a + b;
};
console.log(calc(4,5));