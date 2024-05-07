import { useState } from 'react'

const BASE_URL = 'http://localhost:3000'

// Función para obtener el token del localStorage
const getToken = () => {
  return localStorage.getItem('token')
}

const useFetchWithToken = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWithToken = async (url, options = {}) => {
    setLoading(true)
    setError(null)

    const token = getToken()

    if (!token) {
      setError(new Error('Token JWT no encontrado'))
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }

      const data = await response.json()
      setLoading(false)
      return data
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  return { fetchWithToken, loading, error }
}

export default useFetchWithToken
