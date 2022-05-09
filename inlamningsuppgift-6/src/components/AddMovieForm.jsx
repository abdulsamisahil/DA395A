const AddMovieForm = (props) => {
  const { onSubmit, useRef, handleGradeChange, defaultValue } = props
  return (
    <>
      <h1>Min filmlista</h1>

      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Lägg till en film</legend>

          <label htmlFor='title-field'>Titel:</label>
          <input
            type='text'
            id='title-field'
            className='form-control'
            ref={useRef}
          />

          <label htmlFor='rating-field'>Betyg:</label>

          <select
            type='text'
            defaultValue={defaultValue}
            onChange={handleGradeChange}
            className='form-control'
          >
            <option value='0'>Välj betyg här...</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>

          <input type='submit' className='btn btn-success mt-3' />
        </fieldset>
      </form>
    </>
  )
}

export default AddMovieForm
