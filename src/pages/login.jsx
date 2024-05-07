import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useState'
import '../assets/home.css'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { username, password, onInputChange, onResetForm } = useForm({
    username: '',
    password: ''
  })

  const onLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:22523/login', {
        username,
        password
      })

      const token = response.data.token

      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', token)

      // Redirigir al usuario al dashboard
      navigate('/Dashboard', {
        replace: true,
        state: {
          logged: true,
          name: username
        }
      })

      onResetForm()
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      // Manejar el error de inicio de sesión, por ejemplo, mostrando un mensaje al usuario
    }
  }

  return (
  <div className='wrapper'>
    <form onSubmit={onLogin}>
      <h1>Iniciar Sesión</h1>

      <div className='input-group'>
        <input
          type='text'
          name='username'
          id='username'
          value={username}
          onChange={onInputChange}
          required
          autoComplete='off'
        />
        <label htmlFor='username'>Nombre:</label>
      </div>

      <div className='input-group'>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={onInputChange}
          required
          autoComplete='off'
        />
        <label htmlFor='password'>Contraseña:</label>
      </div>

      <button type='submit'>Entrar</button>
    </form>
  </div>
  )
}
