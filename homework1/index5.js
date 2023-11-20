function highAndLow(numbers) {
    const numberArray = numbers.split(" ").map(Number);

    let highest = numberArray[0];
    let lowest = numberArray[0];

    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] > highest) {
            highest = numberArray[i];
        }
        if (numberArray[i] < lowest) {
            lowest = numberArray[i];
        }
    }

    return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
