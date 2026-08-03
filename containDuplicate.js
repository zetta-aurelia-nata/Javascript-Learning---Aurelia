function containsDuplicate(number) {
    const seen = new Set();

    for (const num of number) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

console.log("Did the number contain a duplicate?", containsDuplicate([1, 2, 3, 1])); 
console.log("Did the number contain a duplicate?", containsDuplicate([1, 2, 3, 4])); 
console.log("Did the number contain a duplicate?", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 
