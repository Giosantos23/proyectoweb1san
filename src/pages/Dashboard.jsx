/* eslint-disable camelcase */
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  // update
  const [updatedMovieTitle, setUpdatedMovieTitle] = useState('')
  const [updatedReleaseDate, setUpdatedReleaseDate] = useState('')
  const [updatedDirector, setUpdatedDirector] = useState('')
  const [updatedGenre, setUpdatedGenre] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [created_at, setCreatedAt] = useState('')

  // create
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newMovieTitle, setNewMovieTitle] = useState('')
  const [newReleaseDate, setNewReleaseDate] = useState('')
  const [newDirector, setNewDirector] = useState('')
  const [newGenre, setNewGenre] = useState('')

  // del
  const [postId, setPostId] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // update post

  const handleMovieTitleChange = (event) => {
    setUpdatedMovieTitle(event.target.value)
  }

  const handleReleaseDateChange = (event) => {
    setUpdatedReleaseDate(event.target.value)
  }

  const handleDirectorChange = (event) => {
    setUpdatedDirector(event.target.value)
  }

  const handleGenreChange = (event) => {
    setUpdatedGenre(event.target.value)
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handleCreatedAtChange = (event) => {
    setCreatedAt(event.target.value)
  }
  // create post
  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:22523/posts', {
        title: newTitle,
        content: newContent,
        movie_title: newMovieTitle,
        release_date: newReleaseDate,
        director: newDirector,
        genre: newGenre
      })

      if (response.status === 201) {
        console.log('Post creado exitosamente')
      } else {
        console.error('Error al crear el post')
      }
    } catch (error) {
      console.error('Error al crear el post:', error)
      setErrorMessage('Error al crear el post. Por favor, verifica los datos proporcionados.')
    }
  }

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleNewContentChange = (event) => {
    setNewContent(event.target.value)
  }

  const handleNewMovieTitleChange = (event) => {
    setNewMovieTitle(event.target.value)
  }

  const handleNewReleaseDateChange = (event) => {
    setNewReleaseDate(event.target.value)
  }

  const handleNewDirectorChange = (event) => {
    setNewDirector(event.target.value)
  }

  const handleNewGenreChange = (event) => {
    setNewGenre(event.target.value)
  }

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:22523/posts/${postId}`, {
        title,
        content,
        created_at,
        movieTitle: updatedMovieTitle,
        releaseDate: updatedReleaseDate,
        director: updatedDirector,
        genre: updatedGenre
      })

      if (response.status === 200) {
        console.log('Post actualizado exitosamente')
      } else {
        console.error('Error al actualizar el post')
      }
    } catch (error) {
      console.error('Error al actualizar el post:', error)
      setErrorMessage('Error al actualizar el post. Por favor, verifica el ID proporcionado.')
    }
  }

  // delete post
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:22523/posts/${postId}`)

      if (response.status === 200) {
        console.log('Post eliminado exitosamente')
      } else {
        console.error('Error al eliminar el post')
      }
    } catch (error) {
      console.error('Error al eliminar el post:', error)
      setErrorMessage('Error al eliminar el post. Por favor, verifica el ID proporcionado.')
    }
  }

  const handleInputChange = (event) => {
    setPostId(event.target.value)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className='input-group'>
        <input
          type="text"
          placeholder="ID del post"
          value={postId}
          onChange={handleInputChange}
        />
        <button onClick={handleDelete}>Eliminar Post</button>
      </div>

      <div className='input-group'>
        <input
          type="text"
          placeholder="Título de la película actualizado"
          value={updatedMovieTitle}
          onChange={handleMovieTitleChange}
        />
        <input
          type="text"
          placeholder="Fecha de lanzamiento actualizada"
          value={updatedReleaseDate}
          onChange={handleReleaseDateChange}
        />
        <input
          type="text"
          placeholder="Director actualizado"
          value={updatedDirector}
          onChange={handleDirectorChange}
        />
        <input
          type="text"
          placeholder="Género actualizado"
          value={updatedGenre}
          onChange={handleGenreChange}
        />
          <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Contenido"
          value={content}
          onChange={handleContentChange}
        />
        <input
          type="text"
          placeholder="Fecha de creación"
          value={created_at}
          onChange={handleCreatedAtChange}
        />
        <input
          type="text"
          placeholder="ID del post"
          value={postId}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdate}>Actualizar Post</button>
      </div>
       <div className='input-group'>
        <input
          type="text"
          placeholder="Título del nuevo post"
          value={newTitle}
          onChange={handleNewTitleChange}
        />

        <input
          type="text"
          placeholder="Contenido del nuevo post"
          value={newContent}
          onChange={handleNewContentChange}
        />
        <input
          type="text"
          placeholder="Título de la película"
          value={newMovieTitle}
          onChange={handleNewMovieTitleChange}
        />
        <input
          type="text"
          placeholder="Fecha de lanzamiento"
          value={newReleaseDate}
          onChange={handleNewReleaseDateChange}
        />
        <input
          type="text"
          placeholder="Director"
          value={newDirector}
          onChange={handleNewDirectorChange}
        />
        <input
          type="text"
          placeholder="Género"
          value={newGenre}
          onChange={handleNewGenreChange}
        />
        <button onClick={handleCreate}>Crear Post</button>
      </div>

      {errorMessage && <p>{errorMessage}</p>}

    </div>
  )
}
