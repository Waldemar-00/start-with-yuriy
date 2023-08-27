import DiagramBar from './DiagramBar'
import './Diagram.css'
import { v4 } from 'uuid'
function Diagram({ arrayOfBar }) {
  const maxExpense = Math.max(...arrayOfBar.map(bar => bar.expense))
  return (
    <div className="diagram">
      {
        arrayOfBar.map(bar =>
          <DiagramBar
            expense={bar.expense}
            label={bar.label}
            maxValue={maxExpense}
            key={v4()}
          />
        )
      }
    </div>
  )
}
export default Diagram