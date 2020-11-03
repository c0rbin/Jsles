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
const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const perconalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?','');
const b = prompt('На сколько оцените его?','');
const c = prompt('Один из последних просмотренных фильмов?','');
const d = prompt('На сколько оцените его?','');

perconalMovieDB.movies[a] = b;
perconalMovieDB.movies[c] = d;

console.log(perconalMovieDB);