function countFiguresInNumber(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    let counter = 0;

    while (number > 0) {
        number = parseInt(number / 10) | 0;
        counter++;
    }
    return counter;
}

function countFiguresInNumberRecurse(number, counter) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument');
    }
    counter = counter || 0;

    if (parseInt(number / 10) === 0) {
        return ++counter;
    }
    return countFiguresInNumberRecurse(parseInt(number / 10), ++counter);
}