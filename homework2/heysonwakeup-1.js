function maxHonor(arr, d) {
    const n = arr.length;
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        let currentSum = 0;

        for (let j = 0; j < d; j++) {
            currentSum += arr[(i + j * (n / d)) % n];
        }

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const arr1 = [1, 2, 3, 4];
const d1 = 2;
console.log(maxHonor(arr1, d1)); // Output: 6

const arr2 = [1, 5, 6, 3, 4, 2];
const d2 = 3;
console.log(maxHonor(arr2, d2)); // Output: 11

const arr3 = [1, 1, 0];
const d3 = 1;
console.log(maxHonor(arr3, d3)); // Output: 1
