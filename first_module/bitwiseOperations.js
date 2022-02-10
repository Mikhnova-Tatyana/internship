function checkNumberIsPositive(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    return ((number >> 31) & 1) !== 1
}

function countBits(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    const countBitsObject = {
        zeroBits: 0,
        unitBits: 0,
    };
    for (let i = 0; i < 32; i++) {
        if ((number & 1 << i) === 1 << i) {
            ++countBitsObject.unitBits;
        } else {
            ++countBitsObject.zeroBits;
        }
    }
    return countBitsObject;
}

function bitwiseInvert(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    return (-number - 1);
}

function bitwiseInvert(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    return number ^ -1;
}

function bitwiseInvert(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    for (let i = 0; i < 32; i++) {
        if (((number >> i) & 1) === 0) {
            number ^= (0 << i);
        }
        number ^= (1 << i);
    }
    return number;
}