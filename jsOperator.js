let book1 = "Harry Potter";
let book2 = "Toy Story";

let result = book1 === book2;

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

console.log("Did", book1, "&", book2, "are the same book?", result)
console.log("The highest price is:", highestPrice)
console.log("The averange price is:", averangePrice)
console.log("The price is", value)
console.log("The maximum number:", max_of_two(10, 5));
console.log("The maximum number:", max_of_two(45, 66));
