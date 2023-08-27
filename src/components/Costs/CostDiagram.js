import Diagram from '../Diagram/Diagram'
function CostDiagram({ filterByYear }) {
  const arrayOfBar = [
    { expense: 0, month: 'Jan' },
    { expense: 0, month: 'Feb' },
    { expense: 0, month: 'Mar' },
    { expense: 0, month: 'Apr' },
    { expense: 0, month: 'May' },
    { expense: 0, month: 'Jun' },
    { expense: 0, month: 'Jul' },
    { expense: 0, month: 'Aug' },
    { expense: 0, month: 'Sep' },
    { expense: 0, month: 'Oct' },
    { expense: 0, month: 'Nov' },
    { expense: 0, month: 'Dec' },
  ]
  for (let i = 0; i < filterByYear.length; i++) {
    const monthIndex = filterByYear[i].date.getMonth()
    if (filterByYear[i + 1] === undefined) arrayOfBar[monthIndex].expense = +filterByYear[i].sum
    for (let j = i + 1; j < filterByYear.length; j++) {
      monthIndex === filterByYear[j].date.getMonth() ?
        arrayOfBar[monthIndex].expense = +filterByYear[j].sum + +filterByYear[i].sum :
          arrayOfBar[monthIndex].expense = +filterByYear[i].sum
      }
  }
  return (
    <Diagram arrayOfBar={arrayOfBar}/>
  )
}
export default CostDiagram