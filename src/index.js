/*const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let decodedMessage = "";

    for (let i = 0; i < expr.length; i += 10) {
        let encodedLetter = expr.substr(i, 10)
        decodedMessage += encodedLetter == '**********' ? ' ' : MORSE_TABLE[getLetter(encodedLetter)];
    }

    function getLetter(str) {

        let morseLetter = '';
        let binaryMorseAlphabet = {
            '00': '',
            '10': '.',
            '11': '-'
        }

        for (let i = 0; i < str.length; i += 2) {
            morseLetter += binaryMorseAlphabet[str.substr(i, 2)]
        }
        return morseLetter;
    }

    return decodedMessage;
}

module.exports = {
    decode
}*/
