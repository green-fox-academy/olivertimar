var bookCatalog = {
  'myBook1': {
    'title': 'To Kill a Mockingbird',
    'author': 'Harper Lee',
    'genre': 'coming-of-age story',
    'year of publication': 2015,
    'hasBeenRead': true,
    'mainCharacters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'firstVerse': 'Words like violence Break the silence',
      'secondVerse': 'Come crashing in'
    },
    'borrowedBy': 'Csacsi'
   },
  'myBook2': {
    'title': 'Az örökös',
    'author': 'Dosztojevszkij',
    'genre': 'regény',
    'year of publication': 1975,
    'hasBeenRead': true,
    'mainCharacters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'firstVerse': 'Into my little world',
      'secondVerse': 'Painful to me'
    },
    'borrowedBy': 'Pacsi'
  },
  'myBook3': {
    'title': 'Háború és béke',
    'author': 'Tolsztoj',
    'genre': 'regény',
    'year of publication': 1985,
    'hasBeenRead': true,
    'mainCharacters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'firstVerse': 'Pierce right through me',
      'secondVerse': 'Can\'t you understand'
    },
    'borrowedBy': 'Tacsi'
  },
  'page marker': function (book) {
    var elozoMarker = this[book].page;
    this[book].page = prompt('Melyik oldalon tartasz?');
    if (typeof elozoMarker === 'undefined') {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '.');
     } else if (this[book].page < elozoMarker) {
       alert('Visszafele olvasol?!');
     } else {
       alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '. Legutóbb az alábbi oldalon tartottál: ' + elozoMarker + ', így ez alkalommal ' + (this[book].page - elozoMarker) + ' oldalt olvastál.');
     }
    }
};