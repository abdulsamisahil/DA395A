import React, { useState, useRef } from 'react'
import AddMovieForm from './AddMovieForm'
import Movie from './Movie'
import OrderByAlphaButton from './OrderByAlphaButton'
import OrderByGradeButton from './OrderByGradeButton'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [grade, setGrade] = useState('0')

  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    if (inputRef.current.value === '' || grade === '0') {
      alert('Du måste ange både titel & betyg för att kunna spara filmen!')
      return
    }
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1

    setMovies([
      ...movies,
      { id: newId, title: inputRef.current.value, grade: grade },
    ])

    inputRef.current.value = ''
    setGrade('0')
  }

  const deleteItem = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const sortByAlpa = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      return b.title - a.title
    })

    setMovies(sortedMovies.reverse())
    console.log('ByAlpha')
  }

  const sortByGrade = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      return b.grade - a.grade
    })

    setMovies(sortedMovies)
    console.log('ByGrade')
  }

  return (
    <>
      <AddMovieForm
        onSubmit={onSubmit}
        useRef={inputRef}
        defaultValue={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <div className='mt-2'>
        <ul className='list-group'>
          {movies.map((movie) => (
            <Movie key={movie.id} item={movie} deleteItem={deleteItem} />
          ))}
        </ul>
      </div>
      <OrderByAlphaButton clickHandler={sortByAlpa} />
      <OrderByGradeButton clickHandler={sortByGrade} />
    </>
  )
}

export default Movies
