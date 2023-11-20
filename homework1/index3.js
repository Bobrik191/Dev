function findNb(m) {
    let n = 1;
    let sumOfCubes = 0;

    while (sumOfCubes < m) {
        sumOfCubes += Math.pow(n, 3);

        if (sumOfCubes === m) {
            return n;
        }

        n++;
    }

    return -1;
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));
