'use sctrict';

const movieDB = {
  movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
  ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

  genre.textContent = 'Драма'; //2

  promoBg.style.backgroundImage = 'url("/img/bg.jpg")';//3

promoAdv.forEach(item => {
  item.remove();
}); //1

movieList.innerHTML = '';//4

movieDB.movies.sort(); //4 

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
  <li class="promo__interactive-item">${i + 1}  ${film}
      <div class="delete"></div>
  </li>
  `;
});//5