const Movie = (props) => {
  return (
    <>
      <li className='list-group-item'>
        {props.item.title}
        <button
          className='btn btn-sm btn-danger float-end'
          onClick={props.onDelete}
        >
          X
        </button>
      </li>
    </>
  )
}

export default Movie
