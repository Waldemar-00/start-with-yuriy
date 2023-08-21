import CostForm from "./CostForm" 
import './NewCost.css'
function NewCost() {
  return (
    <div className="new-cost">
      <CostForm />
      <button>Submit</button>
    </div>
  )
}
export default NewCost