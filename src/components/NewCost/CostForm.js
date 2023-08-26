import {useState} from 'react'
import './CostForm.css'
import CostFormInputs from './CostFormInputs'
function CostForm({ onHandlerData }) {
  const [title, setTitle] = useState('')
  const [sum, setSum] = useState('')
  const [date, setDate] = useState('')
  const [unform, setUnform] = useState(false)
  function changeTitleHandler(e) {
    setTitle(e.target.value)
  }
  function changeSumHandler(e) {
    setSum(e.target.value)
  }
  function changeDateHandler(e) {
    setDate(e.target.value)
  }
  function submitHandler(e) {
    e.preventDefault()
    const handlerData = {
      date: new Date(date),
      title: title,
      sum: sum
    }
    setTitle('')
    setSum('')
    setDate('')
    onHandlerData(handlerData) 
  }
  function onButtonHandler() {
    setUnform(unform => !unform)
  }
  return (
    <form onSubmit={submitHandler} className="new-cost__controls">
      {
        unform && (
          <>
            <CostFormInputs
              changeTitleHandler={changeTitleHandler}
              title={title}
              sum={sum}
              changeSumHandler={changeSumHandler}
              date={date}
              changeDateHandler={changeDateHandler}
            />
          </>
        )
      }
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
    </form>
  )
}
export default CostForm 