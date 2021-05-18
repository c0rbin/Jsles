'use sctrict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function(name) {
  console.log(`Пользователь ${this.name} выходит из больничного`);
};


const dinis = new User('Dinis', 30);
const aidar = new User('Aidar', 27);
dinis.exit();

console.log(dinis);
console.log(aidar);
dinis.hello();
aidar.hello();