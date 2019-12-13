const randomNames = [
  'Doloris, Vanorden',   
  'Morris, Banker',  
  'Katherin, Sidebottom', 
  'Kathy, Shiffer',
  'Delma, Dolson',
  'Eleanora, Down',
  'Alyssa, Ohm',
  'Dannette, Glynn',
  'Alesia, Sohn',
  'Bettye, Garriga',
  'Ta, Lobb',
  'Asley, Aquilar',
  'Tyson, Dunn',
  'Lamonica, Dolby'
];


const randomPeople = [
  { first: 'albert', last: 'lemonde', born: 1989, passed: 2019 },
  { first: 'benoit', last: 'grenius', born: 1890, passed: 2000 },
  { first: 'charles', last: 'regent', born: 1912, passed: 2012 },
  { first: 'paul', last: 'droule', born: 1923, passed: 2000 },
  { first: 'guillaume', last: 'papoz', born: 1956, passed: 1999 },
  { first: 'arthur', last: 'jacquim', born: 1999, passed: 2010  },
  { first: 'louis', last: 'barron', born: 1943, passed: 1988 },
  { first: 'vianney', last: 'quandalle', born: 1921, passed: 2018  },
  { first: 'rozenn', last: 'magadur', born: 1987, passed: 2011  },
  { first: 'justine', last: 'boyer', born: 1918, passed: 1980 },
];



// filter randomPeople born between two dates:
const filterPeopleByBorn = (minimum, maximum) => {
  const oldest = randomPeople.filter((people) => {
    return people.born > minimum && people.born < maximum;
  });
};


// render an array with first and last names of randomPeople:
const filterPeopleByName = () => {
  const byName = randomPeople.map((people) => people.first + ' ' + people.last);
};


// sort randomPeople by age:
const sortPeopleByAge = () => {
  const byAge = randomPeople.sort((a, b) => (a.born > b.born) ? 1 : -1);
};


// calculate the sum of randomPeople's ages:
const sumOfPeopleAge = () => {
  const sumOfAge = randomPeople.reduce((total, people) => {
    return total + (people.passed - people.born);
  }, 0);
};


// sort randomPeople by years lived:
const sortPeopleByYearsLived = () => {
  const byYearsLived = randomPeople.sort((a, b) => {
    ((a.passed - a.born) > (b.passed - b.born)) ? -1 : 1;
  });
};


// render an array of Boulevards de Paris containing 'de':
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const sortParisianBoulevards = (text) => {
  const listOfBoulevards = document.querySelectorAll('.mw-category a');
  const boulevards = Array.from(listOfBoulevards)
                          .map((boulevard) => boulevard.innerHTML)
                          .filter((boulevard) => boulevard.includes(text));
};


const sortNamesByLastName = () => {
  const sortNames = randomNames.map((name) => name.split(',').reverse().join())
                               .sort();
};


// filterPeopleByBorn(1900, 2000);
// filterPeopleByName();
// sortPeopleByAge();
// sumOfPeopleAge();
// sortPeopleByYearsLived();
// sortParisianBoulevards(' de ');
// sortNamesByLastName();
