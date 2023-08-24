import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import { v4 } from 'uuid'
function App() {
  const purchasesData =
    [
      {
        date: new Date(),
        title: 'Refrigerator',
        sum: '798',
        id: v4()
      },
      {
        date: new Date(),
        title: 'Smartphone',
        sum: '780',
        id: v4()
      },
      {
        date: new Date(),
        title: 'Bookcase',
        sum: '480',
        id: v4()
      }
    ]
  function getHandlerData(handlerData) {
    purchasesData.push(handlerData)
    console.log(purchasesData)
  }
  return (
    <>
      <NewCost onHandlerData={getHandlerData} />
      <Costs purchases={purchasesData}/>
    </>
  )
}
export default App