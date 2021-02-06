'use sctrict';
//Практика.Часть 1

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const perconalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// Практика.Часть 2

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильсов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a!= null && b != null && a != '' && b !='' && a.length < 50) {
      perconalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error!');
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (perconalMovieDB.count < 10) {
    console.log('Просмотрено слишком мало фильмов');
  } else if (perconalMovieDB.count >= 10 && perconalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (perconalMovieDB.count >= 30) {
    console.log('Вы киноман!');
  } else {
    console.log('Произошла ошибка!');
  }
}
// detectPersonalLevel();

function showMyDB() {
  if (perconalMovieDB.privat != true) {
    console.log(perconalMovieDB);
  }
}
showMyDB();

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    perconalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  } 
}
writeYourGenres();

