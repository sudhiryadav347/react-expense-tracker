import React from 'react';

const Expenseform = (props) => {
  const expenseFormSubmissionHandler = (event) => {
    event.preventDefault();
  };

  const expenseFormCancelHandler = (event) => {
    event.preventDefault();
    props.showForm(false);
  };

  return (
    <div>
      <form>
        <label for="title">Title:</label>
        <input type="text" name="title" />

        <label for="title">Amount:</label>
        <input type="number" name="title" />

        <label for="title">Date:</label>
        <input type="date" name="title" />

        <button name="addExpenseBtn" onSubmit={expenseFormSubmissionHandler}>
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
