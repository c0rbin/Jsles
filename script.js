"use strict";

function first() {
  // Do something
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJs(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок!');
}

learnJs('JavaScript', done);
