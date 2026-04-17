import { useState } from 'react'
import './style.css'

export default function AdicionarTime() {
    const [nome,setNome] = useState('')
    const [nacionalidade,setNacionalidade] = useState('')
    const [serie, setSerie] = useState('')
    const [listaDeTime, setListaDeTime] = useState([])
    const handlerAdicionarTime = (event) => {

        event.preventDefault()

        if (nome && nacionalidade && serie) {
            setListaDeTime ([...listaDeTime, {nome, nacionalidade, serie}])
            setNome('')
            setNacionalidade('')
            setSerie('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Time</h2>
            <form onSubmit={handlerAdicionarTime}>
                <input 
                    type="text"
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} 
                    />
                
                <input 
                    type="text"
                    placeholder='Nacionalidade'
                    value={nacionalidade}
                    onChange={(e) => setNacionalidade(e.target.value)} 
                />
                <input 
                    type="text"
                    placeholder='Série'
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}    
                />
 
                <button type='submit'>Adicionar</button>
            </form>
            <hr />

            <h2>TIMES ADICIONADOS</h2>
            <ul>
                {listaDeTime.map((usuario, index) => (
                    <li key={index}>
                        Time: {usuario.nome} <br/> Nacionalidade: {usuario.nacionalidade}  <br />Série: {usuario.serie}
                        <br />
                    </li>
                ))}
            </ul>

        </div>
            
    )
}
