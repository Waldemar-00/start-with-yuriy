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
  return (
    <Card className={'costs'}>
      <CostFilter onChangeYear={onChangeYear} year={year} />
      {purchases.map((obj, index) => {
        return <CostItem obj={obj}/>
      })}
    </Card>
  )

}
export default Costs