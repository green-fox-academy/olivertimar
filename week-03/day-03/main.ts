// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.
// Ash has a few pokemon.
// A wild pokemon appeared!
// Which pokemon should Ash use?

import { Pokemon } from './export-pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');
//console.log(wildPokemon);

/*if (this.effectiveAgainst == 'water') {
  return this.effectiveAgainst == 'fire';
 } else if (this.effectiveAgainst == 'leaf') {
   return effectiveAgainst == 'water';
 } else if (this.effectiveAgainst == 'electric') {
   return this.effectiveAgainst == 'water';
 } else (this.effectiveAgainst == 'fire') {
   return this.effectiveAgainst == 'water';
 }
}
én így kezdtem el
*/

console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

//console.log(initializePokemon());

for (let i: number = 0; i < pokemonOfAsh.length; i++) {
  if(pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
    console.log(pokemonOfAsh[i].name);
  }
}
