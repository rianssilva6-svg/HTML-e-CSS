// Vetor de nomes
const listaDeNomes = ["Ana", "Maria","Joana"]

// Exemplo com vetor de numeros
const listaDeNumeros = [1,2,3,4,5]

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados como uma classe
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "José", idade: 15},
    {nome: "Carlos", idade: 12},
    {nome: "Pedro", idade: 18},
]

// Percorrendo e exibindo os elementos do vetor
// ForEach é uma função com laço de repetição
console.log("Exibindo todos os usuarios do vetor")
listaDeUsuarios.forEach(u => {
    console.log(`${u.nome} tem ${u.idade} anos.`)
})

// Como os antigos
console.log("\nExibindo todos os usuarios do vetor (Modelo Antigo) ")
for (let i = 0; i < listaDeUsuarios.length; i++){
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18")
const maioridade = listaDeUsuarios.filter(u => u.idade >= 18)
// Use as {} caso precise de mais linha
maioridade.forEach (u => console.log(`${u.nome} tem ${u.idade} anos.`))


console.log("\nFiltrando menores de 18")   
const minoridade = listaDeUsuarios.filter (u => u.idade < 18)
minoridade.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))


console.log("\nNa lista de números, filtre e mostre apenas numeros pares")
const pares = listaDeNumeros.filter (n=>n%2==0)
console.log(pares)


console.log("\nNa lista de nomes, mostre todos os nomes com forEach")
listaDeUsuarios.forEach(u => (
    console.log(`Nome: ${u.nome}`)
))