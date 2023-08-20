import CostItem from "./CostItem" 
import './Costs.css'
function Costs({ purchases }) {
  const [one, two, three] = purchases
  return (
    <div className='costs'>
      <CostItem buy={one} />
      <CostItem buy={two} />
      <CostItem buy={three} />
    </div>
  )

}
export default Costs