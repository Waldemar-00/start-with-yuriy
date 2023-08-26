function CostFormButtons(
  {
    onButtonHandler,
    unform
  }
) {
  return (
    <>
      <div className='buttons'>
        <div className="new-cost__actions">
          <button type='submit' onClick={onButtonHandler}>Added Expense</button>
        </div>
        {
          unform && (
            <div className="cancel">
              <button onClick={onButtonHandler}>Cancel</button>
            </div>
          )
        }
      </div>
    </>
  )
}
export default CostFormButtons