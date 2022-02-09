function checkNumberIsPositive(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }

    if((number >> 31) & 1) {
        return false;
    } 
    return true;
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
    for (let i = 0; i < 32; i++) {
        if (number & 1 << i){
            number |= (0 << i); 
        } else {
            number |= (1 << i); 
        } 
    }  
    return number
}
bitwiseInvert(5) 


let x = 10;
x |= (1 << 5);
x ^= (1 << n);