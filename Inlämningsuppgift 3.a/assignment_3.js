$('#add-movie-form').on('submit', (e) => {
  e.preventDefault()

  const title = $('#title-field')

  let rating = ''

  /* Tar fram värdet av betyget och sparar det i ratings */
  $('#rating-field')
    .change(function () {
      $('#rating-field option:selected').each(function () {
        rating += $(this).index() + ''
      })
    })
    .trigger('change')

  /* Validera */
  if (title.val() === '' && rating === '0') {
    alert('Du måste ange film titel och betyg för att spara den...')
    return
  }
  if (title.val() === '') {
    alert('Du måste ange film titel för att spara filmen...')
    return
  }

  if (rating === '0') {
    alert('Du måste ange betyg för att spara filmen...')
    return
  } else {
    addFilm(title, rating)

    deleteFilm()
  }
})
/* Lägg till film */
const addFilm = (title, rating) => {
  /* Renderera elements till DOM */
  $('#movies').append(`
    
        <li>${title.val()}
        <img id="delete" src="./images/delete.png" />

    </li>`)

  /* Konvertera rating strängen till integer inför loopen */
  let rating_value = parseInt(rating)

  let i = 0

  /* Skapa och renderera till li i DOM antalet img elements baserad på betyg-valet */
  while (i < rating_value) {
    $('#movies li:last').append('<img src="./images/star.png" />')
    i++
  }
}

/* Att radera filmen sätter jag en eventhandler till förälder-element li isf, 
då elementet rendereras till DOM Dynmaniskt */
const deleteFilm = () => {
  $('li').on('click', "img[id^='delete']", function () {
    $(this).closest('li').remove()
  })
}
