function transposeMatrix(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument')
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temoraryVariable = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temoraryVariable;
        }
    }
    return matrix;
}

function addMatrix(matrix1, matrix2) {
    if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
        throw new Error('Invalid argument')
    }
    const matrixResult = [];
    for (let i = 0; i < matrix1.length; i++) {
        matrixResult.push([]);
        for (let j = 0; j < matrix1[i].length; j++) {
            matrixResult[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return matrixResult;
}