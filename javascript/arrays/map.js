/*
  O método map() é uma função de array que é usada para iterar sobre cada elemento de
  um array e aplicar uma função a cada elemento, criando um novo array com os resultados
  dessas chamadas de função. A sintaxe básica do método map() é a seguinte:

  const novoArray = arrayOriginal.map(funcaoAtual, thisArg);

  arrayOriginal:
    O array original que será percorrido.
  funcaoAtual:
    Função que será chamada para cada elemento do array. Ela pode receberaté três
    argumentos: elemento, indice e arrayCompleto. O resultado da função será o valor do elemento no novo array.
  thisArg (opcional):
    Objeto a ser usado como this ao executar a função.
*/

// Dobre os números
const numbers = [1, 2, 3, 4, 5]

const dobleNumbers = numbers.map(number => {
  return number * 2
})

console.log("[ARRAY COM NÚMEROS EM DOBRO]", dobleNumbers)

const championsArray = [
  { name: "Yasuo", age: "32" },
  { name: "Aatrox", age: "90" },
  { name: "Garen", age: "41" },
  { name: "Ekko", age: "18" },
  { name: "Veigar", age: "50" },
  { name: "Jinx", age: "25" },
  { name: "Draven", age: "23" },
]

// Retorne apenas uma string com o nome do campeão
const names = championsArray.map(champion => {
  return champion.name
})
console.log("[NOME DOS CAMPEÕES]", names)

// Retorne apenas a idade do campeão
const ages = championsArray.map(champion => {
  return champion.age
})
console.log("[IDADE DOS CAMPEÕES]", ages)

// Adicionando um id no campeão
const championsWithId = championsArray.map((champion, index) => {
  return {
    ...champion,
    id: index + 1
  }
})
console.log("[CAMPEÕES COM ID]", championsWithId)