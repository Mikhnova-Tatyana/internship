function countWordOccurrenceInSentence(sentence) {
    if (typeof sentence !== 'string') {
        throw new Error('Invalid argument')
    }
    const words = arrayFromString(sentence);
    const wordsCountObject = {};

    for (let i = 0; i < words.length; i++) {
        let currentElement = words[i];
        if (!(currentElement in wordsCountObject)) {
            wordsCountObject[currentElement] = 1;
        } else {
            wordsCountObject[currentElement] += 1;
        }
    }
    return wordsCountObject;
}

function arrayFromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Invalid argument')
    }
    const array = [];
    let temporaryString = '';

    for (let i = 0; i <= string.length-1; i++) {
        if (string[i] !== ' ') {
            temporaryString += string[i];
            if (i === string.length-1) {
                array.push(temporaryString);
            }
        } else {
            array.push(temporaryString);
            temporaryString = '';
        }
    }
    return array;
}