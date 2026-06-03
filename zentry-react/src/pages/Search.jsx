import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const sidebarLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/search', label: 'Buscar evento' },
  { to: '/events', label: 'Listado de eventos' },
  { to: '/profile', label: 'Perfil de usuario' },
]

function Search() {
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fecha, setFecha] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // For now we just send the user to the listing. Later you can pass
    // these values as query params and filter the events.
    navigate('/events')
  }

  return (
    <>
      <Header title="Buscar eventos" subtitle="Encuentra eventos según tus intereses" role="usuario" />
      <div className="page-layout">
        <Sidebar links={sidebarLinks} />
        <main id="contenido-principal" className="main-content">
          <section className="form-section">
            <h2>Formulario de búsqueda</h2>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Buscar evento</legend>

                <label htmlFor="nombreEvento">Nombre del evento</label>
                <input
                  type="text"
                  id="nombreEvento"
                  name="nombre"
                  placeholder="Ej.: Festival de Invierno"
                  maxLength={60}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="categoria">Categoría</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Todas</option>
                  <option value="musica">Música</option>
                  <option value="deporte">Deporte</option>
                  <option value="teatro">Teatro</option>
                  <option value="tecnologia">Tecnología</option>
                </select>

                <label htmlFor="fecha">Fecha (opcional)</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />

                <button type="submit">Buscar</button>
              </fieldset>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default Search
