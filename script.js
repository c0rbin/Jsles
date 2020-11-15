"use strict";

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello!');
  }
};

const john = Object.create(soldier);

// const john = {
//   health: 150
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier); //Так мы делаем если динамически нам нужно получить свойства

// // console.log(john.armor);
john.sayHello();