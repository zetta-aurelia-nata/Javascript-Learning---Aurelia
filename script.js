let firstFavoriteBook = "The first frost";
const secondFavoriteBook = "King of Clash";

firstFavoriteBook = "Twilight";
const bookCollection = firstFavoriteBook + " & " + secondFavoriteBook;

console.log("Book Collection:", bookCollection);

const studentName = "Aurelia";
let age = 21;
const isIntern = true;
let address = "Makassar";
let middleName = null;

console.log("Name:", studentName);
console.log("Age:", age);
console.log("In Intern:", isIntern);
console.log("Address:", address);
console.log("Middle Name", middleName);

let dynamicValue = "Hello";
console.log("Welcome Text:", dynamicValue);

dynamicValue = 100;
console.log(dynamicValue);

dynamicValue = false;
console.log(dynamicValue);

const hobbies = ["Dance", "Singing", "Watching movie"];

console.log("My Hobbies:", hobbies);

const student = {
    name: "Aurelia",
    age: 21,
    major: "Informatics",
    isIntern: true
};

console.log("My Student Data: ", student);

const books = [
    {
        title: "The first frost ",
        author: "Aurel",
        year: 2018
    },
    {
        title: "King of Clash",
        author: "RRone",
        year: 2020
    },
    {
        title: "Twilight",
        author: "hai",
        year: 2017
    }
];

console.log("Books Data:", books);



// Javascript Learning day 2
let result = firstFavoriteBook === secondFavoriteBook;

let price1 = 700000;
let price2 = 600000;

let highestPrice;

if (price1 > price2) {
    highestPrice = price1;
} else {
    highestPrice = price2;
}

let averangePrice = (price1 + price2) / 2;

let value;

if (averangePrice > 500000) {
    value = "Expensive";
} else if (averangePrice === 500000) {
    value = "Usual Price";
} else {
    value = "Cheap";
}

function max_of_two(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log()
console.log("Javascript Learning day 2")
console.log("Did", firstFavoriteBook, "&", secondFavoriteBook, "are the same book?", result)
console.log("The highest price is:", highestPrice)
console.log("The averange price is:", averangePrice)
console.log("The price is", value)
console.log("The maximum number:", max_of_two(10, 5));
console.log("The maximum number:", max_of_two(45, 66));

