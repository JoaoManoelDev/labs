/*
  Objetivos:
  1. Criar um array com 20 números aleatórios. 
  2. Retornar o maior e o menor do array.
*/


const main = () => {
  const randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1)
  
  function findLowestHighest(array) {
    return {
        lowest: Math.min(...array),
        highest: Math.max(...array)
    }
  }
  
  const lowestHighest = findLowestHighest(randomNumbers);
  
  return lowestHighest
}

const result = main()

console.log(result)