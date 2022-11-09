import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"

const Expenses = (props) => {

  const [filteredYear, setYear] = useState('2020')

  const filteredYearHandler = (selectedYear) => {
    setYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter filtered={filteredYear} onChangeYear={filteredYearHandler}/>
      {props.items
        .filter(item => item.date.getFullYear().toString() === filteredYear)
        .map(item => (
          <ExpenseItem
          key= {item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          />
        ))
      }
      </Card>
    </div>
  )
}

export default Expenses;