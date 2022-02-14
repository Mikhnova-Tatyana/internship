function countUniqueWordsInSentence(sentence) {
  if (typeof sentence !== 'string') {
      throw new Error('Invalid argument');
  }
  const words = arrayFromString(sentence);
  const wordsCountObj = {};
  let uniqueWordsAmount = 0;

  for (let i = 0; i < words.length; i++) {
      let currentEleement = words[i];
      if (!(currentEleement in wordsCountObj)) {
          wordsCountObj[currentEleement] = 1;
      } else {
          wordsCountObj[currentEleement]++;
      }
  }
      for (const word in wordsCountObj) {
          wordsCountObj[word] === 1 && uniqueWordsAmount++;
      }
      return uniqueWordsAmount;
}

function arrayFromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Invalid argument');
    }
    let array = [];
    let temporaryString = '';

    for (let i = 0; i <= string.length - 1; i++) {
        if (string[i] !== ' ') {
            temporaryString += string[i];
            if (i === string.length - 1) {
                array.push(temporaryString);
            }
        } else {
            array.push(temporaryString);
            temporaryString = '';
        }
    }
    return array;
}