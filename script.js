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
        stock: 8,
        paymentTerms: [1, 2, 3, 4, 5, 6]
    },
    {
        title: "King of Clash",
        author: "RRone",
        year: 2020,
        price: 600000,
        stock: 2,
        paymentTerms: [1, 2, 3, 4, 5]
    },
    {
        title: "Twilight",
        author: "Hai",
        year: 2017,
        price: 500000,
        stock: 1,
        paymentTerms: [1, 2, 3, 4, 5, 6]
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

function displayBooks() {
    console.log("================= BOOK LIST ==================");
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

function calculateDueDates(paymentTerms, finalPrice) {
    const totalTerms = paymentTerms.length;
    const installmentAmount = (finalPrice / totalTerms).toFixed(2);

    return paymentTerms.map((term) => {
        const dueDate = new Date();
        dueDate.setMonth(dueDate.getMonth() + term);

        return {
            term: term,
            installmentAmount: installmentAmount,
            dueDate: dueDate.toLocaleDateString()
        };
    });
}

function displayPaymentTerms(book, finalPrice) {
    console.log("\n========== INSTALLMENT PAYMENT ==========");
    console.log("Book:", book.title);
    console.log("Final price:", finalPrice);

    const dueDates = calculateDueDates(book.paymentTerms, finalPrice);

    dueDates.forEach((payment) => {
        console.log(
            "Term " + payment.term + " Month | Installment Payment: " + 
            payment.installmentAmount + " | Due Date: " + payment.dueDate
        );
    });
}

function purchaseBook(bookTitle, purchaseQuantity, discountPercentage, taxPercentage) {
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

    if (purchasedBookQuantity > 0) {
        displayPaymentTerms(selectedBook, finalPrice);
    }
}

displayBooks();
const discountPercentage = 15;
const taxPercentage = 10;

purchaseBook("The First Frost", 3, discountPercentage, taxPercentage);
console.log("\n========== BOOK LIST AFTER PURCHASE ==========");
displayBooks();