import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const sidebarLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/events', label: 'Listado de eventos' },
  { to: '/search', label: 'Buscar evento' },
  { to: '/profile', label: 'Perfil de usuario' },
]

function Home() {
  return (
    <>
      <Header title="Zentry" subtitle="Bienvenido, Jugador" role="usuario" />
      <div className="page-layout">
        <Sidebar links={sidebarLinks} />
        <main id="contenido-principal" className="main-content">
          <section className="hero">
            <h2>Descubre eventos de forma simple</h2>
            <p>Explora torneos, festivales y ferias tecnológicas desde tu panel de usuario.</p>
            <div className="hero-actions">
              <Link to="/events" className="btn">Ver todos los eventos</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Home
