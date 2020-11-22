
const array = [1,3,5,10,27,74,91,104,140,270,280,301,325,337]
const arrayLength = array.length
console.log('Longitud:', arrayLength)
const objective = 300

const result = binarySearchRecursive(array, 0, arrayLength, objective)

console.log('Resultado:', result)

function binarySearchRecursive(array, left, right, objective) {
    if (left <= right) {
        const mid = left + (right - left) / 2
        console.log('Mid:', mid)
        if (array[mid] === objective) {
            return mid
        }
        if (array[mid] > objective) {
            return binarySearchRecursive(array, left, mid - 1, objective)
        }
        return binarySearchRecursive(array, mid + 1, right, objective)
    }
    return -1
}
