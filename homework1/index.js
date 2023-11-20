const number = 20;

if (!isNaN(number) && number >= 0) {
    const result = multiples(number);
    console.log(`The sum of this multiples ${result}`);
} else {
    console.log("Incorrect value");
}

function multiples(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
