const Movie = (props) => {
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
        {window.HTMLReactParser(getStars(props.item.grade))}
      </li>
    </>
  )
}

const getStars = (grade) => {
  return "<img src='../images/star.png'>".repeat(parseInt(grade))
}

export default Movie
