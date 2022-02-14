import React from 'react';

const Expensefilter = (props) => {
  const selectYearHandler = (event) => {
    const yearSelected = event.target.value;
    props.onChangeExpenseFilter(yearSelected);
  };

  return (
    <div className="select-filter">
      <label>Filter by year</label>
      <select onChange={selectYearHandler} value={props.selectedYear}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default Expensefilter;
