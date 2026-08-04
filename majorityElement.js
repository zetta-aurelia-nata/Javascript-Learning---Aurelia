function majorityElement(number) {
    let candidate = null;
    let count = 0;

    for (let num of number) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

console.log("The majority number is:", majorityElement([3, 2, 3]));
console.log("The majority number is:", majorityElement([2, 2, 1, 1, 1, 2, 2])); 
