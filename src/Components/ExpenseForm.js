import React, { useState } from 'react';

const Expenseform = (props) => {
  const [title, settitle] = useState('');
  const [amount, setamount] = useState('');
  const [date, setdate] = useState('');
  // const [expenseFormData, setexpenseFormData] = useState('');

  const titleChangeHandler = (event) => {
    settitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setamount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setdate(event.target.value);
  };

  const expenseFormSubmissionHandler = (event) => {
    event.preventDefault();
    const newData = {
      id: Math.random(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    // setexpenseFormData(newData);
    props.submittedData(newData);

    settitle('');
    setdate('');
    setamount('');
  };

  const expenseFormCancelHandler = (event) => {
    event.preventDefault();
    props.showForm(false);
  };

  return (
    <div>
      <form>
        <label for="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={titleChangeHandler}
          value={title}
        />

        <label for="title">Amount:</label>
        <input
          type="number"
          name="title"
          onChange={amountChangeHandler}
          value={amount}
        />

        <label for="title">Date:</label>
        <input
          type="date"
          name="title"
          onChange={dateChangeHandler}
          value={date}
        />

        <button name="addExpenseBtn" onClick={expenseFormSubmissionHandler}>
          Add expense
        </button>
        <button name="cancelAddExpenseBtn" onClick={expenseFormCancelHandler}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Expenseform;
