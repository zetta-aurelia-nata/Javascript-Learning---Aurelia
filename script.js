let firstFavoriteBook = "The first frost";
const secondFavoriteBook = "King of Clash";

firstFavoriteBook = "Twilight";
const bookCollection = firstFavoriteBook + " & " + secondFavoriteBook;

const studentName = "Aurelia";
let age = 21;
const isIntern = true;
let address = "Makassar";
let middleName = null;

let dynamicValue = "Hello";

dynamicValue = 100;

dynamicValue = false;

const hobbies = ["Dance", "Singing", "Watching movie"];

const student = {
    name: "Aurelia",
    age: 21,
    major: "Informatics",
    isIntern: true
};

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


//Javascript learning day 2
let bookComparison = firstFavoriteBook === secondFavoriteBook;

let firstFavBookPrice = 700000;
let secondFavBookPrice = 600000;

let highestPrice;

if (firstFavBookPrice > secondFavBookPrice) {
    highestPrice = firstFavBookPrice;
} else {
    highestPrice = secondFavBookPrice;
}

let averagePrice = (firstFavBookPrice + secondFavBookPrice) / 2;

let bookPrice = averagePrice > 500000 ? "Expensive" : "Cheap";

function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//Javascript learning day 3
function calculateDiscount(bookPrice, discountPercentage) {
    return (bookPrice *= discountPercentage) / 100;
}

function priceAfterDiscount(bookPrice, discountPercentage) {
    const discount = calculateDiscount(bookPrice, discountPercentage);
    return bookPrice -= discount;
}

function calculateTax(bookPrice, taxPercentage) {
    return (bookPrice *= taxPercentage) / 100;
}

function priceAfterTax(bookPrice, taxPercentage) {
    const tax = calculateTax(bookPrice, taxPercentage);
    return bookPrice += tax;
}

function calculateFinalPrice(bookPrice, discountPercentage, taxPercentage) {
    const priceAfterDiscount = calculateDiscount(bookPrice, discountPercentage);
    const tax = calculateTax(priceAfterDiscount, taxPercentage);
    const finalPrice = priceAfterDiscount + tax;
    return finalPrice;
}


const discountPercentage = 20;
const taxPercentage = 10;
const currentPrice = averagePrice;

console.log("The Current Price for the", bookCollection, ":", currentPrice);
console.log("Amount of discount (20%):", calculateDiscount(currentPrice, discountPercentage));
console.log("Book price after discount (20%):", priceAfterDiscount(currentPrice, discountPercentage));
console.log("Amount of tax (10%):", calculateTax(currentPrice, taxPercentage))
console.log("Normal Book price after Tax (10%):", priceAfterTax(currentPrice, taxPercentage));
console.log("Final price after tax:", calculateFinalPrice(currentPrice, discountPercentage, taxPercentage));
