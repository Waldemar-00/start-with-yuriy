import './DiagramBar.css'
function DiagramBar(
  {
    expense,
    month,
    maxExpense,
  }) {
  const height = maxExpense > 0 ? `${expense / maxExpense * 100}%` : '0%'
  console.log(maxExpense)
  return(
    <div className={'diagram-bar'}>
      <div className={'diagram-bar__inner'}>
        <div className={'diagram-bar__fill'} style={{height: height}}></div>
      </div>
      <div className={'diagram-bar__label'}>{month}</div>
    </div>
  )
}
export default DiagramBar