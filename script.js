"use strict";

// const obj = {
//   a: 5,
//   b: 1
// };
// const copy = obj; //Ссылка на объект
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 41;
newNumbers.c.x = 14;
// console.log(numbers);
// console.log(newNumbers);

const add = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();
newArray[1] = 9;
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs =   ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7]; 

log(...num);

const array = ['a', 'b'];

const newArr = [...array];
console.log(newArr);

const q = {
  one: 1,
  two: 2
};

const newObjes = {...q};

console.log(q);
console.log(newObjes);

const bond = {
  sif: 'halk'
};

const fik = {
  hex: 'mili'
};

const game = Object.assign(bond, fik);

console.log(game);