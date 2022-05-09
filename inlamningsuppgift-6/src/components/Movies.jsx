import React, { useState, useRef } from 'react'
import AddMovieForm from './AddMovieForm'
import Movie from './Movie'
const Movies = () => {
  const [movies, setMovies] = useState([
    /*  {
      id: 1,
      title: '',
      grade: 0,
    } */
  ])
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1

    setMovies([
      ...movies,
      { id: newId, title: inputRef.current.value, grade: 5 },
    ])

    inputRef.current.value = ''
  }
  const onDelete = (id) => {}
  return (
    <>
      <AddMovieForm onSubmit={onSubmit} useRef={inputRef} />
      <div className='mt-2'>
        <ul className='list-group'>
          {movies.map((movie) => (
            <Movie key={movie.id} item={movie} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Movies
