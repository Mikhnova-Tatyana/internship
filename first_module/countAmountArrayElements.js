function countAmountArrayElements(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error('first parameter is not an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            counter++;
        }
    }
    return counter;
}