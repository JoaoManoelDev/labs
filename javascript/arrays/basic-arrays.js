// Create Array

const arrayNames = ["João", "Karol", "Esh", "Juninho"]

const newArrayNames = arrayNames.slice(0, 3)

newArrayNames.push("Moisés")

console.log("[NEW ARRAY] ->", newArrayNames) // output: ["João", "Karol", "Esh", "Moises"]

// Transform String in Array

const name = "João Manoel Araujo Junior"
const nameArray = name.split(" ")

console.log("[TRANSFORM STRING IN ARRAY] ->", nameArray) // output: [ 'João', 'Manoel', 'Araujo', 'Junior' ]

// Transform Array in String

const nameString = nameArray.join(" ")

console.log("[TRANSFORM ARRAY IN STRING] ->", nameString) // output: "João Manoel Araujo Junior"
