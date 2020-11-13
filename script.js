"use strict";

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  },
  makeTest: function() {
    console.log('It is test');
  }
};
options.makeTest();

const {border, background} = options.colors;

console.log(border, background);
// console.log(Object.keys(options).length);

// console.log(options['colors'] ['border']);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof(options[key]) == 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(`Количество свойств в этом объекте: ${counter}`);

// const girl = {
//   name: 'Карина',
//   height: 160,
//   color: {
//     eyes: 'grey',
//     hair: 'milirovny'
//   },
//   vote: 'tender'
// };

// console.log(Object.keys(girl).length);