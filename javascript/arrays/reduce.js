/*
  O método reduce() em JavaScript é uma função de array que é usada para
  reduzir os elementos de um array a um único valor. Ele percorre o array
  da esquerda para a direita, acumulando um resultado iterativamente com
  base em uma função de callback fornecida

  array.reduce(funcaoDeCallback, valorInicial);

  array:
    O array original que será reduzido.
  funcaoDeCallback:
    Uma função que é chamada para cada elemento do array, recebendo quatro
    argumentos: acumulador, elementoAtual, índice e arrayCompleto. O retorno
    desta função é o valor acumulado após processar o elemento atual.
  valorInicial:
    Valor inicial do acumulador. Se não fornecido, o primeiro elemento do
    array será usado como valor inicial e a iteração começará a partir do
    segundo elemento.
*/





/* -----------------NUMBERS----------------------------------- */
const numbers = [1, 2, 3, 4, 5, 6, 7]

// Retorne a soma dos números
const sumNumbers = numbers.reduce((acc, number) => {
  return acc + number
}, 0)

console.log("[SOMA DOS NÚMEROS]", sumNumbers)

// Retorne os números pares | obs: esse exemplo é melhor utilizar o filter()
const evenNumbers = numbers.reduce((acc, number) => {
  if (number % 2 === 0) acc.push(number)

  return acc
}, [])

console.log("[NÚMEROS PARES]", evenNumbers)





/* -----------------CART SHOP----------------------------------- */
const cart = [
  { description: "mouse", quantity: 1, price: 100 },
  { description: "ram", quantity: 2, price: 200 },
  { description: "keyboard", quantity: 1, price: 300 },
  { description: "book", quantity: 2, price: 100 },
]

// Retornar o total a pagar
const totalPrice = cart.reduce((acc, item) => {
  return acc + (item.price * item.quantity)
}, 0)
console.log("PREÇO TOTAL DO CARRINHO", totalPrice) // 1000 REAIS




/* -----------------CHAMPIONS----------------------------------- */
const championsArray = [
  { name: "Yasuo", age: "32" },
  { name: "Aatrox", age: "90" },
  { name: "Garen", age: "41" },
  { name: "Ekko", age: "18" },
  { name: "Ashe", age: "18" },
  { name: "Veigar", age: "50" },
  { name: "Jinx", age: "25" },
  { name: "Jarvan", age: "42" },
  { name: "Draven", age: "23" },
]

// Retorne o champion mais velho
const olderChampion = championsArray.reduce((acc, champion) => {
  if (champion.age > acc.age) return champion

  return acc
})
console.log("[CAMPEÃO MAIS VELHO]", olderChampion)

// Retorne um contador de nomes por iniciais
const countInitials = championsArray.reduce((acc, champion) => {
  const firstLatter = champion.name[0].toLowerCase()

  if (acc[firstLatter]) {
    acc[firstLatter]++
  } else {
    acc[firstLatter] = 1
  }

  return acc
}, {})
console.log("[CONTADOR POR INICIAIS]", countInitials)

// Retornar um objeto com um contador de champions por idade
const championsAges = championsArray.reduce((acc, champion) => {
  // if (acc[champion.age]) {
  //   acc[champion.age].push(champion.name)
  // } else {
  //   acc[champion.age] = []
  //   acc[champion.age].push(champion.name)
  // }

  acc[champion.age] = acc[champion.age] || []

  acc[champion.age].push(champion.name)

  return acc
}, {})
console.log("[CONTADOR POR IDADE]", championsAges)





/* -----------------RETORNANDO ARRAY----------------------------------- */
const arrayNumbers = [-10, 0, 5, -13, 10]

// Retorne ao dobro dos números positivos
const doublePositives = arrayNumbers.reduce((acc, number) => {
  if (number > 0) {
    acc.push(number * 2)
  }

  return acc
}, [])
console.log("DOBRO DOS NÚMEROS POSITIVOS", doublePositives)
