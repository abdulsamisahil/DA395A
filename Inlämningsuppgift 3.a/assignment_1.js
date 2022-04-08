//$

$(document).ready(() => {
  const num1 = $('#number-1')
  const num2 = $('#number-2')
  const sum = $('#result-box')

  $('input').keyup(() => {
    if (num1.val() != '' && num2.val() != '') {
      sum.val(num1.val() * num2.val())
    } else sum.val('')
  })
})
