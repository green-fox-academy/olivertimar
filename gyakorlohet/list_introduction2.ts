let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = listA.concat([]);
//console.log('originalA: ' + listA);
//console.log('originalB: ' + listB);
console.log(listB.indexOf('Durian') > -1); //true
//console.log(listA); //van durian
//console.log(listB);

listB.splice(3, 1);
//console.log('splice durianB: ' + listB); //nincs duri
//console.log(listA); //nincs duri
console.log(listB);

listA.splice(4, 0, 'Kiwifruit');
console.log(listA);
console.log(listA.length === listB.length);
console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));
listB.push('Pummelo', 'Passion Fruit');
console.log(listB);
console.log(listA[2]);
