import { useState } from 'react';
import AddExpense from './AddExpense';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [isNewExpense, setIsNewExpense] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const isNewExpenseHandler = (isNewExpense) => {
        setIsNewExpense(isNewExpense)
    }

    return (
        <div className='new-expense'>
            {isNewExpense ? (
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onIsNewExpense={isNewExpenseHandler}
            />
            ) : (
            <AddExpense onIsNewExpense={isNewExpenseHandler}/>
            )}
        </div>
    )
}

export default NewExpense;