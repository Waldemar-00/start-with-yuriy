import "./CostFilter.css" 
const CostsFilter = ({ onChangeYear, year }) => {
  const changeYearHandler = (event) => {
    onChangeYear(event.target.value) 
  } 

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Selection by year</label>
        <select value={year} onChange={changeYearHandler}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  ) 
} 

export default CostsFilter 
