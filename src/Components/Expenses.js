import React, { useState } from 'react';
import Expensefilter from './ExpenseFilter';
import Expenseslist from './ExpensesList';

const Expenses = (props) => {
  
  const [filteredYear, setfilteredYear] = useState('2021');

  const changeExpenseFitlerHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const getFilteredData = props.expenseList.filter(
    (prop) => prop.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses-container">
      <Expensefilter
        selectedYear={filteredYear}
        onChangeExpenseFilter={changeExpenseFitlerHandler}
      />
      <Expenseslist data={getFilteredData} />
    </div>
  );
};

export default Expenses;
