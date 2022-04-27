const printMovies = (movies) => {
  $('#movie-list').html('')
  movies.map((movie) => {
    $('#movie-list').append(`
        <li id="${movie.id}" data-grade="${movie.grade}" data-title="${
      movie.title
    }">
            ${movie.title}
            <img src="./images/delete.png" alt="Delete movie" class="delete-movie">
            ${getStars(movie.grade)}
        </li>`)
  })
}

const loadMovies = () => {
  const movies = JSON.parse(localStorage.getItem('movies')) || []

  return movies
}

const getStars = (rating) => {
  let stars = ''
  for (let i = 0; i < rating; i++)
    stars += ' <img src="./images/star.png" alt="Star">'

  return stars
}

const saveMovies = (movies) =>
  localStorage.setItem('movies', JSON.stringify(movies))

$('#new-movie-form').on('submit', (e) => {
  let rating = ''
  $('select')
    .change(function () {
      $('select option:selected').each(function () {
        rating += $(this).index() + ''
      })
    })
    .trigger('change')

  const title = $('#title')
  const grade = parseInt(rating)

  let movies = loadMovies()

  if (validate(title, grade)) {
    movies.push({ id: Date.now(), title: title.val(), grade: grade })

    saveMovies(movies)
    printMovies(movies)
  }

  $('#new-movie-form').trigger('reset')
})

const validate = (title, grade) => {
  if (title.val() === '' || grade === 0) {
    alert('Du måste ange båda film titel och betyg för att spara den...')
    return false
  }

  return true
}

$('#movie-list').on('click', '.delete-movie', function () {
  const movies = loadMovies()
  const id = $(this).closest('li').attr('id')

  const filteredMovies = movies.filter((movie) => movie.id != id)
  saveMovies(filteredMovies)
  $(this).closest('li').remove()
})

// Skriver ut filmerna i vår lista när sidan laddats klart
$(document).ready(() => {
  const movies = loadMovies()
  printMovies(movies)
})
