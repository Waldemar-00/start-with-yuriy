import CostItem from "./CostItem" 
import CostFilter from "./CostFilter"
import Card from "../UI/Card"
import { useState } from 'react'
import './Costs.css'
function Costs({ purchases }) {
  const [year, setYear] = useState('2022')
  function onChangeYear(eventYear) {
    setYear(eventYear)
  }
  const filterByYear = purchases.filter(obj => {
    console.log(obj.date.getFullYear())
    return obj.date.getFullYear() === parseInt(year, 10)
  })
  console.log(filterByYear)
  return (
    <Card className={'costs'}>
      <CostFilter onChangeYear={onChangeYear} year={year} />
      {filterByYear.map((obj, index) => {
        return <CostItem obj={obj} key={purchases[index].id}/>
      })}
    </Card>
  )

}
export default Costs