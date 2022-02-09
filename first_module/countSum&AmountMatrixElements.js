function countSumMatrixElements(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (callback(matrix[i][j])) {
                sum += matrix[i][j];
            }
        }
    }

    return sum;
}

function countAmountMatrixElements(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let filteredArray = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (callback(matrix[i][j])) {
                filteredArray.push(matrix[i][j]);
            }
        }
    }
    let result = filteredArray.length;
    return result;

}