import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "./Card"

function Expenses(props){

    return (
        <Card className="expenses">
            {props.items.map((item) => {
                return [
                  <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                  />
                ]
            })}
        </Card>
    )

}

export default Expenses;