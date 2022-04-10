$(document).ready(() => {
  let request = null
  let title
  let my_url = 'http://www.omdbapi.com/?s='

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

        success: (data) => {
          try {
            getFilmList(data)
          } catch (error) {}
        },
        error: () => {
          const html = `<li class="list-group-item">

                          <div class="row d-flex fs-5 align-items-center">Ingen film hittades med titel ${title}</div>
                 
                        </li>
                        `
          $('#movies-list').append(html)
        },
      })
    }
  })
})

const getFilmList = (data) => {
  let html = ``

  data.Search.forEach((element) => {
    html += `
              <li class="list-group-item h-50">
                <div class="row d-flex align-items-center">
                  <div class="col">
                    <img
                      class="img-thumbnail mw-50 float-start"
                      src="${element.Poster}"
                      style="height: 200px;"
                    />
                  </div>
                  <div class="col">
                    <span class="fs-4">${element.Title}</span>
                  </div>
                  <div class="col">
                    <span class="badge fs-5 bg-success float-end">${element.Year}</span>
                  </div>
                </div>
              </li>
            `
  })

  $('#movies-list').append(html)
}
