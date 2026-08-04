let firstFavoriteBook = "The First Frost";
const secondFavoriteBook = "King of Clash";

firstFavoriteBook = "Twilight";
let age = 21;
const isIntern = true;
const address = "Makassar";

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
        stock: 8
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

function amountOfInterest(bookPrice, interestPercentage) {
    return (bookPrice * interestPercentage) / 100;
}

function displayBooks() {
    console.log("================= BOOK LIST =================");

    for (let i = 0; i < books.length; i++) {
        const status = books[i].stock > 0 ? "Available" : "Out Of Stock";

        console.log(
            books[i].title +
            " | Author: " + books[i].author +
            " | Year: " + books[i].year +
            " | Price: " + books[i].price +
            " | Stock: " + books[i].stock +
            " | Status: " + status
        );
    }
}

function calculatePaymentSchedule(creditDuration, finalPrice, interestPercentage) {
    const monthlyPayment = Math.floor(finalPrice / creditDuration);
    const remainder = finalPrice % creditDuration;

    return Array.from({ length: creditDuration }, (_, index) => {
        const dueDate = new Date();
        dueDate.setMonth(dueDate.getMonth() + index + 1);

        const amountOfPayment = index === creditDuration - 1 ? monthlyPayment + remainder : monthlyPayment;
        const interest = amountOfInterest(amountOfPayment, interestPercentage);

        return {
            term: index + 1 + " month",
            dueDate: dueDate.toLocaleDateString(),
            amountOfPayment,
            interest,
        };
    });
}

function displayPaymentTerms(selectedBook, finalPrice, creditDuration, interestPercentage) {
    console.log("\n========== INSTALLMENT PAYMENT ==========");
    console.log("Book:", selectedBook.title);
    console.log("Final Price:", finalPrice);

    const paymentSchedule = calculatePaymentSchedule(creditDuration, finalPrice, interestPercentage);
    console.log(paymentSchedule);

    const totalpayment = paymentSchedule.reduce((total, item) => total + item.amountOfPayment, 0);
    const totalInterest = paymentSchedule.reduce((total, item) => total + item.amountOfInterest, 0);

    console.log("\nTotal payment:", totalpayment);
    console.log("Is it Equal To Final Price:", totalpayment === finalPrice);
}




function purchaseBook(bookTitle, purchaseQuantity, discountPercentage, interestPercentage, taxPercentage, creditDuration) {
    console.log("\n============== PURCHASE BOOK ==============");

    let selectedBook = null;

    for (let i = 0; i < books.length; i++) {
        if (books[i].title === bookTitle) {
            selectedBook = books[i];
            break;
        }
    }

    if (selectedBook === null) {
        console.log("Book not found.");
        return;
    }

    let purchasedBookQuantity = 0;
    let totalPrice = 0;

    for (let i = 1; i <= purchaseQuantity; i++) {
        if (selectedBook.stock === 0) {
            console.log("Book is out of stock. Purchase stopped.");
            break;
        }

        selectedBook.stock--;
        purchasedBookQuantity++;
        totalPrice += selectedBook.price;

        console.log("Successfully purchased copy " + purchasedBookQuantity);
    }

    if (purchasedBookQuantity === 0) {
        console.log("No books were purchased.");
        return;
    }

    const discount = amountOfDiscount(totalPrice, discountPercentage);
    const priceAfterDiscountValue = priceAfterDiscount(totalPrice, discountPercentage);
    const tax = amountOfTax(priceAfterDiscountValue, taxPercentage);
    const finalPrice = calculateFinalPrice(totalPrice, discountPercentage, taxPercentage);

    console.log("\n============= PURCHASE SUMMARY =============");
    console.log("Book Title:", selectedBook.title);
    console.log("Requested Quantity:", purchaseQuantity);
    console.log("Purchased Quantity:", purchasedBookQuantity);
    console.log("Original Total Price:", totalPrice);
    console.log("Discount (" + discountPercentage + "%):", discount);
    console.log("Price After Discount:", priceAfterDiscountValue);
    console.log("Tax (" + taxPercentage + "%):", tax);
    console.log("Total Price:", finalPrice);
    console.log("Remaining Stock:", selectedBook.stock);

    if (selectedBook.stock > 0) {
        console.log("This book can still be purchased again.");
    } else {
        console.log("This book cannot be purchased again.");
    }

    displayPaymentTerms(selectedBook, finalPrice, creditDuration, interestPercentage);
}


displayBooks();
const discountPercentage = 15;
const taxPercentage = 10;
const interestPercentage = 2;

purchaseBook("The First Frost", 3, discountPercentage, interestPercentage, taxPercentage, 5);
console.log("\n========== BOOK LIST AFTER PURCHASE ==========");
displayBooks();



