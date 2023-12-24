/*
  O método splice() em JavaScript é utilizado para modificar o conteúdo de um array
  ao remover ou substituir elementos existentes e/ou adicionar novos elementos. Ele
  tem uma versatilidade significativa e permite realizar operações complexas em arrays.

  array.splice(início, quantidade, elemento1, elemento2, ...)

  array: O array original.
  início: Índice onde a modificação deve começar.
  quantidade: Número de elementos a serem removidos a partir do índice de início. Se quantidade for 0, nenhum elemento será removido.
  elemento1, elemento2, ...: Elementos a serem adicionados no array no ponto de início.

  O método splice() altera o array original. Se você precisa manter o array original
  intacto, pode criar uma cópia antes de aplicar o método.
*/

//                    0        1       2       3         4
const arrayNames = ["João", "Karol", "Esh", "Moisés", "Maria"]

const removedArrayNames = arrayNames.splice(2, 3, "Pedro", "Paulo")

console.log("[ARRAY DE NOMES ORIGINAL]", arrayNames) // saída: ["João", "Karol", "Pedro", "Paulo"]
console.log("[NOMES REMOVIDOS DO ARRAY]", removedArrayNames) // saída: ["Esh", "Moisés", "Maria"]

//                   -5        -4       -3      -2     -1
//                    0         1        2       3      4
const arrayCars = ["Civic", "Ferrari", "Argo", "BMW", "HB20"]

const removedArrayCars = arrayCars.splice(-4, Number.MAX_VALUE) // Number.MAX_VALUE -> Maior número possível no JS

console.log("[ARRAY DE CARROS ORIGINAL]", arrayCars) // saída: [ "Civic" ]
console.log("[CARROS REMOVIDOS DO ARRAY]", removedArrayCars) // saída: ["Civic", "Ferrari", "Argo", "BMW", "HB20"]

// Exemplos de como usar o splice ao invés de pop, shift, push e unshift

const arrayPeripherals = ["mouse", "keyboard", "phone", "webcam"]

// pop
const removedArrayPeripheralsPop = arrayPeripherals.splice(-1, 1)
console.log("[PERIFÉRICO REMOVIDO DO ARRAY SIMULANDO POP]", removedArrayPeripheralsPop) // saída: ["webcam"]

// shift
const removedArrayPeripheralsShift = arrayPeripherals.splice(0, 1)
console.log("[PERIFÉRICO REMOVIDO DO ARRAY SIMULANDO SHIFT]", removedArrayPeripheralsShift) // saída: ["mouse"]

// push
const addArrayPeripheralsPush = arrayPeripherals.splice(arrayPeripherals.length, 0, "mousepad")
console.log("[PERIFÉRICO ADICIONADO SIMULANDO O PUSH]", arrayPeripherals) // saída: [...arrayPeripherals, "mousepad"]

// unshift
const addArrayPeripheralsUnshift = arrayPeripherals.splice(0, 0, "mic")
console.log("[PERIFÉRICO ADICIONADO SIMULANDO O UNSHIFT]", arrayPeripherals) // saída: ["mic", ...arrayPeripherals]
