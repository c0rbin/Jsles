"use strict";

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circle = document.getElementsByClassName('circle');
console.log(circle);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item=> {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);