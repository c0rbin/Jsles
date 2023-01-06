'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.tagName == 'BUTTON') {
    console.log('Hello');
  }
});