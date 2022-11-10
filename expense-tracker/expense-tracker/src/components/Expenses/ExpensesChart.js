import Chart from "../Chart/Chart";

const ExpenseChart = props => {

    let dataPoints = [
        {label : 'Jan', value: 0, key:'1'},
        {label : 'Fev', value: 0, key:'2'},
        {label : 'Mar', value: 0, key:'3'},
        {label : 'Apr', value: 0, key:'4'},
        {label : 'Mai', value: 0, key:'5'},
        {label : 'Jun', value: 0, key:'6'},
        {label : 'Jul', value: 0, key:'7'},
        {label : 'Ago', value: 0, key:'8'},
        {label : 'Set', value: 0, key:'9'},
        {label : 'Out', value: 0, key:'10'},
        {label : 'Nov', value: 0, key:'11'},
        {label : 'Dez', value: 0, key:'12'},
    ]

    for (const expense of props.items){
        const expenseMonth = expense.date.getMonth(); // Returns a number 0 -> January
        dataPoints[expenseMonth].value += expense.amount
    }

    return <Chart dataPoints={dataPoints}/>
}

export default ExpenseChart;