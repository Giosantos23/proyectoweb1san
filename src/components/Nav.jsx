import React from 'react'
import {
  Link,
  Outlet,
  useLocation,
  useNavigate
} from 'react-router-dom'
import logo6 from '../assets/logo6.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Nav = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  console.log(state)

  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }

  return (
  <>
    <header>
      <h1>
        <Link to='/'>
          <img src={logo6} alt="logo" />
        </Link>
      </h1>
    </header>

    <div className="estbotones">
      <nav>
        {state?.logged
          ? (
          <div className='user'>
            <span className='username'>{state?.name}</span>
            <button className='btn-logout' onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
            )
          : (
          <>
            <Link to='/login' className="btn btn-primary btn-block">Iniciar sesión</Link>
            <span className="divider"> | </span>
            <Link to='/register' className="btn btn-primary btn-block">Registrarse</Link>
          </>
            )}
      </nav>
    </div>

    <Outlet />
  </>
  )
}
