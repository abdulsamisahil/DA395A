const Movie = (props) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.item.title}
        {window.HTMLReactParser(getStars(props.item.grade))}
        <button
          className='btn btn-sm btn-danger float-end'
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
  return `<img src=${process.env.PUBLIC_URL + '/star.png'}>`.repeat(
    parseInt(grade)
  )
}

export default Movie
