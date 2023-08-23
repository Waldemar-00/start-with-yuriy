import CostItem from "./CostItem" 
import CostFilter from "./CostFilter"
import Card from "../UI/Card"
import {useState} from 'react'
import './Costs.css'
function Costs({ purchases }) {
  const [one, two, three] = purchases
  const [year, setYear] = useState('2022')
  function onChangeYear(eventYear) {
    setYear(eventYear)
  }
  return (
    <>
      <CostFilter onChangeYear={onChangeYear} year={year}/>
      <Card className={'costs'}>
        <CostItem buy={one} />
        <CostItem buy={two} />
        <CostItem buy={three} />
      </Card>
    </>
  )

}
export default Costs