function countSumMatrixMainDiagonal(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                result += matrix[i][j];
            }
        }  
    }
   
    return result;
}


function countSumMatrixElements(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i > j) {
                result += matrix[i][j];
            }
        }  
    }
   
    return result;
}


function countSumMatrixElements(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < j) {
                result += matrix[i][j];
            }
        }  
    }
   
    return result;
}

 
function countAmounMatrixMainDiagonal(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j && matrix[i][j] === 0) {
                counter++;
            }
        }  
    }
   
    return counter;
}


function countAmounMatrixElements(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i > j && matrix[i][j] === 0) {
                counter++;
            }
        }  
    }
   
    return counter;
}


function countAmounMatrixElements(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < j && matrix[i][j] === 0) {
                counter++;
            }
        }  
    }
   
    return counter;
}


function countAverageMatrixMainDiagonal(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === j) {
                counter++;
                sum += matrix[i][j];
            }
        }  
    }

    return sum / counter;
}


function countAverageMatrixElements(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i > j) {
                counter++;
                sum += matrix[i][j];
            }
        }  
    }
    
    return sum / counter;
}

function countAverageMatrixElements(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i < j) {
                counter++;
                sum += matrix[i][j];
            }
        }  
    }

    return sum / counter;
}