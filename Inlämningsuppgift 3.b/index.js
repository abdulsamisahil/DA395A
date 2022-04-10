$(document).ready(() => {
  let request = null
  let image, title, year
  let my_url = 'http://www.omdbapi.com/?t='

  $('#search-input').keyup(function () {
    $('#movies-list').empty()

    title = $(this).val()

    if (title.length > 2) {
      if (request != null) {
        request.abort()
      }

      request = $.ajax({
        type: 'GET',
        url: my_url + `${title}&apikey=e96a25a4`,
        dataType: 'JSON',
        error: () => {
          const html = `<li class="list-group-item">

                        <div class="row d-flex fs-5 align-items-center">Ingen film hittades med titel ${title}</div>
                 
                        </li>
                        `
          $('#movies-list').append(html)
        },
        success: (data) => {
          /* http://www.omdbapi.com/?s=Titanic&apikey=e96a25a4 */
          /* Returns an object, containing a Search object with first object as an array */
          /*  let movies
          //movies.push(data.Search)

          $.each(data.Search, (key, value) => {
            movies = {
              title: value.Title,
              year: value.Year,
              poster: value.Poster,
            }
            // console.log('Title: ' + value.Title + ' | Year: ' + value.Year)
          })

          let { title, poster, year } = movies

          console.log(title, poster, year) */
          //let title, image, year

          /* movies[0].forEach((element) => {
            title = element.Title
            image = element.Poster
            year = element.Year
          }) */
          //console.log(Title + ': ' + Poster + ': ' + Year)
          // console.log(movies)

          const html = `<li class="list-group-item">

                            <div class="row d-flex align-items-center">
                                <div class="col">
                                    <img
                                        class="img-thumbnail float-start"
                                        src="${data.Poster}"
                                    />
                                </div>
                                <div class="col">
                                    <span class="fs-4">${data.Title}</span>
                                </div>
                                <div class="col">
                                    <span class="badge fs-5 bg-success float-end">${data.Year}</span>
                                </div>
                            </div>
        
                        </li>
                        `

          $('#movies-list').append(html)
        },
      })
    }
  })
})
