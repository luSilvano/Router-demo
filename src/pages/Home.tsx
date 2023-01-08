
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="bg-red-500">
      <h3>Pagina principală</h3>
      <p>Site-ul este facut în română pentru că invaț română.</p>

      <div>
        <h4>Listă de basme</h4>
        <Link to="/scufitarosie">Scufita Roșie</Link><br />
        <Link to="/hanselsigretel">Hansel și Gretel</Link>
      </div>
    </div>
  )
}