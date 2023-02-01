//############# .forEach #############
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

// ############# .map #############
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map((animals) => animals[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((bigNumbers) => bigNumbers / 100);
console.log(smallNumbers);


// ############# .filter #############
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers2 = randomNumbers.filter( number => number < 250)
console.log(smallNumbers2)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter( favoriteWords => favoriteWords.length > 7);


// ############## principles ##############
/*
different methods being called on the arrays:

    .forEach()
    .map()
    .filter()

############# .forEach #############

Another way to pass a callback for .forEach() is to use arrow function syntax.
groceries.forEach(groceryItem => console.log(groceryItem));

syntax 1:
[1, 2, 3, 4].forEach(function(element){
  console.log(`Printing ${element} to the console!`)
})

syntax 2:
groceries.forEach(groceryItem => console.log(groceryItem));

############# .map #############
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map((animals) => animals[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((bigNumbers) => bigNumbers / 100);
console.log(smallNumbers);

############# .filter #############
exemple and syntax
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
  return word.length < 5;
});
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
console.log(shortWords); // Output: [ 'pen', 'door']

syntax : const newMethod = objetToDefine.map(objetToDefine => { });

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter( number => number < 250)
console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter( favoriteWords => favoriteWords.length > 7)
*/
