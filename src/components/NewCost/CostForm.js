import {useState} from 'react'
import './CostForm.css'
function CostForm() {
  const [userInput, setUserInput] = useState({
    title: '',
    sum: '',
    date: ''
  })
  function changeTitleHandler(e) {
    setUserInput((previousState) => {
      return { ...previousState, title: e.target.value}
    })
  }
  function changeSumHandler(e) {
    setUserInput((previousState) => {
      return {...previousState, sum: e.target.value}
    })
  }
  function changeDateHandler(e) {
    setUserInput((previousState) => {
      return { ...previousState, date: e.target.value}
    })
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
            value={userInput.title} 
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
            value={userInput.sum}
            onChange={changeSumHandler}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            name='date'
            min='2022-01-01' max='2033-01-01'
            value={userInput.date}
            id='date'
            onChange={changeDateHandler}
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