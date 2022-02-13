import React from 'react';

const Expenseslist = (props) => {
  return (
    <div>
      <ul className="expense-list-items">
        {props.data.map((item) => {
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

export default Expenseslist;
