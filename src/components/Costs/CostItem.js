import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'
function CostItem({ obj }) {
  const {date, title, sum} = obj
  return (
    <li>
      <Card className={"cost-item"}>
        <CostDate data={date} />
        <div className='cost-item__decription'>
          <h2>{title}</h2>
          <div className='cost-item__sum'>${sum}</div>
        </div>
      </Card>
    </li>
  )
}
export default CostItem