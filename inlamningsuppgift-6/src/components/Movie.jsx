const Movie = (props) => {
  return (
    <>
      <li className='list-group-item d-flex bd-highlight align-items-center'>
        <div className='p-2 flex-grow-1 bd-hightlight'>{props.item.title}</div>
        {window.HTMLReactParser(getStars(props.item.grade))}
        <button
          className='btn btn-sm btn-danger p-2 bd-highlight'
          onClick={() => {
            props.deleteItem(props.item.id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}

const getStars = (grade) => {
  return `<img className="btn btn-sm p-2 bd-highlight" src=${
    process.env.PUBLIC_URL + '/star.png'
  }>`.repeat(parseInt(grade))
}

export default Movie
