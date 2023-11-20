function findIndex(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let l = i + 1; l < n; l++) {
            rightSum += arr[l];
        }

        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}

const array = [1, 2, 3, 4, 3, 2, 1];
console.log(findIndex(array));

const array1 = [6,4,3,7,5,7,6,4,3]
console.log(findIndex(array1))