import './style.css'

function InfoAluno() {
    const nome = "João Silva"
    const idade = 23
    const curso = "Desenvolvimento de Sistema"

    return (
    <div className='Container-centralizado'>
        <div className='info-aluno'>
            <h2>Informações do aluno: </h2>
            <p>Nome: { nome }</p>
            <p>Idade: { idade }</p>
            <p>Curso: { curso }</p>
        </div>

    </div>    
    )
}

export default InfoAluno