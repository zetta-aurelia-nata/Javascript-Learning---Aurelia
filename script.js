let firstFavoriteBook = "The first frost";
const secondFavoriteBook = "King of Clash";

firstFavoriteBook = "Twilight";
const bookCollection = firstFavoriteBook + " & " + secondFavoriteBook;

const studentName = "Aurelia";
let age = 21;
const isIntern = true;
let address = "Makassar";

const hobbies = ["Dance", "Singing", "Watching Movie"];
const student = {
    name: "Aurelia",
    age: 21,
    major: "Informatics",
    isIntern: true
};

const books = [
    {
        title: "The First Frost",
        author: "Aurel",
        year: 2018,
        price: 700000,
        stock: 3
    },
    {
        title: "King of Clash",
        author: "RRone",
        year: 2020,
        price: 600000,
        stock: 2
    },
    {
        title: "Twilight",
        author: "Hai",
        year: 2017,
        price: 500000,
        stock: 1
    }
];

function amountOfDiscount(bookPrice, discountPercentage) {
    return (bookPrice * discountPercentage) / 100;
}

function priceAfterDiscount(bookPrice, discountPercentage) {
    const discount = amountOfDiscount(bookPrice, discountPercentage);
    return bookPrice - discount;
}

function amountOfTax(bookPrice, taxPercentage) {
    return (bookPrice * taxPercentage) / 100;
}

function priceAfterTax(bookPrice, taxPercentage) {
    const tax = amountOfTax(bookPrice, taxPercentage);
    return bookPrice + tax;
}

function calculateFinalPrice(bookPrice, discountPercentage, taxPercentage) {
    const discountedPrice = priceAfterDiscount(bookPrice, discountPercentage);
    const tax = amountOfTax(discountedPrice, taxPercentage);

    return discountedPrice + tax;
}

//Learning javascript day 4
function displayBooks() {
    console.log("========================================================  BOOK LIST ========================================================");

    for (let integer = 0; integer < books.length; integer++) {
        const status =
            books[integer].stock > 0 ? "Available" : "Out Of Stock, this book cannot be purchased";

        console.log(
            "Book Name:", books[integer].title +
            " | Release Year:" + books[integer].year +
            " | Author:" + books[integer].author +
            " | Price: " + books[integer].price +
            " | Stock: " + books[integer].stock +
            " | Status: " + status
        );
    }
}

function calculateTotalPrice() {
    console.log("===============================================  TOTAL PRICE & LIST OF PURCHASE BOOKS ======================================");
    let totalPrice = 0;

    for (let integer = 0; integer < books.length; integer++) {
        totalPrice += books[integer].price;
    }
    return totalPrice;
}

function purchaseBooks() {
    let purchaseBook = [];
    let outOfStock = -1;

    for (let integer = 0; integer < books.length; integer++) {

        if (books[integer].stock === 0) {
            outOfStock = integer;
            break;
        }

        console.log("Purchasing: " + books[integer].title);
        books[integer].stock--;
    }

    if (outOfStock !== -1) {
        console.log("Y0u can't purchased this" + books[outOfStock].title + " because it is out of stock.");
    }
}

const discountPercentage = 15;
const taxPercentage = 10;

displayBooks();

const totalPrice = calculateTotalPrice();

console.log("Total Book Price:", totalPrice);
console.log("Book Final Price after discount & tax:", calculateFinalPrice(totalPrice, discountPercentage, taxPercentage));
purchaseBooks();
console.log("====================================================  BOOK STOCK AFTER PURCHASE ============================================");
displayBooks();

