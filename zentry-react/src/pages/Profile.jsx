import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const sidebarLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/events', label: 'Listado de eventos' },
  { to: '/search', label: 'Buscar evento' },
  { to: '/profile', label: 'Perfil de usuario' },
]

function Profile() {
  return (
    <>
      <Header title="Mi perfil" subtitle="Gestiona tus datos personales" role="usuario" />
      <div className="page-layout">
        <Sidebar links={sidebarLinks} />
        <main id="contenido-principal" className="main-content">
          <section className="form-section">
            <h2>Datos personales</h2>
            <p>Edita la información de tu cuenta.</p>

            <form>
              <fieldset>
                <legend>Mis datos</legend>

                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" id="username" name="username" defaultValue="Jugador" />

                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" defaultValue="usuario@zentry.com" />

                <button type="submit">Guardar cambios</button>
              </fieldset>
            </form>

            <section className="form-section">
              <h3>Cambiar contraseña</h3>
              <form>
                <fieldset>
                  <legend>Seguridad</legend>

                  <label htmlFor="current-password">Contraseña actual</label>
                  <input type="password" id="current-password" name="current-password" />

                  <label htmlFor="new-password">Nueva contraseña</label>
                  <input type="password" id="new-password" name="new-password" />

                  <button type="submit">Actualizar contraseña</button>
                </fieldset>
              </form>
            </section>

            <section className="login-opciones">
              <h3>Zona peligrosa</h3>
              <button type="button" className="btn danger">Dar de baja mi cuenta</button>
            </section>

            <Link to="/" className="btn">Volver al inicio</Link>
          </section>
        </main>
      </div>
    </>
  )
}

export default Profile
