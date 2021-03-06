function deleteMatrixRowElement(matrix) {
  if (!Array.isArray(matrix)) {
    throw new Error('first parameter is not an array');
  }
  if (matrix.length === 0) {
    throw new Error('matrix length cannot be zero');
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
      i--;
    }
  }
  return matrix;
}

function deleteMatrixColumnElement(matrix) {
  if (!Array.isArray(matrix)) {
    throw new Error('first parameter is not an array');
  }
  if (matrix.length === 0) {
    throw new Error('matrix length cannot be zero');
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let column = j;
        for (let k = 0; k < matrix.length; k++) {
          matrix[k].splice(column, 1);
          j--;
        }
      }
    }
    for (let l = 0; l < matrix.length; l++) {
      if (matrix[l].length === 0) {
        matrix.splice(l--, 1);
      }
    }
  }
  return matrix;
}