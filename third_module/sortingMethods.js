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
  let less = [];
  let more = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === controlElement) {
      continue;
    }
    if (array[i] > controlElement) {
      more.push(array[i]);
    } else {
      less.push(array[i]);
    }
  }

  return quickSort(less).concat(controlElement, quickSort(more))
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


const findMinIndex = (arr) => {
  let minIndex = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    const minElement = arr[minIndex];
    if (element < minElement) {
      minIndex = i;
    }
  }
  return minIndex;
};

const selectionSort = (arr) => {
  const result = [];
  while (arr.length !== 0) {
    const minIndex = findMinIndex(arr);
    result.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return result;
};