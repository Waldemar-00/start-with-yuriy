import './CostDate.css'
function CostDate({ data }) {
  return (
    <div className='cost-item__date'>
      <div>
        {
          `
          ${data.toLocaleString('en-US', { day: '2-digit' })}.
          ${data.toLocaleString('en-US', { month: '2-digit' })}.
          ${data.getFullYear()}
          `
        }
      </div>
    </div>
  )
}
export default CostDate