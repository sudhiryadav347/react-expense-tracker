import React from 'react';
import './App.css';
import Expenses from './Components/Expenses';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 998.21,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 538.5,
    date: new Date(2021, 3, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 230.98,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 782.9,
    date: new Date(2022, 5, 12),
  },
];

function App() {


  return (
    <div>
      <Expenses expenseList={initialExpenses}/>
    </div>
  );
}

export default App;
