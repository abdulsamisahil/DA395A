const buttons = document.querySelectorAll('button')
const messageBox = document.querySelector('div')

//ES6 Syntax, the spread operator to remove all css classes by once
const clearClassList = () => {
  messageBox.classList.remove(...messageBox.classList)
}

//Object including three properties and func values
const buttonId = {
  success: () => {
    clearClassList()
    messageBox.classList.add('success')
  },
  error: () => {
    clearClassList()
    messageBox.classList.add('error')
  },
  info: () => {
    clearClassList()
    messageBox.classList.add('info')
  },
}

// Button listener
const buttonListener = () => {
  // Going through the buttons list and reacts to each btn based on their id value
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (buttons[i].id === 'success') {
        buttonId.success()
      }

      if (buttons[i].id === 'error') {
        buttonId.error()
      }

      if (buttons[i].id === 'info') {
        buttonId.info()
      }
    })
  }
}

buttonListener()

// Simple solution to grab every button element and then listen to each one separately
/* const success = document.querySelector('#success')
const error = document.querySelector('#error')
const info = document.querySelector('#info')

success.addEventListener('click', () => {
  clearClassList()
  messageBox.classList.add('success')
})
error.addEventListener('click', () => {
  clearClassList()
  messageBox.classList.add('error')
})
info.addEventListener('click', () => {
  clearClassList()
  messageBox.classList.add('info')
})
 */
