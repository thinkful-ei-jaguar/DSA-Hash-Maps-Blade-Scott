
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
  console.log(stringMap);
  console.log(returnString);
};

// deleteDups('google');

//#5

// const palindromeCheck = (string) => {
//   let stringMap = new Hashmap();
  
//   for(let i = 0; i < string.length; i++) {

//     stringMap.set(string[i].toLowerCase(), string[i].toLowerCase());
//   }

//   console.log(string.length / 2);
//   console.log(stringMap.length);

//   let returnVal = Math.ceil(string.length / 2) === stringMap.length;
  
//   return console.log(returnVal);
// };

// palindromeCheck('acecarracecarr');


function checkForPalindrome(str) {
  const len = str.length;
  const check = new Map();
  
  for(let i = 0; i < len;i++) {
    check.has(str.charAt(i)) ? check.delete(str.charAt(i)) : check.set(str.charAt(i), null);
  }
  return console.log(check.size === 0 || (check.size === 1));
}

// checkForPalindrome('poopzzzz');


const anagram = (arr) => {
  const check = new Map();

  for(let i = 0; i < arr.length; i++ ) {
    
  };

  return console.log();
};

anagram();


