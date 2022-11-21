import { FC, useState } from "react";
import styles from './SignIn.module.css'
import Typical from 'react-typical';
import { Restaurants, Roles } from "./RolesEnum";
import { Select, Option } from  "@material-tailwind/react"
import USERS_MOCK_DATA from './USERS_MOCK_DATA.json'
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classNames from "classnames";

export interface UserModal {
    id: string,
    name: string,
    password: string,
    roles: Roles[],
    restaurantRoles: Restaurants[],
    selectedRestaurant: string
}

interface UserProps{
    onSignIn: (newUser: UserModal) => void
}

const SignIn: FC <UserProps> = ({onSignIn}) => {

    const [user, setUser] = useState<UserModal>()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [restaurant, setRestaurant] = useState<Restaurants>()
    const [isError, setIsError] = useState<boolean>(false)
    const [errorTitle, setErrorTitle] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const onChangeNameHandler = (event: any) => {
        setName(event.target.value)
    }

    const onChangePasswordHandler = (event: any) => {
        setPassword(event.target.value)
    }

    const onChangeRestaurantHandler = (event: any) => {
        setRestaurant(event)
    }

    const verifyUser = (name: string, password: string, restaurant: Restaurants) => {
        const enteredUser = USERS_MOCK_DATA.find(element => {
            return element.name === name && element.password === password && element.restaurantRoles.includes(restaurant as Restaurants)
        })
        if(enteredUser !== undefined){
            enteredUser.selectedRestaurant = restaurant
            setUser(enteredUser as UserModal)
            onSignIn(enteredUser as UserModal)
        }else {
            setName('')
            setPassword('')
            setRestaurant(undefined)
            setErrorTitle(`Sign In Error`)
            setErrorMessage(`Make sure you input your name and password correct and choose a restaurant that you are allow to see`)
            return (
                setIsError(true)
            )
        }
    }


    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        verifyUser(name, password, restaurant as Restaurants)
        setName('')
        setPassword('')
        setRestaurant(undefined)
    }

    const onIsErrorHandler = (isError: boolean) => {
        setIsError(isError)
    }

    return (
        <>
        {isError
            ? <ErrorModal isErrorHandler={onIsErrorHandler} title={errorTitle} message={errorMessage}/>
            :
            <div className={styles.SignInScreen}>
            <div className={styles.Typing}>
                <Typical
                steps={[
                    "Welcome Cabrones 👋",
                    4000,
                    "Don't forget...",
                    4000,
                    "Have fun and drink Tequila 🍸",
                    4000
                ]}
                loop={Infinity}
                wrapper="span"
                />
            </div>
            <div className={styles.Authentication}>

                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-[80%] p-6 m-auto bg-none rounded-md shadow-2xl shadow-[#01C38D]/30 ring ring-2 ring-[#01C38D]/10 lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-[#01C38D]/80 no-underline uppercase">
                        Sign in
                        </h1>
                        <form className="mt-6" onSubmit={onSubmitHandler}>
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={onChangeNameHandler}
                                    className="block w-full px-4 py-2 mt-2 text-[#191E29] bg-white border rounded-md focus:border-[#696E79] focus:ring-[#696E79] focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChangePasswordHandler}
                                    className="block w-full px-4 py-2 mt-2 text-[#191E29] bg-white border rounded-md focus:border-[#696E79] focus:ring-[#696E79] focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-full">
                                <Select className="text-white" color="gray" variant="outlined" label="Select Restaurant" onChange={onChangeRestaurantHandler}>
                                    <Option className="text-[#282c34] selected:bg-[#01C38D] focus:bg-[#01C38D] focus:text-white focus:font-bold" value="Cabron">El Cabron - Taquería</Option>
                                    <Option className="text-[#282c34] selected:bg-[#01C38D] focus:bg-[#01C38D] focus:text-white focus:font-bold" value="COW">COW - Beef & cocktails</Option>
                                </Select>
                            </div>

                            <div className="mt-12">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#01C38D] rounded-md hover:bg-[#01C38D]/60  focus:outline-none focus:bg-white font-bold focus:text-[#191E29]">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        }

      </>
    )
}

export default SignIn

//? EXTRA IDEA SIGN IN FORM:

    {/* <div className={"mt-16 container mx-auto p-4"}>
        <img src={UserIcon} className={styles.image} alt="logo" />
        <div className={"w-full md:w-1/2 lg:w-1/3 mx-auto my-12"}>
          <form
            className={"flex flex-col mt-4"}
            // onSubmit={onSubmitHandler}
          >
            <input
                type="text"
                name="name"
                className={"px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-black-500 focus:bg-white focus:ring-0 text-gray-800 text-sm"}
                placeholder="Name"
                // onChange={changedEnteredNameHandler}
                // value={enteredName}
            />
            <input
                type="password"
                name="password"
                className={"px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-800 text-sm"}
                placeholder="Password"
                // onChange={changedEnteredJobTitleHandler}
                // value={enteredJobTitle}
            />
            <button
                type="submit"
                className={"mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-[#01C38D] text-[#191E29] hover:text-white focus:ring-2 focus:ring-[#191E29] focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"}
            >
              Login
            </button>
          </form>
        </div>
    </div>

    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 10%;
    }
    */}

//?