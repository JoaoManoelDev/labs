/*
  Objetivos:
  1. Encontra todos os números primos entre 1 e 1000. 
  2. Somar todos os números primos que você encontrou entre 1 e 1000. 
  3. A função `main` deve retornar a soma de todos os números primos.
  faça isso com map, filter ou reduce
*/

const thousandNumbers = Array.from({ length: 1001 }, (_, index) => index)

function numberIsPrime(number) {
  if (number < 2) return false

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  
  return number !== 1
}

function main(arrayNumbers) {
  let allNumbersPrime = []

  arrayNumbers.map(number => {
    const verifyIsPrime = numberIsPrime(number)

    if (verifyIsPrime) {
      allNumbersPrime.push(number)
    }

    return
  })

  const sumOfAllNumbers = allNumbersPrime.reduce((acc, number) => acc + number, 0)

  return sumOfAllNumbers
}

const result = main(thousandNumbers)

console.log(result)
