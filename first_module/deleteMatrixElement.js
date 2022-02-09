function deleteMatrixRowElement(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument');
    }
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                counter++;
            }
        }
        if (counter > 0) {
            matrix.splice(i, 1);
            counter = 0;
        }
    }
    return array;
}


function deleteMatrixColumnElement(matrix) {
    if (!Array.isArray(matrix)) {
        throw new Error('Invalid argument');
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (array[i][j] === 0) {
                let column = j;
                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(column, 1);
                }
            }
        }
    }
    return array;
}