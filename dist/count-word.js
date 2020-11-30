let words = "Y así como suele decirse el gato al rato, el rato a la cuerda, la cuerda al palo; daba el arriero a Sancho, Sancho a la moza, la moza a él, el ventero a la moza.";
function normalizer(word) {
    return word.toLowerCase().normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]|[.!,;]/gi, "$1$2")
        .normalize();
}
function countWords(text) {
    let dictionary = {};
    let separateWords = text.split(" ");
    for (let word of separateWords) {
        if (normalizer(word) in dictionary) {
            ++dictionary[normalizer(word)];
        }
        else {
            dictionary[normalizer(word)] = 1;
        }
    }
    console.log(dictionary);
}
countWords(words);
//# sourceMappingURL=count-word.js.map