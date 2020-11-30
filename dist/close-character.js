const test1 = '[({()})]';
const test2 = '{(()])}';
function isOpen(character) {
    const arr = ['(', '{', '['];
    return arr.includes(character);
}
function closes(characterA, characterB) {
    const pairs = { '(': ')', '{': '}', '[': ']' };
    return pairs[characterA] === characterB;
}
function validate(text) {
    const stack = [];
    for (const character of text.split('')) {
        if (isOpen(character)) {
            stack.push(character);
        }
        else {
            const topChart = stack.pop();
            if (!closes(topChart, character)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validate(test1));
//# sourceMappingURL=close-character.js.map