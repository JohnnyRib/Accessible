import { Link } from 'react-router-dom'

function EventCard({ id, title, image, category, date, place }) {
  return (
    <article className="evento">
      <h3>{title}</h3>
      {image && <img src={image} alt={`${title} Banner`} />}
      {category && <p><strong>Categoría:</strong> {category}</p>}
      {date && <p><strong>Fecha:</strong> {date}</p>}
      {place && <p><strong>Lugar:</strong> {place}</p>}
      <div className="acciones">
        <Link to={`/events/${id}`} className="btn">Ver detalles</Link>
      </div>
    </article>
  )
}

export default EventCard
