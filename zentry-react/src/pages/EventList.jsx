import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import EventCard from '../components/EventCard'
import { events } from '../data/events'

const sidebarLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/search', label: 'Buscar evento' },
  { to: '/events', label: 'Listado de eventos' },
  { to: '/profile', label: 'Perfil de usuario' },
]

function EventList() {
  return (
    <>
      <Header title="Listado de eventos" subtitle="Explora los resultados disponibles" role="usuario" />
      <div className="page-layout">
        <Sidebar links={sidebarLinks} />
        <main id="contenido-principal" className="main-content">
          <section>
            <h2>Resultados</h2>
            <p>Mostrando eventos disponibles.</p>
          </section>
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </main>
      </div>
    </>
  )
}

export default EventList
