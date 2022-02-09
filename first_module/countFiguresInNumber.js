function countFiguresInNumber(number) {
    if (typeof number !== 'number') {
        throw new Error('Invalid argument')
    }
    const figures = [];

    while (number > 0) {
        figures.unshift(number % 10);
        number = number / 10 | 0;
    }
    return figures.length;
}

function countFiguresInNumberRecurse(number, counter) {
    if (typeof number !== 'number' || typeof counter !== 'number') {
        throw new Error('Invalid argument')
    }
    counter = counter || 0;

    if (parseInt(number / 10) === 0) {
        return ++counter;
    }
    return countFiguresInNumberRecurse(parseInt(number / 10), ++counter);
}