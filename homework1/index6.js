function descendingOrder(n) {
    if (n < 0) {
        return -1;
    }

    const digits = [];
    while (n > 0) {
        const digit = n % 10;
        n = (n / 10) | 0;
        digits.push(digit);
    }

    for (let i = 0; i < digits.length - 1; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] < digits[j]) {
                const temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
            }
        }
    }

    let result = 0;
    for (const digit of digits) {
        result = result * 10 + digit;
    }

    return result;
}

console.log(descendingOrder(42145));
console.log(descendingOrder(678393))
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
