function countAverageArrayValue(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid argument')
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }
    let filteredArray = [];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    for (let j = 0; j < filteredArray.length; j++) {
        sum += filteredArray[j];
    }

    return sum / filteredArray.length;
}

function countAverageMatrixValue(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }
    let filteredArray = [];
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(matrix[i][j])) {
                filteredArray.push(matrix[i][j]);
            }
        }
    }
    for (let k = 0; k < filteredArray.length; k++) {
        sum += filteredArray[k];
    }
    return sum / filteredArray.length;
}