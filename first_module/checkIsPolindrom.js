
function checkIsPolindrom(string) {
    if (typeof string !== 'string') {
        throw new Error('Invalid argument')
    }
    let semiLength = Math.floor(string.length / 2);
    for (let i = 0; i < semiLength; i++)
        if (string[i] !== string[string.length - i - 1])
            return false;
    return true;
}