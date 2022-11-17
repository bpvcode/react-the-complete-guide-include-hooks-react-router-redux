import {useState} from 'react'
import Card from '../UI/Card'
import styles from './NewUser.module.css'


const NewUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        const newId= Math.random()*1000
        const newUser = {
            id: newId.toString,
            username: enteredUsername,
            age: enteredAge
        }
        props.onAddNewUser(newUser)

        setEnteredUsername('')
        setEnteredAge('')
    }

    const changeUsernameHandler = (event) => {
        console.log(event.target.value)
        setEnteredUsername(event.target.value)
    }
    const changeAgeHandler = (event) => {
        console.log(event.target.value)
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>
                <label>Username</label>
                    <input
                    type="text"
                    value={enteredUsername}
                    onChange={changeUsernameHandler}
                    />
                <label>Age (Years)</label>
                    <input
                    type='number'
                    min='0'
                    value={enteredAge}
                    onChange={changeAgeHandler}
                    />
                <button type='submit'>Add User</button>
            </form>
        </Card>

    )
}

export default NewUser;