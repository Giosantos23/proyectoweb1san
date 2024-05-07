import React, { useState, useEffect } from 'react'
import '../assets/home.css'
const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:22523/posts')
        if (!response.ok) {
          throw new Error('Error al obtener posts')
        }
        const dataJson = await response.json()
        setPosts(dataJson)
      } catch (error) {
        console.error('Error con el API:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container">
        <div className="header"> {/* Aplica la clase CSS para el encabezado */}

        </div>
        <div className="titulo"> {/* Aplica la clase CSS para el título */}
            <h1>Peliculas 2024</h1>
        </div>
        <div className="posts-container">
            <h2>Posts</h2>
            {posts.map(post => (
                <div key={post.id} className="post"> {/* Aplica la clase CSS para cada publicación */}
                    <h3>{post.title}</h3>
                    <p>{post.release_date}</p>
                    <p>{post.director}</p>
                    <p>{post.genre}</p>
                </div>
            ))}
        </div>
        <div className="footer"> {/* Aplica la clase CSS para el pie de página */}
            <p>Sistemas y Tecnologías Web Peliculas 2024.</p>
            <nav>
                <ul>
                    <li>22523</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
export default Home
