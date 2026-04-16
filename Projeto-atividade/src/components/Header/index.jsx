import './style.css';
import Logo from './assents/images.png'
// Importe a sua logo aqui. Ajuste o caminho conforme a sua pasta.

export default function Header() {
    return (
        <header className='header'>
            <div className='header-content'>
                <img src={Logo} alt="Logo fifa" className='logo'/>
                <h1>Sistema de Times</h1>
            </div>
        </header>
    );
}