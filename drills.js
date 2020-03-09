const Hashmap = require('./hashmap');

const main = () => {
  let lotr = new Hashmap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

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

main();

//#2
//10, 20

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new Hashmap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new Hashmap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);
  
  console.log(map1.get(str1)); // 20
  console.log(map2.get(str3)); // 10
};

// WhatDoesThisDo();




