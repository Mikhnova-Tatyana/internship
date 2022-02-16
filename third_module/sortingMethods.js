function bubbleSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('entered parameter is not an array');
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}


function quickSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('entered parameter is not an array');
  }
  if (array.length <= 1) {
    return array;
  }
  let index = Math.floor(array.length / 2);
  let controlElement = array[index];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === controlElement) {
      continue;
    }
    if (array[i] < controlElement) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(controlElement, quickSort(right));
}


function findMinIndex(array) {
  if (!Array.isArray(array)) {
    throw new Error('entered parameter is not an array');
  }
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function selectionSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('entered parameter is not an array');
  }
  let result = [];
  while (array.length > 0) {
    let minIndex = findMinIndex(array);
    result.push(array[minIndex]);
    array.splice(minIndex, 1);
  }
  return result;
}