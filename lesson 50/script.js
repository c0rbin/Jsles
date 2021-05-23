'use strict';

const persone = {
  name: 'Alex',
  tel: '+79214587',
  parent: {
    mom: 'Olga',
    dad: 'dad'
  }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parent.mom = 'Ann';

console.log(persone);
console.log(clone);