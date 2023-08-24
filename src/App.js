import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import {useState} from 'react'
import { v4 } from 'uuid'

const purchasesData =
  [
    { date: new Date(), title: 'Refrigerator', sum: '798', id: v4() },
    {date: new Date(),title: 'Smartphone',sum: '780',id: v4()},
    {date: new Date(),title: 'Bookcase',sum: '480',id: v4()}
  ]
function App() {
  const [purchases, setPurchases] = useState(purchasesData)
  function getHandlerData(handlerData) {
    handlerData.id = v4()
    setPurchases((purchases) => {
      return [
        handlerData, ...purchases
      ]
    })
  }
  return (
    <>
      <NewCost onHandlerData={getHandlerData} />
      <Costs purchases={purchases}/>
    </>
  )
}
export default App