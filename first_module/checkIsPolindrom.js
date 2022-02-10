function checkIsPolindrom(string) {
    if (typeof string !== 'string') {
        throw new Error('Invalid argument');
    }
    let semiLength = Math.floor(string.length / 2);
    let i = 0; 

    while(i < semiLength) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
        i++;
    } 
    return true; 
}