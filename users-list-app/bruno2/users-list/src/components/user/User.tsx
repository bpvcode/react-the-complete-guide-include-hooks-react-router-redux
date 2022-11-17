import { useState } from 'react';
import UserIcon from '../../userLogo.png';
import styles from './User.module.css'

export interface User{
  name: string,
  jobTitle: string
}

const User = (props: any) => {

  const [enteredName, setEnteredName] = useState<string>('')
  const [enteredJobTitle, setEnteredJobTitle] = useState<string>('')

  const changedEnteredNameHandler = (props: any) => {
    console.log(props.target.value)
    setEnteredName(props.target.value)
  }

  const changedEnteredJobTitleHandler = (props: any) => {
    console.log(props.target.value)
    setEnteredJobTitle(props.target.value)
  }

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const newUser: User = {
      name: enteredName,
      jobTitle: enteredJobTitle
    }
    props.onAddNewUser(newUser)

    setEnteredName('')
    setEnteredJobTitle('')
  }

    return(
        <>
        <div className={"container mx-auto p-4"}>
        <img src={UserIcon} className={styles.image} alt="logo" />
        <div className={"w-full md:w-1/2 lg:w-1/3 mx-auto my-12"}>
          <h1 className={"text-lg font-bold text-white"}>Event Registration</h1>
          <form
            className={"flex flex-col mt-4"}
            onSubmit={onSubmitHandler}
          >
            <input
                type="text"
                name="name"
                className={"px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-black-500 focus:bg-white focus:ring-0 text-gray-800 text-sm"}
                placeholder="Name"
                onChange={changedEnteredNameHandler}
            />
            <input
                type="text"
                name="jobTitle"
                className={"px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-800 text-sm"}
                placeholder="Job Title"
                onChange={changedEnteredJobTitleHandler}
            />
            <button
                type="submit"
                className={"mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"}
            >
              Add User
            </button>
          </form>
        </div>
      </div>
      </>
    )
}

export default User