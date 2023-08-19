import './CostItem.css'
function CostItem({ data }) {
  const { date, title, sum } = data
  return (
    <div className="cost-item">
      <div className='cost-item__date'>{date.toDateString()}</div>
      <div className='cost-item__decription'>
        <h2>{title}</h2>
        <div className='cost-item__sum'>${sum}</div>
      </div>
    </div>
  )
}
export default CostItem