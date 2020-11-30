
const array = [1,3,5,10,27,74,91,104,140,270,280,301,325,337]
var arrayLength = array.length
const objective = 271

const result = binarySearchRecursive(array, 0, arrayLength, objective) // Usando el metodo recursivo
// const result = binarySearchLoop(array, 0, arrayLength, objective) // Utilizando el metodo del bucle

const resultText = result !== -1 ? `Posición del elemento encontrado: ${result}` : 'No se encontró el elemento'
console.log(resultText)

function binarySearchRecursive(array, left, right, objective) {
    if (left <= right) {
        const mid = left + (right - left) / 2
        if (array[mid] === objective) return mid
        if (array[mid] > objective) return binarySearchRecursive(array, left, mid - 1, objective)
        return binarySearchRecursive(array, mid + 1, right, objective)
    }
    return -1
}

function binarySearchLoop(array, left, right, objective) {
    while (left <= right) {
        var mid = left + (right - left) / 2
        if (array[mid] === objective) return mid
        if (array[mid] < objective) left = mid + 1
        else right = mid - 1
    }
    return -1
}