function countSumMatrixElements(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('first parameter is not an array');
    }
    if (matrix.length === 0) {
        throw new Error('matrix length cannot be zero');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(matrix[i][j])) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

function countAmountMatrixElements(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('first parameter is not an array');
    }
    if (matrix.length === 0) {
        throw new Error('matrix length cannot be zero');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(matrix[i][j])) {
                counter++;
            }
        }
    }
    return counter;

}