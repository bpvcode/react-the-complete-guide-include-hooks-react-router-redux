# React The Complete Guide (include Hooks, React Router, Redux)

Udemy course

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
