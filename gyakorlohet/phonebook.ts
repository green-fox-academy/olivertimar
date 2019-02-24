let map: object = {
  'firstPerson': {
    'name': 'William A. Lathan',
    'number': '405-709-1865'
  },
  'secondPerson': {
    'name': 'John K. Miller',
    'number': '402-247-8568'
  },
  'thirdPerson': {
    'name': 'Hortensia E. Foster',
    'number': '606-481-6467'
  },
  'fourthPerson': {
    'name': 'Amanda D. Newland',
    'number': '319-243-5613'
  },
  'fifthPerson': {
    'name': 'Brooke P. Askew',
    'number': '307-687-2982'
  },
  'search': function () {
    let result: any;
    let kerdes: string = prompt('Mit keresünk?');
    for (let data in this) {
      if (typeof this[data] !== 'function') { //ha function nem vizsgálja az adott értéket
        if (kerdes === this[data].number) {
          result = this[data].name;
//          console.log(this[data].name);
//          return this[data].name;
        } else if (kerdes === this[data].name) {
          result = this[data].number;
//          console.log(this[data].number);
        } else {
          console.log('No data found.')
        }
      }
    }
    console.log(result);
  },
/*  'hasName': function (namey) {
    console.log(this[namey].number);
  }*/
}