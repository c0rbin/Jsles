"use strict";

let str = 'some';
let strObj = new String(str); //Устаревший метод создания строки

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello!');
  }
};

const john = Object.create(soldier);

// const john = {
//   health: 100
// };

// Object.setPrototypeOf(john, soldier);

// john.__proto__ = soldier;
// console.log(john, john.armor);
john.sayHello();