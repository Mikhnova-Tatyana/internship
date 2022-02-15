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


function merge(firstArray, secondArray) {
  const arrSort = [];
  let i = 0;
  let j = 0;
  while (i < firstArray.length && j < secondArray.length) {
      arrSort.push(
          if(firstArray[i] < secondArray[j]) {
            firstArray[i++];
          }
           secondArray[j++];
      )}
  return [
      ...arrSort,
      ...arrFirst.slice(i),
      ...arrSecond.slice(j)
  ];
}

function mergeSort(array){
  if (!array || !array.length) {
      return null;
  }
  if (array.length <= 1) {
      return arr;
  }
  const controlElement = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, controlElement);
  const rightArray = arr.slice(controlElement);
  return merge(mergeSort(leftArray), mergeSort(rightArray));;
};


const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = j = 0;
  // сравниваем два массива, поочередно сдвигая указатели
  while (i < arrFirst.length && j < arrSecond.length) {
      arrSort.push(
          (arrFirst[i] < arrSecond[j]) ?
              arrFirst[i++] : arrSecond[j++]
      );
  }
  // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [
      ...arrSort,
      ...arrFirst.slice(i),
      ...arrSecond.slice(j)
  ];
};