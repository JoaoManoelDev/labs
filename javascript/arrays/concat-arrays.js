const arrayNumbersOne = [1, 2, 3]
const arrayNumbersTwo = [4, 5, 6]
const arrayNumberThree = [7, 8, 9]
const firstName = "João"

const arraysConcat = arrayNumbersOne.concat(arrayNumbersTwo, arrayNumberThree, firstName)
const arraySpread = [...arrayNumbersOne, firstName, ...arrayNumbersTwo, ...arrayNumberThree,]

console.log("[CONCATENADOS COM O MÉTODO CONCAT]", arraysConcat) // saída [1, 2, 3, 4, 5, 6, 7, 8, 9, "João"]
console.log("[CONCATENADOS COM O SPREAD OPERATOR ]", arraySpread) // saída [1, 2, 3, 4, 5, 6, 7, 8, 9, "João"]
