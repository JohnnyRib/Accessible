import { Link } from 'react-router-dom'

function Header({ title, subtitle, role }) {
  return (
    <header className={`header header-${role}`}>
      <Link to="/" className="logo-container">
        <img src="/Imagenes/logo.png" alt="Logo Zentry" className="logo" />
      </Link>
      <div className="header-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  )
}

export default Header   // ← this line is required
