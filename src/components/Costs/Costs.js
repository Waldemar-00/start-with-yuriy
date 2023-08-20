import CostItem from "./CostItem" 
import Card from "./Card"
import './Costs.css'
function Costs({ purchases }) {
  const [one, two, three] = purchases
  return (
    <Card className={'costs'}>
      <CostItem buy={one} />
      <CostItem buy={two} />
      <CostItem buy={three} />
    </Card>
  )

}
export default Costs