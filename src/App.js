import CostItem from './components/CostItem'
function App() {
  const costData = [
    {
      date: new Date(),
      title: 'Refrigerator',
      sum: '798'
    }
  ]
  return (
    <>
      <CostItem data={costData[0]}/>
    </>
    
  )
}
export default App