function countMinToMaxSum(min, max, callback) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Invalid argument');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let sum = 0;

    for (let i = min; i <= max; i++) {
        callback(i) && (sum += i);
    }
    return sum;
}


function countMinToMaxSumRecurse(min, max, callback) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Invalid argument');
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    let sum = 0;

    callback(min) && (sum += min);

    if (++min <= max) {
        sum += countMinToMaxSumRecurse(min, max, callback);
    }

    return sum;
}