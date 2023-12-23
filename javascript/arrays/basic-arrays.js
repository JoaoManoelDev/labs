/* 
  O método slice() é uma função em JavaScript que opera em arrays e strings.
  Ele retorna uma parte de um array ou string, selecionada de acordo com os
  índices fornecidos, sem modificar o array ou a string original. O método
  slice() aceita dois parâmetros opcionais: o índice de início e o índice de fim.

  array.slice(início, fim)

  array: O array original.
  início: Índice de início da extração (inclusive).
  fim: Índice de fim da extração (exclusive). O elemento no índice fim não é incluído na fatia.
*/

// Criar array

//                    0        1       2        3
const arrayNames = ["João", "Karol", "Esh", "Juninho"]

const newArrayNames = arrayNames.slice(0, 3)

newArrayNames.push("Moisés")

console.log("[NOVO ARRAY] ->", newArrayNames) // saída: ["João", "Karol", "Esh", "Moises"]

// Transformar String em Array

const fullName = "João Manoel Araujo Junior"
const nameArray = fullName.split(" ")

console.log("[TRANSFORMAR STRING EM ARRAY] ->", nameArray) // saída: [ 'João', 'Manoel', 'Araujo', 'Junior' ]

// Transformar Array em String

const nameString = nameArray.join(" ")

console.log("[TRANSFORMAR ARRAY EM STRING] ->", nameString) // saída: "João Manoel Araujo Junior"
