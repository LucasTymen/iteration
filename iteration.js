const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro', 'Klimt','Mucha','De Chirico'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// ############## principles ##############
/*
different methods being called on the arrays:

    .forEach()
    .map()
    .filter()

############# arrow fonction #############

Another way to pass a callback for .forEach() is to use arrow function syntax.
groceries.forEach(groceryItem => console.log(groceryItem));

*/
