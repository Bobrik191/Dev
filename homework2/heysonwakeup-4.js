function unpackSausages(truck) {
    let displayCounter = [];
    let sausagesCount = 0;

    for (const box of truck) {
        for (const pack of box) {
            if (isSausagePack(pack)) {
                sausagesCount++;
                if (sausagesCount % 5 !== 0) {
                    const sausages = extractSausages(pack);
                    displayCounter = [...displayCounter, ...sausages.split('').map(char => (char !== ' ') ? char : '')];
                }
            }
        }
    }

    return displayCounter.join(' ');
}

function isSausagePack(pack) {
    if (pack[0] === '[' && pack[pack.length - 1] === ']' && pack.length % 2 === 0) {
        for (let i = 1; i < pack.length - 1; i++) {
            if (pack[i] !== pack[0]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function extractSausages(pack) {
    return pack.slice(1, -1);
}

// Пример использования:
const truck = [
    ['(-)', '[IIII]', '[))))]'],
    ['IuI', '[llll]'],
    ['[@@@@]', 'UwU', '[IlII]'],
    ['IuI', '[))))]', 'x'],
    []
];

const sausagesOnDisplay = unpackSausages(truck);
console.log(sausagesOnDisplay); // Output: "I I I I ) ) ) ) l l l l @ @ @ @"
