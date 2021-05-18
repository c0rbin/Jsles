'use strict';

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };

// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// const ivan = new User('Ivan', 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'bob'
// };

// sayName.call(user, ' Axe',);
// sayName.apply(user, [' Axelerod']);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(14));

// 1) Обычная функция: this = window, но если включен use strict, то будет undefined
// 2) Контекст у методов объекта - это будет сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', (e)=> {
  e.target.style.backgroundColor = 'red';
});

const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    };
    say();
  }
};

obj.sayNumber();

const double = a =>  a * 2;

console.log(double(15));