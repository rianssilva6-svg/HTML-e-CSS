import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState ('')
    const [email, setEmail] = useState ('')
    const [listaDeUsuario, setListaDeUsuario] = useState ([])

    
    const handlerAdicionarUsuario = (event) => {

        event.preventDefault()

        if (nome && email) {
            setListaDeUsuario ([...listaDeUsuario, {nome, email}])
            setNome('')
            setEmail('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Usuario</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input 
                    type="text"
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} 
                    />
                
                <input 
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
 />
                <button type='submit'>Adicionar</button>
            </form>
            <hr />

            <h2>Usuarios adicionados</h2>
            <ul>
                {listaDeUsuario.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>

        </div>
            
    )
}