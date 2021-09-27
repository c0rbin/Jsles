'use strict';

const persone = {
  name: 'Alex',
  tel: '+75241',
  parents: {
    dad: 'Mike',
    mom: 'Olga'
  }
};
const clone =  JSON.parse(JSON.stringify(persone));