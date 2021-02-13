"use strict";

// to String

// 1)
console.log(typeof(String(4)));
console.log(typeof(null));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + 5);

const fontSize = 26 + 'px';

//to Number
// 1)
console.log(typeof(Number('4')));

// 2
console.log(typeof(+'5'));

//3
console.log(typeof(parseInt('15px', 10)));

//to Boolean
//Ниже приводим пример того что всегда будет ложью false
// 0, '', null, undefined, NaN
// 1)
let switcher = null;

if (switcher) {
  console.log('Working...');
}
switcher = 1;
if (switcher) {
  console.log('Working...');
}
// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'345'));