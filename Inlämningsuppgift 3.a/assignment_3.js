$('#add-movie-form').on('submit', (e) => {
  e.preventDefault()

  const title = $('#title-field')

  let rating = ''

  $('#rating-field')
    .change(function () {
      $('#rating-field option:selected').each(function () {
        rating += $(this).index() + ''
      })
    })
    .trigger('change')

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
    //Add movie now

    $('#movies').append(`
    
        <li>${title.val()}
        <img src="./images/delete.png" />

    
    </li>`)

    rating_value = parseInt(rating)

    let i = 0

    while (i < rating_value) {
      // Bugg here, solution: create a collection of images tags
      // and out of the loop append the collection to li once.

      $('li').append('<img src="./images/star.png" />')

      i++
    }

    console.log('add movie now...' + typeof rating_value)
  }

  /*  if (!rating.get().length > 0) {
  } */

  /*  rating.each(function () {
    if ($(this).is(':selected')) {
      alert('Du måste ange betyd för att spara filmen...')
    }
  }) */
  /* if (!rating.isSelected()) {
  } */
  // console.log('Spara film startades...')
})
