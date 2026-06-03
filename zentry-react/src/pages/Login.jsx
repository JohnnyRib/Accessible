import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <Header title="Login" subtitle="Acceso a la plataforma" role="publico" />
      <div className="page-layout">
        <main className="main-content">
          <section className="form-section">
            <h2>Iniciar sesión</h2>
            <form>
              <fieldset>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="usuario" required />

                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Entrar</button>
              </fieldset>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default Login   // ← this line is required
