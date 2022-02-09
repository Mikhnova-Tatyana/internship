function defineSign(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument')
    }

    if((number >> 31) & 1) {
        return 'Number is negative'
    } 
    return 'Number is positive'   
}

function countBits(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument')
    }
    const countBitsObject = {
        zeroBits: 0,
        unitBits: 0,
    };
    for (let i = 0; i < 32; i++) {
        if ((number & 1 << i) === 1 << i) {
            countBitsObject.unitBits += 1;
        }
        else countBitsObject.zeroBits += 1;
    }
    return countBitsObject
}

function bitwiseInvert(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument')
    }
    return (-number - 1)
}

function bitwiseInvert(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument')
    }
    return number ^ -1 
}