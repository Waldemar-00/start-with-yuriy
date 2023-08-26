import './CostList.css'
import CostItem from './CostItem'
function CostList({ filterByYear, purchases }) {
  if(filterByYear.length === 0 ) return <h2 className='cost-list__fallback'>No expenses this year</h2>
    return (
      <ul className='cost-list'>
        {
          filterByYear.map((obj, index) => {
            return <CostItem obj={obj} key={purchases[index].id} />
          })
        }
     </ul>
    )
}
export default CostList