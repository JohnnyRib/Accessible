import { Link } from 'react-router-dom'

function Sidebar({ title = 'Mapa web', links }) {
  return (
    <aside className="sidebar" aria-label="Mapa web lateral">
      <h2>{title}</h2>
      <nav aria-label="Mapa web">
        <ul className="sidebar-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
