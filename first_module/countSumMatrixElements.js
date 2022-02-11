function countSumMatrixElements(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('first parameter is not an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(i, j)) {
                result += matrix[i][j];
            }
        }  
    }
   
    return result;
}

function countAmountZeroMatrixElements(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('first parameter is not an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(i, j) && matrix[i][j] === 0) {
                counter++;
            }
        }  
    }

    return counter;
}

function countAverageMatrixElements(matrix, callback) {
    if (!Array.isArray(matrix)) {
        throw new Error('first parameter is not an array');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(i, j)) {
                counter++;
                sum += matrix[i][j];
            }
        }  
    }
    
    return sum / counter;
}