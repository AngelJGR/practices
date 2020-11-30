const test1 = '[({()})]'
const test2 = '{(()])}'

function isOpen(character: string) {
    const arr:Array<string> = ['(', '{', '[']
    return arr.includes(character)
}

function closes(characterA: string, characterB: string) {
    const pairs = { '(': ')', '{': '}', '[': ']' }
    return pairs[characterA] === characterB
}

function validate(text: string) {
    const stack = []
    for (const character of text.split('')) {
        if (isOpen(character)) {
            stack.push(character)
        } else {
            const topChart = stack.pop()
            if (!closes(topChart!, character)) {
                return false
            }
        }
    }
    return stack.length === 0;
}

console.log(validate(test1))