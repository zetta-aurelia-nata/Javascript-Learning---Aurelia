function majorityElement(numbers) {
    if (numbers.length === 0) return null;

    numbers.sort((a, b) => a - b);

    let maxCount = 1;
    let currentCount = 1;
    let mostFrequent = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1; 
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequent = numbers[i];
        }
    }
    return mostFrequent;
}


console.log("The majority number is:", majorityElement([3, 2, 3]));
console.log("The majority number is:", majorityElement([2, 2, 1, 1, 1, 2, 2])); 
console.log("The majority number is:", majorityElement([1, 1, 2, 2, 2, 3, 3]));