Array.prototype.bubbleSort = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (callback(this[j], this[j + 1])){
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
}

Array.prototype.selectionSort = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  let result = [];
  while (this.length > 0) {
    let index = 0;
    for (let i = 0; i < this.length; i++){
      if (callback(this[i], this[index])){
        index = i;
      }
    }
    result.push(this[index]);
    this.splice(index, 1);
  }
  return result;
}