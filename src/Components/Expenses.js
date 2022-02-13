import React, { useState } from 'react';
import Expensefilter from './ExpenseFilter';

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
      <ul className="expense-list-items">
        {filteredData.map((item) => {
          return (
            <li key={item.id}>
              {item.title} | {item.amount} |{' '}
              {item.date.getFullYear().toString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Expenses;
