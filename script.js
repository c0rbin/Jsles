"use strict";

// alert('Hello');

// const result = confirm('Вы сегодня отдыхаете?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '');
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Какой ваш возраст?', '');
// answers[2] = prompt('Когда вы готовы приступить к работе?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';
// console.log(`https://someurl/${category}/5`);

// const user = 'Dinis';
// alert(`Привет, ${user}`);

// console.log(4 + ' 6');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;
// console.log(incr++);
// console.log(decr--);
// console.log(incr++);
// console.log(decr--);

// console.log(2 + 2 * 2 !== '6');

// const isChecked = true,
//       isClose = false;
// console.log(isChecked || isClose);

// console.log('35' + - '22');
// console.log('35' * '22');
// console.log(+'558' > 22++); не верно

// let prob = 0;
// let newProb = prob++;
// console.log(newProb);    не верно

// console.log(!false && 11 || 18 && !'');  Не верно


// Задача 1
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const perconalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// perconalMovieDB.movies[a] = b;
// perconalMovieDB.movies[c] = d;

// console.log(perconalMovieDB);

//  Условия

// if (4 == 9) {
//   console.log('ERally?');
// } else {
//   console.log('Да, ты прав!');
// }


// if (num < 49) {
//   console.log('Error!');
// } else if (num > 100) {
//   console.log('Много!');
// } else {
//   console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('Error!');


// switch (num) {
//   case 49:
//     console.log('Не верно!');
//     break;
//   case 100:
//     console.log('Не верно!');
//     break;
//   case 50:
//     console.log('Верно!');
//     break;
//   default:
//     console.log('Не в этот раз!');
//     break;
// }

// Циклы

let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
  
// }
// Lesson 12

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const perconalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


for (let i = 0; i < 2; i++){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    perconalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error!');
    i--;
  }

  if (perconalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
  } else if (perconalMovieDB.count >= 10 && perconalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (perconalMovieDB.count >= 30) {
    console.log('Вы киноман!!!');
  } else {
    console.log('Произошла ошибка!');
  }
  
}

console.log(perconalMovieDB);