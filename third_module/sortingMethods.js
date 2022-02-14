function bubbleSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('entered parameter is not an array');
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let buffer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = buffer;
      }
    }
  }
  return array;
}

function quickSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('entered parameter is not an array');
  }
  if (array.length < 2) {
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
    if (array[i] > controlElement) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return [...quickSort(left), controlElement, ...quickSort(right)];
}

function insertionSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('entered parameter is not an array');
  }
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > currentElement) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = currentElement;
  }
  return array;
}