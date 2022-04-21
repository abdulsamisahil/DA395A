// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$('#newsletter-form').on('submit', (e) => {
  // Hindra formuläret från att skicka iväg användaren.
  e.preventDefault()

  // Här placerar ni er validerings kod.
  const input = $('input')
  const name = $('#name-field')
  const age = $('#age-field')
  const email = $('#email-field')

  input.each(function () {
    if ($(this).val() == '') {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'white')
    }
    $(this).keyup(function () {
      $(this).css('background-color', 'white')
    })
  })

  // Om allting var korrekt - skicka vidare användaren.
  if (name.val() != '' && age.val() != '' && email.val() != '') {
    $('#newsletter-form')[0].submit()
    $('#newsletter-form').trigger('reset')
  }
})
