"use strict";

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(3)));

// 2)
console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('3')));

// 2)
console.log(typeof(+'3'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN; Это все false (всегда будет неправдой)

// 1) Способ
let switcher = null;

if (switcher) {
  console.log('Working...');
}

switcher = 1;

if (switcher) {
  console.log('Working...');
}

// 2) Способ
console.log(typeof(Boolean('3')));

// 3) Способ
console.log(typeof(!!'4444'));