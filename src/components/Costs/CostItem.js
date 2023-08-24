import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'
function CostItem({ obj }) {
  const {date, title, sum, id} = obj
  return (
    <>
      <Card className={"cost-item"} id={id}>
        <CostDate data={date} />
        <div className='cost-item__decription'>
          <h2>{title}</h2>
          <div className='cost-item__sum'>${sum}</div>
        </div>
      </Card>
    </>
  )
}
export default CostItem