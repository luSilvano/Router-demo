
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import { Home } from './pages/Home'
import { ScufitaRosie } from './pages/ScufitaRosie'
import { HanselSiGretel } from './pages/HanselSiGretel'

function App() {

  return (
    <div className="App">
      <h1>Basme în Română</h1>
      <nav>
        <Link to='/'>Pagina principală</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scufitarosie" element={<ScufitaRosie />} />
        <Route path="/hanselsigretel" element={<HanselSiGretel />} />
      </Routes>
    </div>
  )
}

export default App
