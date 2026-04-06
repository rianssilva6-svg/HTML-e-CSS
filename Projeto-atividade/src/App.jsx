import './App.css'
import AdicionarTime from './components/AdicionarTime/Index'
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
        <Footer/>
      </div>
    </>
  )
}

export default App
