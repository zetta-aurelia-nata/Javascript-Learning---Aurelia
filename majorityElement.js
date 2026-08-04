function majorityElement(numbers) {
    if (numbers.length === 0) return null;

    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequent = numbers[0];

    for (const num of numbers) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

console.log("The majority number is:", majorityElement([3, 2, 3]));
console.log("The majority number is:", majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log("The majority number is:", majorityElement([1,1,2,2,2,3,3]));

