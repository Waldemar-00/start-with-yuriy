import CostItem from "./CostItem" 
import CostFilter from "./CostFilter"
import Card from "../UI/Card"
import { useState } from 'react'
import './Costs.css'
import './CostItem.css'
function Costs({ purchases }) {
  const [year, setYear] = useState('2022')
  function onChangeYear(eventYear) {
    setYear(eventYear)
  }
  const filterByYear = purchases.filter(obj => {
    return obj.date.getFullYear() === parseInt(year, 10)
  })
  let content = <div className='card cost-item'>No expenses this year</div>
  if (filterByYear.length > 0) {
    content = filterByYear.length > 0 && filterByYear.map((obj, index) => {
      return <CostItem obj={obj} key={purchases[index].id} />
    })
  }
  return (
    <Card className={'costs'}>
      <CostFilter onChangeYear={onChangeYear} year={year} />
      {content}
    </Card>
  )

}
export default Costs