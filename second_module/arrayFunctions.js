Array.prototype.customForEach = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.customMap = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
}

Array.prototype.customFilter = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
}

Array.prototype.customFind = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

Array.prototype.customReduce = function (callback, accumulator) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let index = 0;
    if (arguments.length < 2) {
        index = 1;
        accumulator = this[0];
    }

    while (index < this.length) {
        accumulator = callback(accumulator, this[index], index, this);
        ++index;
    }
    return accumulator;
}