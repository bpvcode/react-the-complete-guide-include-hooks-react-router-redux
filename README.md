# React The Complete Guide (include Hooks, React Router, Redux)

Udemy course


## 1 Apps during the course

Check here all deployed apps and respective code

- [Expense Tracker](https://expense-tracker-bpvcode-learn-react.netlify.app) find code [here](./expense-tracker/expense-tracker)
- [Users List (Event registration)](https://devops-summit-signup-bpvcode.netlify.app) find code [here](./users-list-app/bruno2/users-list)

## 3.1 Introducting JSX

Sintax -> The ability to return `html` code into a `javascript` function.
The source code will be automatically transformed to be more browser friendly and run in the browser.

```javacript
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
```

## How React works

We build our own custom HTML Elements in react, named as components. This will allow us to reuse HTML/CSS and JAVASCRIPT code, with a declarative approach, defining the desired target state and let React figure out the actual Javascript DOM instructions.

In React components we much have only 1 root element per return statement. - RULE

We should pass data into a component via props (dynamic or not), meaning we are passing and object with different props to the component, so we access via key/value pair.

We use `Card` components in order to reuse card predefined styles across multiple components. For that we will need to use `{props.children}` in the card component, in order to receive the content of the component that we want to inject inside the card.

```javascript
function Card(props) {
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
```

```javascript
function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>$ {props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;
```

NOTE: At the end `Card` will have bothe `card` and `expensive-item` as classNames, because `props.className` is using the className passed for each card component, on top of the `card` class as well.

Handlers should be use to handle with different events. So handlers are functions that we create to react to some event like `onClick` -> Events start with `on`

React hooks can be recognize by the fact that they start with `use` word, like `useState()`. This hooks should be only called directly inside a component function, but not nested in another functions inside component function

`const [title, setTitle] = useState(props.title)` -> This means that `useState()` function will receive property to look at (`props.title`), and we can assign them to a variable name (`title`) and a function to change that variable value `setTitle`

`Two-Way-Binding` means a value that is pass on to a parent component through props, and received from the parent components. This way we can create controlled components. Example: The Expenses component controls the ExpensesFilter component.

CSS modules insure that the styles that we apply are scoped to the component we import the module file into. That way we avoid duplicate class names.
For that we need (Example):

- Create css file as module - `Card.module.css`
- Import css file as module - `import styles from './Card.module.css'`
- Use classNames as objects - `<div className={styles.className}> </div>`

