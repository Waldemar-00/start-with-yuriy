import CostForm from "./CostForm" 
import './NewCost.css'
function NewCost({ onHandlerData }) {
  function getHandlerData(handlerData) {
    onHandlerData(handlerData)
  }
  return (
    <div className="new-cost">
      <CostForm onHandlerData={getHandlerData} />
      <button>Cancel</button>
    </div>
  )
}
export default NewCost