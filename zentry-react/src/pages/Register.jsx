import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <Header title="Registro de usuario" subtitle="Crear cuenta de usuario" role="publico" />
      <div className="page-layout">
        <main id="contenido-principal" className="main-content">
          <section className="form-section">
            <h2>Crear cuenta</h2>
            <p>Introduce tus datos para registrarte.</p>
            <form>
              <fieldset>
                <legend>Datos de Registro</legend>
                <label htmlFor="profile_image">Foto de perfil</label>
                <input type="file" id="profile_image" name="profile_image" accept="image/*" />
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="repeat-password">Repetir Contraseña</label>
                <input type="password" id="repeat-password" name="repeat-password" required />
                <label htmlFor="role">Tipo de usuario</label>
                <select id="role" name="role">
                  <option value="Cliente">Cliente</option>
                  <option value="Promotor">Promotor</option>
                </select>
                <button type="submit">Registrarse</button>
              </fieldset>
            </form>
            <section className="login-opciones">
              <h3>¿Ya tienes cuenta?</h3>
              <Link to="/login" className="btn">Iniciar sesión</Link>
            </section>
          </section>
        </main>
      </div>
    </>
  )
}

export default Register
