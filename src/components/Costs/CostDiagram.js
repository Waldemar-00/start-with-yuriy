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
  for (let yearObj = 0; yearObj < filterByYear.length; yearObj++) {
    const monthIndex = filterByYear[yearObj].date.getMonth()
    for (let both = yearObj + 1; both < filterByYear.length; both++) {
      if (filterByYear[both].date.getMonth() === monthIndex) {
        arrayOfBar[monthIndex].expense = +filterByYear[both].sum + +filterByYear[yearObj].sum
      } else {
        arrayOfBar[monthIndex].expense = filterByYear[both].sum
      }
    }
  }
  console.log(arrayOfBar)
  return (
    <Diagram arrayOfBar={arrayOfBar}/>
  )
}
export default CostDiagram