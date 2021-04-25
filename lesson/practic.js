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
      movieList = document.querySelector('.promo__interactive-list'),
      formAdd = document.querySelector('.add'),
      promoMenu = document.querySelector('.promo__menu-list ul'),
      itemNav = document.createElement('li'),
      promoItem = document.createElement('a'),
      promoIntTitle = formAdd.querySelector('.promo__interactive-title');
      
promoItem.setAttribute('href','#');
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

promoItem.classList = 'promo__menu-item';
promoItem.textContent = 'Аниме';
promoMenu.append(itemNav);


itemNav.append(promoItem);

promoIntTitle.style.color = 'red';