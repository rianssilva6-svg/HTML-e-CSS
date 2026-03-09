const listafamilia = ["Iran","Marleide","Maylane","Rian","Michele","Cássio"]

console.log("=== Minha familia ===")

console.log("\n=== Pai ===")
console.log(listafamilia[0])

console.log("\n=== Mãe ===")
console.log(listafamilia[1])

console.log("\n=== Irmã ===")
console.log(listafamilia[2])

console.log("\n=== Eu ===")
console.log(listafamilia[3])

console.log("\n=== Irmã ===")
console.log(listafamilia[4])

console.log("\n=== Cunhado ===")
console.log(listafamilia[5])

// Removendo as irmãs
console.log("\nRemovendo as irmãs")
listafamilia.splice(2,1)
listafamilia.splice(3,1)
console.log(listafamilia)

// Adicionando as irmãs novamente 
console.log("\nAdicionando as irmãs novamente")
listafamilia.push ("Maylane","Michele")
console.log(listafamilia)

// Removendo o primeiro e o ultimo da lista
console.log("\nRemovendo o primeiro e o ultimo da lista")
listafamilia.shift()
listafamilia.pop()
console.log(listafamilia)

