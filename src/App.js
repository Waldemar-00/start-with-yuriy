import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
function App() {
  const purchasesData =
    [
      {
        date: new Date(),
        title: 'Refrigerator',
        sum: '798'
      },
      {
        date: new Date(),
        title: 'Smartphone',
        sum: '780'
      },
      {
        date: new Date(),
        title: 'Bookcase',
        sum: '480'
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