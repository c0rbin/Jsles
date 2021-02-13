'use sctrict';

const perconalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    perconalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while(perconalMovieDB.count == '' || perconalMovieDB.count == null || isNaN(perconalMovieDB.count)) {
      perconalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (perconalMovieDB.count < 10) {
      console.log('Просмотрено слишком мало фильмов');
    } else if (perconalMovieDB.count >= 10 && perconalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (perconalMovieDB.count >= 30) {
      console.log('Вы киноман!');
    } else {
      console.log('Произошла ошибка!');
    }
  },
  showMyDB: function() {
    if (perconalMovieDB.privat != true) {
      console.log(perconalMovieDB);
    }
  },
  toggleVisibleDB: function() {
    if (perconalMovieDB.privat) {
      perconalMovieDB.privat = false;
    } else {
      perconalMovieDB.privat = true;
    }
  },
  writeYourGenres:  function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

      if (genre == '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели данные');
        i--;
      }else {
        perconalMovieDB.genres[i - 1] = genre;
        perconalMovieDB.genres.sort();
      } 
    } 
    perconalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};


