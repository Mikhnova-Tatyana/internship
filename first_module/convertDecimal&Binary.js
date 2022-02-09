function convertDecimalToBinary(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1;) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    return binary;
}

function convertBinaryToDecimal(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    let sum = 0;
    let numberToTheSecondPower = 0;
    let counter = 0;
    const numberArray = String(number).split("");

    for (let i = numberArray.length - 1; i >= 0; i--) {
        numberToTheSecondPower = numberArray[i] * 2 ** counter;
        sum += numberToTheSecondPower;
        counter++;
    }

    return sum;
}