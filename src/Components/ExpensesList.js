import React from 'react';

const Expenseslist = (props) => {
  return (
    <div>
      {props.data.length > 0 ? (
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
      ) : (
        'No results found'
      )}
    </div>
  );
};

export default Expenseslist;
