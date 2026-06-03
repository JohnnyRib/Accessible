import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { getEventById } from '../data/events'

const sidebarLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/search', label: 'Buscar evento' },
  { to: '/events', label: 'Listado de eventos' },
  { to: '/profile', label: 'Perfil de usuario' },
]

function EventDetail() {
  const { id } = useParams()
  const event = getEventById(id)

  if (!event) {
    return (
      <>
        <Header title="Evento no encontrado" subtitle="" role="usuario" />
        <div className="page-layout">
          <Sidebar links={sidebarLinks} />
          <main id="contenido-principal" className="main-content">
            <p>No se ha encontrado el evento solicitado.</p>
            <Link to="/events" className="btn">Volver al listado</Link>
          </main>
        </div>
      </>
    )
  }

  return (
    <>
      <Header title="Detalle del evento" subtitle="Información completa del evento" role="usuario" />
      <div className="page-layout">
        <Sidebar links={sidebarLinks} />
        <main id="contenido-principal" className="main-content detalle-layout">
          <article className="detalle-evento">
            <header className="detalle-header">
              <h2>{event.title}</h2>
              <p className="detalle-meta"><strong>Fecha:</strong> {event.date}</p>
              <p className="detalle-meta"><strong>Lugar:</strong> {event.place}</p>
            </header>

            <img className="imagen-evento" src={event.image} alt={`Imagen de ${event.title}`} />

            <section>
              <h3>Descripción</h3>
              <p>{event.description}</p>
            </section>

            {event.video && (
              <section>
                <h3>Vídeo del evento</h3>
                <div className="media-container">
                  <video controls preload="metadata" className="media-player">
                    <source src={event.video} type="video/mp4" />
                  </video>
                </div>
              </section>
            )}

            {event.audio && (
              <section>
                <h3>Audio informativo</h3>
                <div className="media-container">
                  <audio controls preload="metadata" className="media-player">
                    <source src={event.audio} type="audio/mpeg" />
                  </audio>
                </div>
              </section>
            )}

            <nav className="acciones" aria-label="Acciones del evento">
              <Link className="btn" to="/events">Volver al listado</Link>
              <Link className="btn" to="/search">Buscar otro evento</Link>
            </nav>
          </article>
        </main>
      </div>
    </>
  )
}

export default EventDetail
