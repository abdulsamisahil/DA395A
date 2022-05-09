import React, { useState, useRef } from 'react'
import AddMovieForm from './AddMovieForm'
import Movie from './Movie'
const Movies = () => {
  const [movies, setMovies] = useState([])
  const [grade, setGrade] = useState(0)

  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    if (inputRef.current.value === '') {
      alert('Lägg till filmnamn för att spara den')
      return
    }
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1

    setMovies([
      ...movies,
      { id: newId, title: inputRef.current.value, grade: 3 },
    ])

    inputRef.current.value = ''
  }
  const deleteItem = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const handleGradeChange = (e) => {
    setGrade(e.target.value)

    console.log(grade)
  }
  return (
    <>
      <AddMovieForm
        onSubmit={onSubmit}
        useRef={inputRef}
        defaultValue={grade}
        handleGradeChange={handleGradeChange}
      />
      <div className='mt-2'>
        <ul className='list-group'>
          {movies.map((movie) => (
            <Movie key={movie.id} item={movie} deleteItem={deleteItem} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Movies
