import './CostItem.css'
import CostDate from './CostDate'
function CostItem({buy}) {
  const {date, title, sum} = buy
  return (
    <>
      <div className="cost-item">
        <CostDate data={date} />
        <div className='cost-item__decription'>
          <h2>{title}</h2>
          <div className='cost-item__sum'>${sum}</div>
        </div>
      </div>
    </>
  )
}
export default CostItem