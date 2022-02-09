function countSumArrayElements(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid argument');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            sum += array[i];
        }
    }
    return sum;
}

function countSumArrayElementsRecurse(array, callback, index) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid argument');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    index = index || 0;

    if (index > array.length) {
        return 0;
    }

    if (callback(array[index])) {
        return array[index] += countSumArrayElementsRecurse(array, callback, ++index);
    }
    return countSumArrayElementsRecurse(array, callback, ++index);
}