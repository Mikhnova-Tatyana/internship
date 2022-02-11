function countAmountArrayElements(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error('first parameter is not an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray.length;
}