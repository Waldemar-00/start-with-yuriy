function CostFormInputs(
  { title,
    changeTitleHandler,
    sum, changeSumHandler,
    date,
    changeDateHandler
  }
) {
  return (
    <>
      <div className="new-cost__control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name='text'
          id='title'
          value={title}
          onChange={changeTitleHandler}
        />
      </div>
      <div className="new-cost__control">
        <label htmlFor="sum">Sum</label>
        <input
          type="number"
          min='0.01' step='0.01'
          name='sum'
          id='sum'
          value={sum}
          onChange={changeSumHandler}
        />
      </div>
      <div className="new-cost__control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name='date'
          min='2022-01-01' max='2026-01-01'
          value={date}
          id='date'
          onChange={changeDateHandler}
        />
      </div>
    </>
  )
}
export default CostFormInputs