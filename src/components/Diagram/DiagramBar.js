import './DiagramBar.css'
function DiagramBar(
  {
    expense,
    label,
    maxValue,
  }) {
  const height = maxValue > 0 ? `${expense / maxValue * 100}%` : '0%'
  return(
    <div className={'diagram-bar'}>
      <div className={'diagram-bar__inner'}>
        <div className={'diagram-bar__fill'} style={{height: height}}></div>
      </div>
      <div className={'diagram-bar__label'}>{label}</div>
    </div>
  )
}
export default DiagramBar