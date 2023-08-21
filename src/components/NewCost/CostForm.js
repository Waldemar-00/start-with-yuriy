import './CostForm.css'
function CostForm() {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="title">Title</label>
          <input type="text" name='text' id='title' />
        </div>
        <div className="new-cost__control">
          <label htmlFor="sum">Sum</label>
          <input type="number" min='0.01' step='0.01' name='sum' id='sum' />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <input type="date" name='date' min='2022-01-01' max='2033-01-01' id='date' />
        </div>
        <div className="new-cost__actions">
          <button type='submit'>Added Expense</button>
        </div>
      </div>
    </form>
  )
}
export default CostForm 