/*
  O método filter() em JavaScript é utilizado para criar um novo array
  contendo apenas os elementos do array original que satisfazem uma
  determinada condição. Ele não modifica o array original, ele apenas
  retorna um novo array com os elementos que atendem à condição especificada.

  const novoArray = arrayOriginal.filter(funcaoAtual, thisArg);

  arrayOriginal:
    O array original que será filtrado.
  funcaoAtual:
    Função que será chamada para cada elemento do array. Ela deve
    retornar true para os elementos que devem ser incluídos no novo array e
    false para os elementos que devem ser excluídos.
  thisArg (opcional):
    Objeto a ser usado como this ao executar a função.
*/

const arrayNumbers = [1, 10, 23, 3, 19, 2, 68, 9, 31, 6, 99, 33, 22, 12, 5, 8, 26]

function callbackFilter(value, index, array) {
  // console.log("[ARRAY ORIGINAL]", array) // Está contido o array original
  // console.log("[ÍNDICE DO VALUE]", index) // Esta contido o índice do value
  return value > 10
}

const numbersGreaterThanTen = arrayNumbers.filter(callbackFilter)

console.log("[RETORNO DOS NÚMEROS MAIORES QUE 10]", numbersGreaterThanTen)

/*
  1. Retorne as pessoas que tem o nome de 5 letras ou mais
  2. Retorne as pessoas com mais de 30 anos
  3. Retorne as pessoas cujo nome termina com "o"
*/

const arrayPeoples = [
  { name: "João", age: 23 },
  { name: "Paulo", age: 50},
  { name: "Mateus", age: 27 },
  { name: "Lucas", age: 25 },
  { name: "Tito", age: 35 },
  { name: "Melquisedeque", age: 73},
]

const fiveLettersOrMore = arrayPeoples.filter((people) => {
  if (people.name.length >= 5) return people
})

console.log("[PESSOAS COM 5 LETRAS OU MAIS NO NOME]", fiveLettersOrMore)

const overThirtyYearsOld = arrayPeoples.filter((people) => {
  if (people.age >= 30) return people
})

console.log("[PESSOAS COM MAIS DE 30 ANOS]", overThirtyYearsOld)

const nameEndsWithO = arrayPeoples.filter((people) => {
  if (people.name.toLowerCase().endsWith("o")) return people
})

console.log("[PESSOAS CUJO NOME TERMINAM COM 'O']", nameEndsWithO)
