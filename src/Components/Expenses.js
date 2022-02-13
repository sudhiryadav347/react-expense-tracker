import React, { useState } from 'react';
import Expensefilter from './ExpenseFilter';
import Expenseslist from './ExpensesList';

const Expenses = (props) => {
  const [filteredData, setfilteredData] = useState(props.expenseList);

  const selectedYearHandler = (year) => {
    const newFilteredData = props.expenseList.filter((item) => {
      return item.date.getFullYear().toString() === year;
    });

    setfilteredData(newFilteredData);
  };

  return (
    <div className="expenses-container">
      <Expensefilter selectedYear={selectedYearHandler} />
      <Expenseslist data={filteredData} />
    </div>
  );
};

export default Expenses;
