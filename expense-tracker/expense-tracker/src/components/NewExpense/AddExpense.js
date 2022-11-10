import './AddExpense.css'

const AddExpense = (props) => {

    const clickHandler = () => {
        props.onIsNewExpense(true)
    }

    return (
        <div className='add-expense__actions'>
            <button type='submit' onClick={clickHandler}>Add New Expense</button>
        </div>
    )

}

export default AddExpense