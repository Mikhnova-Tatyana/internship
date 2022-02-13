function checkIsAnagram(firstWord, secondWord) {
    if (typeof firstWord !== 'string' || typeof secondWord !== 'string') {
        throw new Error('Invalid argument');
    }
    if (firstWord.length !== secondWord.length) {
        return false;
    }
    let charSumFirst = countCharSum(firstWord);
    let charSumSecond = countCharSum(secondWord);

    return (charSumFirst === charSumSecond);
}

function countCharSum(word) {
    if (typeof word !== 'string') {
        throw new Error('Invalid argument');
    }
    let charSum = 0;
    for (let i = 0; i < word.length; i++) {
        charSum += word.charCodeAt(i);
    }
    return charSum;
}

function checkIsAnagram(firstWord, secondWord) {
    if (typeof firstWord !== 'string' || typeof secondWord !== 'string') {
        throw new Error('Invalid argument');
    }
    if (firstWord.length !== secondWord.length) {
        return false;
    }
    const firstCharObject = getCharObject(firstWord);
    const secondCharObject = getCharObject(secondWord);

    for (let char in firstCharObject) {
        if (firstCharObject[char] !== secondCharObject[char]) {
            return false;
        }
    }
    return true;
}

function getCharObject(word) {
    if (typeof word !== 'string') {
        throw new Error('Invalid argument');
    }
    const charObject = {};
    word = word.toLowerCase();
    for (let char of word) {
        charObject[char] = ++charObject[char] || 1;
    }
    return charObject;
}