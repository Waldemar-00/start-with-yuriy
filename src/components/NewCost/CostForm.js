import {useState} from 'react'
import './CostForm.css'
function CostForm() {
  const [title, setTitle] = useState('')
  const [sum, setSum] = useState(null)
  const [date, setdate] = useState(null)
  function changeTitleHandler(e) {
    setTitle(e.target.value)
  }
  function changeSumHandler(e) {
    setSum(e.target.value)
  }
  function changeDateHandler(e) {
    setdate(e.target.value)
  }
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            name='text' 
            id='title' 
            value={title} 
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="sum">Sum</label>
          <input 
            type="number"
            min='0.01' step='0.01'
            name='sum'
            id='sum'
            value={sum}
            onChange={changeSumHandler}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            name='date'
            min='2022-01-01' max='2033-01-01'
            value={date}
            id='date'
            onchange={changeDateHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type='submit'>Added Expense</button>
        </div>
      </div>
    </form>
  )
}
export default CostForm 