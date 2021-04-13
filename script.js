"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
      } else {
        console.log('Error!');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы классический зритель!');
    } else {
      console.log('Произошла ошибка!');
    }
  },
  showMyDB: function(hidden) {
    if(!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else if (personalMovieDB.privat == true) {
      personalMovieDB.privat = false;
    }
  },
  writeYourgenres: function() {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre == null || genre == '') {
      //   console.log('Нельзя оставлять пустую строку либо отменять');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
      let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
      if (genre == null || genre == '') {
          console.log('Нельзя оставлять пустую строку либо отменять');
          i--;
        } else {
          personalMovieDB.genres = genre.split(', ');
          personalMovieDB.genres.sort();
        }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};

const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.addEventListener('click', () => {
//   alert('Jace');
// });

// let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 3) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btn.forEach(item => {
  item.addEventListener('click', deleteElement, {once: true});
  overlay.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(e.target);

});