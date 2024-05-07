import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useState'
import axios from 'axios'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const { username, password, onInputChange, onResetForm } = useForm({
    username: '',
    password: ''
  })

  const onRegister = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:22523/register', {
        username,
        password
      })

      console.log('Registro exitoso:', response.data.message)

      navigate('/Dashboard', {
        replace: true,
        state: {
          logged: true,
          name: username
        }
      })

      onResetForm()
    } catch (error) {
      console.error('Error al registrar usuario:', error)
    }
  }

  return (
    <div className='wrapper'>
      <form onSubmit={onRegister}>
        <h1>Registrarse</h1>

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

        <button type='submit'>Registrarse</button>
      </form>
    </div>
  )
}
