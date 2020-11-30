
const array: Array<number> = [1,3,5,10,27,74,91,104,140,270,280,301,325,337]
var arrayLength: number = array.length
const objective: number = 270

const result: number = binarySearchRecursive(array, 0, arrayLength, objective) // Usando el metodo recursivo
// const result: number = binarySearchLoop(array, 0, arrayLength, objective) // Utilizando el metodo del bucle

const resultText: string = result !== -1 ? `Posición del elemento encontrado: ${result}` : 'No se encontró el elemento'
console.log(resultText)

function binarySearchRecursive(array:Array<number>, left:number, right:number, objective:number):number {
    if (left <= right) {
        const mid: number = left + (right - left) / 2
        if (array[mid] === objective) return mid
        if (array[mid] > objective) return binarySearchRecursive(array, left, mid - 1, objective)
        return binarySearchRecursive(array, mid + 1, right, objective)
    }
    return -1
}

function binarySearchLoop(array:Array<number>, left:number, right:number, objective:number):number {
    while (left <= right) {
        var mid: number = left + (right - left) / 2
        if (array[mid] === objective) return mid
        if (array[mid] < objective) left = mid + 1
        else right = mid - 1
    }
    return -1
}