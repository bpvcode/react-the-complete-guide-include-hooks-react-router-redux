# React The Complete Guide (include Hooks, React Router, Redux)

Udemy course


## Apps developed during the course

Check here all deployed apps and respective code

[**Expense Tracker**](https://expense-tracker-bpvcode-learn-react.netlify.app) 

Find code [here](./expense-tracker/expense-tracker)

![image](https://user-images.githubusercontent.com/66181027/202550141-c424ce2c-b660-43bc-bf53-67276be45032.png)

[**Users List (Event registration)**](https://devops-summit-signup-bpvcode.netlify.app) 

Find code [here](./users-list-app/bruno2/users-list)

![image](https://user-images.githubusercontent.com/66181027/202550330-e6b34eb7-a6f8-427b-9a80-92af43699a92.png)


## Notes

## Indice - Core topics

Core topics to know about React

Basic:

- Components and Custom Components
- JSX - Dynamic Data and Expressions
- Passing Data via "props"
- Concept of composition "children props"
- Reusable Components

Intermediary:

- Multiple States - useState()
- Events
- Two way binding
  - Lifting The State Up (Child-to-Parent Component Communication - Bottom-up)
- Rendering Lists of Data
  - Understanding "keys"
- Conditional Rendering
- Styling React Components (CSS Modules and other approaches)
  - Dynamic styling
  - Media Queries
- Debugging (Breakpoints and React Dev Tools)
- React Fragments - <></>
- React Portal - ReactDOM.createPortal()
- React Ref's - useRefs()

Advanced:

- Side Effects - useEffect()
- Reducers - useReducer()
- Context API

## Introducting JSX

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

## React fragments

Use to not end up with a "`<div></div>` soup"

```typescript
<React.Fragments>
  //...
</React.Fragments>
```

```typescript
<>
  //...
</>
```

## React portals

Works as Fragments, both are also used to have a better semantical html code, which makes the app more accessible, as example, make sure it don't render to many nested `<div>`.

We can use a portal to keep writing our components as we do, but rendering different in the real DOM. So the JSX code is a bit different than the actual html code on the browser when rendering, in order to improve accessibility and semantic. Very used in overlays (example: modal errors)

To add a Portal we need a place to "portal" the component, and we should tell the component where he should "portal" to.

Add a `<div>` in `index.html` (Example: align with `<div id="root"></div>`) and give a `id` to that `div` (Example: `<div id="modal-root"></div>`)

```typescript
import ReactDOM from 'react-dom'

const ErrorModal = (props) => {
  return (
    {ReactDOM.createPortal(
      <Backdrop onConfirm={props.onConfirm} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <ModalOverlay
        title={props.title},
        message={props.message}
        onConfirm={props.onConfirm}
      />,
      document.getElementById('modal-root')
    )}
  )
}
```

## React ref's

This way e can read the value of the property directly from the DOM. And we can remove the `onChange()` method to listen the input. However, whe need to change the value of the DOM object at the end of `addUserHandler()` function to reset the input field. (Note, is not really good practice to change the values or even worst DOM objects and properties directly, but in this specific case is fine).

Example:

```typescript
import {useRef} from 'react'

const User = (props) => {

  const enteredNameRef = useRef();
  const enteredAgeRef = useRef();


  const addUserHandler = (event) => {
    const enteredName= enteredNameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;

    props.onAddUser(enteredName , enteredAge)

    enteredNameRef.current.value = '';
    enteredAgeRef.current.value = '';
  }

  return (
    <input
      // ...
      ref={enteredName}
    ></input>
      <input
      // ...
      ref={enteredAge}
    ></input>
  )
}
```

Refs uses `Uncontrolled Components` once the control is based on the value passed by the browser directly, and React don't manage the state of that component.
