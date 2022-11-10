import React, { useState } from 'react';
import Card from "../UI/Card"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import ExpensesList from "./ExpensesList"
import './Expenses.css'
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setYear] = useState('2020')

  const filteredYearHandler = (selectedYear) => {
    setYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense =>  {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
      <li>
        <Card className="expenses">
        <ExpensesFilter filtered={filteredYear} onChangeYear={filteredYearHandler}/>
        <ExpenseChart items={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
  )
}

export default Expenses;