function groupAnagrams(words) {
    const Anagrams = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i] === null) continue;

        const currentWord = words[i];
        const anagramGroup = [words[i]];
        words[i] = null;

        for (let j = i + 1; j < words.length; j++) {
            if (words[j] === null) continue;

            if (areAnagrams(currentWord, words[j])) {
                anagramGroup.push(words[j]);
                words[j] = null;
            }
        }

        Anagrams.push(anagramGroup);
    }

    return Anagrams;
}

function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

const input = [ "kit", "kvitka", "vitkak", "itk", "kaktiv", "loh", "hlo", "ufo"];
const Anagrams = groupAnagrams(input);
console.log(Anagrams);
