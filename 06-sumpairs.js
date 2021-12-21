function sumPairs(numbers, result) {
    for (let i = 0; i < numbers.length - 1; ++i) {
        const a = numbers[i];
        for (let j = i + 1; j < numbers.length; ++j) {
            const b = numbers[j];
            if (a + b == result) {
                return [a, b];
            }
        }
    }

    return null;
}

function main() {
    console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
    console.log(sumPairs([-3, -2, 7, -5], 10)) // null
    console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
    console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
    console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]
}

if (require.main === module) {
    main();
}