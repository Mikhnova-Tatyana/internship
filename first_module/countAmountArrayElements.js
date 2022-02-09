function countAmountArrayElements(array, callback) {
    if (typeof array !== 'object' || array === null) {
        throw new Error('Invalid argument');
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