import { useState } from 'react'
import './style.css'

function InfoCurso () {
    const [nome, stNome] = useState("Programação de aplicativos")
    const[cargaHoraria, setCargaHoraria] = useState ("90h")
    const [local, setLocal] = useState ("SENAI")

    return (
        <div className='Info-curso'>
            <h2>Dados do curso:</h2>
            <p>Nome: { nome }</p>
            <p>Carga horária: { cargaHoraria }</p>
            <p>Local: { local }</p>

        </div>
    )
}

export default InfoCurso