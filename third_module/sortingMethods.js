Array.prototype.bubbleSort = function (callback) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (callback(this[j], this[j + 1])) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
}

[10, -100, 20, -9, 15, -900, 34, 6, 48, 555].bubbleSort((a, b) => a > b)
[{ a: 1 }, { a: 10 }, { a: 4 }, { a: 7 }].bubbleSort((firstElement, secondElement) => firstElement.a > secondElement.a)

Array.prototype.quickSort = function () {
  if (this.length <= 1) {
    return this;
  }
  let index = Math.floor(this.length / 2);
  let controlElement = this[index];
  let left = [];
  let right = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] === controlElement) {
      continue;
    }
    if (this[i] < controlElement) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }
  return left.quickSort().concat(controlElement, right.quickSort());
}

[10, -100, 20, -9, 15, -900, 34, 6, 48, 555].quickSort()


Array.prototype.findMinIndex = function () {
  let minIndex = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] < this[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

Array.prototype.selectionSort = function () {
  let result = [];
  while (this.length > 0) {
    let minIndex = this.findMinIndex();
    result.push(this[minIndex]);
    this.splice(minIndex, 1);
  }
  return result;
}

[10, -100, 20, -9, 15, -900, 34, 6, 48, 555].selectionSort()