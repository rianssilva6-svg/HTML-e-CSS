const listaDeNomes = ["Marta", "José", "Maria" ]

console.log("Exibindo todos os elementos:")
console.log(listaDeNomes)

console.log("\nExibindo apenas o primeiro elemento")
console.log(listaDeNomes[0])

console.log("\nExibindo apenas o segundo elemento")
console.log(listaDeNomes[1])

console.log("\nExibindo apenas o terceiro elemento")
console.log(listaDeNomes[2])

// Adicionando

console.log("\nAdicionando um elemento: ")
listaDeNomes.push ("Marilia")
console.log(listaDeNomes)

console.log("\nAdicionando um elemento: ")
listaDeNomes.push ("Jonas")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento")
// Removendo no indice 2, remover 1 elemento.
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

// Sua vez, remova apenas o segundo elemento da lista
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

// Removendo apenas o ultimo elemento

console.log("\nRemovendo apenas o ultimo elemento")
listaDeNomes.pop()
console.log(listaDeNomes)

// Removendo apenas o primeiro
console.log("\nRemovendo apenas o primeiro")
listaDeNomes.shift()
console.log(listaDeNomes)          