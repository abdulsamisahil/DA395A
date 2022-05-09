const Movie = (props) => {
  let stars = ''

  for (let i = 0; i < props.item.grade; i++) {
    stars += '<img src="../images/star.png" />'
  }

  return (
    <>
      <li className='list-group-item'>
        {props.item.title}
        <button
          className='btn btn-sm btn-danger float-end'
          onClick={() => {
            props.deleteItem(props.item.id)
          }}
        >
          X
        </button>
        {window.HTMLReactParser(stars)}
      </li>
    </>
  )
}

export default Movie
