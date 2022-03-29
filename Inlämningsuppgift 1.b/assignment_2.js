//Grabbing the add item button by Id
const addItem = document.querySelector('#add-item')

// arrar to store the items
const items = []

const handleItems = () => {
  // add item btn listener
  addItem.addEventListener('click', () => {
    const input = window.prompt('Ange sak:')
    // push the user input to items array
    items.push(input)

    //Grabbing ul element and creating li and span
    const ul = document.querySelector('#items')
    const li = document.createElement('li')
    const deleteItem = document.createElement('span')
    deleteItem.textContent = 'Delete'

    // Going through items array and setting innerHtml to the specified item on callback
    items.map((item) => {
      li.innerHTML = item
    })

    // appending the span to the li
    li.appendChild(deleteItem)

    // Now rendering the created li to main ul grabbed by id #items
    ul.appendChild(li)

    // Grabbing the span elements and returns a list,
    // Going through the span list and listening to the clicked item
    document.querySelectorAll('span').forEach((item) => {
      item.onclick = () => {
        /* 
        //To filter and delete the item from the items array as well
        const deletedItem = item.parentElement.childNodes[0].nodeValue
        items.filter((array) => {
          return array != deletedItem
        }) */

        // Removing the span parent element which is li including span
        item.parentElement.remove()
      }
    })
  })
}
// Call the function
handleItems()
