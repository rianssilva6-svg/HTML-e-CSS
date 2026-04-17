import './App.css'
import AdicionarTime from './components/AdicionarTime/Index'
import AgenteIA from './components/Agente-IA'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className='app'>
        <Header/>
        <main>
          <AdicionarTime/>
        </main>
        <AgenteIA/>
        <Footer/>
      </div>
    </>


  )
}

export default App
