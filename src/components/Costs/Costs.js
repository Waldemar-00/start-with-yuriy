import CostFilter from "./CostFilter"
import CostList from "./CostList"
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
  return (
    <Card className={'costs'}>
      <CostFilter onChangeYear={onChangeYear} year={year} />
      <CostList filterByYear={filterByYear} purchases={purchases} />
    </Card>
  )

}
export default Costs