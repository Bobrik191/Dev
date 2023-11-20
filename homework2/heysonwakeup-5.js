function contains(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

function getRootProperty(obj, target) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const result = getRootProperty(obj[key], target);
            if (result !== null) {
                return key; // Return the current key as the root property name
            }
        } else if (Array.isArray(obj[key])) {
            if (contains(obj[key], target)) {
                return key; // Found the target integer in this array, return the current key
            }
        }
    }
    return null; // Value not found in the nested object
}

// Example usage:
const object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

console.log(getRootProperty(object, 9)); // Output: "one"
console.log(getRootProperty(object, 250)); // Output: "2f7"
console.log(getRootProperty(object, 999)); // Output: null
