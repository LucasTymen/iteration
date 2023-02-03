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

// ############# The .findIndex() Method #############
const animals2 = [
  "hippo", "tiger", "lion", "seal", "cheetah", "monkey", "salamander", "elephant",
];

const foundAnimal2 = animals2.findIndex((animal2) => {
  return animal2 === "elephant";
});

console.log(`${foundAnimal2} is the index for the elephant`);

const startsWithS = animals2.findIndex((animal2) => {
  return animal2[0] === "s" ? true : false;
});
const startsWithS2 = animals2.findIndex((animals2) => {
  animals2.charAt(0);

  if (animals2.charAt(0) === "s") {
    console.log(`${animals2} starts with a "S"`);
  }
});

console.log(startsWithS);
console.log(startsWithS2);

// ############# The .reduce() Method #############
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);
console.log(newSum)

//############# .some & .every #############
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => word.length > 5);
console.log(interestingWords);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

// ############## Exercise : Choose the Right Iterator ##############
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);


/*
//##################################################
// ################## principles ###################
//##################################################

// ################### REVIEW ######################

.forEach() is used to execute the same code on every element in an array but
does not change the array and returns undefined.

.map() executes the same code on every element in an array and returns a
new array with the updated elements.

.filter() checks every element in an array to see if it meets certain
criteria and returns a new array with the elements that return truthy for
the criteria.

.findIndex() returns the index of the first element of an array that
satisfies a condition in the callback function. It returns -1 if none of
the elements in the array satisfies the condition.

.reduce() iterates through an array and takes the values of the elements
and returns a single value.

All iterator methods take a callback function, which can be a pre-defined
function, a function expression, or an arrow function.

You can visit the Mozilla Developer Network to learn more about iterator
methods (and all other parts of JavaScript!).


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


############# The .findIndex() Method #############
exemple & syntax :
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
  });
  console.log(lessThanTen); // Output: 3
  console.log(jumbledNums[3]); // Output: 5

// If there isn’t a single element in the array that satisfies the condition in
the callback, then .findIndex() will return -1.
  const greaterThan1000 = jumbledNums.findIndex(num =>{
    return num > 1000;
  });
  console.log(greaterThan1000);


// ############# The .reduce() Method #############
Fonctionne une fois par item, votre valeur de retour devient l’accumulation des
itérations precedantes à l’itération suivante. L’accumulateur commence à 0 par
défaut mais vous pouvez le changer avec un 2e arg optionnel.

console.log([1, 2, 3].reduce((a, val) => a + val))

// Résultat : 6
// Explication : 1 + 2 + 3 = 6


  */
