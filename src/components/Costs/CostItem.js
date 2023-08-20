import './CostItem.css'
import CostDate from './CostDate'
import Card from './Card'
function CostItem({buy}) {
  const {date, title, sum} = buy
  return (
    <>
      <Card className={"cost-item"}>
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