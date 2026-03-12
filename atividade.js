const listaDeAlunos = [
    {Nome: "Ana", nota: 5.0},
    {Nome: "Bruno", nota: 10.0},
    {Nome: "Carla", nota: 2.0},
    {Nome: "Andrea", nota: 7.0},
    {Nome: "Marta", nota: 6.0},
]


console.log("Encontre a aluna Marta e mostra o nome e a media dela.")
const encontraraluna = listaDeAlunos.find(a=>a.Nome ==="Marta")
console.log (`Aluna: ${encontraraluna.Nome} \nnota: ${encontraraluna.nota}`)

console.log ("\nMostre a média da turma")
const media = listaDeAlunos.reduce((total, aluno) => total + aluno.nota, 0)
console.log (media / 5)

console.log("\nMostre o nome e a nota dos alunos com nota abaixo de 7.0")
const reprovado = listaDeAlunos.filter (a=>a.nota < 7)
reprovado.forEach(a=>console.log(`Aluno (a): ${a.Nome} nota: ${a.nota}`))

console.log("\nMostre o nome e a nota dos alunos com nota acima ou igual 7.0")
const aprovado = listaDeAlunos.filter (a=>a.nota >= 7)
aprovado.forEach(a=>console.log(`Aluno (a): ${a.Nome} nota: ${a.nota}`))