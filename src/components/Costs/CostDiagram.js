import Diagram from '../Diagram/Diagram'
function CostDiagram({ filterByYear }) {
  const arrayOfBar = [
    { expense: 0, label: 'Jan' },
    { expense: 0, label: 'Feb' },
    { expense: 0, label: 'Mar' },
    { expense: 0, label: 'Apr' },
    { expense: 0, label: 'May' },
    { expense: 0, label: 'Jun' },
    { expense: 0, label: 'Jul' },
    { expense: 0, label: 'Aug' },
    { expense: 0, label: 'Sep' },
    { expense: 0, label: 'Oct' },
    { expense: 0, label: 'Nov' },
    { expense: 0, label: 'Dec' },
  ]
  for (const yearObj of filterByYear) {
    const monthIndex = yearObj.date.getMonth()
    arrayOfBar[monthIndex].expense = yearObj.sum
  }
  return (
    <Diagram arrayOfBar={arrayOfBar}/>
  )
}
export default CostDiagram