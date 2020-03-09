
const Hashmap = require('./hashmap');



const main = () => {
  let lotr = new Hashmap();
 
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);
  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));

};

// main();

//#2
//10, 20

// WhatDoesThisDo();

// #4

const deleteDups = (string) => {
  // debugger;

  let stringMap = new Hashmap();
  let returnString = '';

  for (let i = 0; i < string.length; i++) {
    if (!stringMap.get(string[i])) {
      stringMap.set(string[i], string[i]);
      returnString = returnString.concat(string[i]);
    }
    
  }
  console.log(stringMap._hashTable);
  console.log(returnString);
};

deleteDups('google');






