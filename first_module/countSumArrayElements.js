function countSumArrayElements(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error('first parameter is not an array');
    }
    if (array.length === 0) {
        throw new Error('array length cannot be zero');
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
        throw new Error('first parameter is not an array');
    }
    if (array.length === 0) {
        throw new Error('array length cannot be zero');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    index = index || 0;
    let sum = array[index];

    if (++index < array.length && callback(array[index])) {
        sum += countSumArrayElementsRecurse(array, callback, index);
    }
    return sum;
}