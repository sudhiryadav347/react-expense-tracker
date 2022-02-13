import React, { useState } from 'react';
import Expensefilter from './ExpenseFilter';
import Expenseslist from './ExpensesList';

const Expenses = (props) => {
  const [selectedYear, setselectedYear] = useState('2021');
  const [filteredData, setfilteredData] = useState(props.expenseList);

  const selectedYearHandler = (year) => {
    setselectedYear(year);

    const newFilteredData = props.expenseList.filter((item) => {
      return item.date.getFullYear().toString() === selectedYear;
    });

    setfilteredData(newFilteredData);
  };

  return (
    <div className="expenses-container">
      <Expensefilter
        selectedYear={selectedYearHandler}
        defaultYear={selectedYear}
      />
      <Expenseslist data={filteredData} />
    </div>
  );
};

export default Expenses;
