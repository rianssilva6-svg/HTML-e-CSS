import { useState } from 'react'
import './style.css'

export default function AdicionarTime() {
    const [nome,setNome] = useState('')
    const [nacionalidade,setNacionalidade] = useState('')
    const [listaDeTime, setListaDeTime] = useState([])
    const handlerAdicionarTime = (event) => {

        event.preventDefault()

        if (nome && nacionalidade) {
            setListaDeTime ([...listaDeTime, {nome, nacionalidade}])
            setNome('')
            setNacionalidade('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Usuario</h2>
            <form onSubmit={handlerAdicionarTime}>
                <input 
                    type="text"
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} 
                    />
                
                <input 
                    type="text"
                    placeholder='Email'
                    value={nacionalidade}
                    onChange={(e) => setNacionalidade(e.target.value)} 
 />
                <button type='submit'>Adicionar</button>
            </form>
            <hr />

            <h2>Times adicionados</h2>
            <ul>
                {listaDeTime.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.nacionalidade}
                    </li>
                ))}
            </ul>

        </div>
            
    )
}
