import CostForm from "./CostForm" 
import './NewCost.css'
function NewCost() {
  return (
    <div className="new-cost">
      <CostForm />
      <button>Cancel</button>
    </div>
  )
}
export default NewCost