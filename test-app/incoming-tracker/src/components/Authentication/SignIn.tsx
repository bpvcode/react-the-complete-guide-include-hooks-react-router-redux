import { FC, useState } from "react";
import styles from './SignIn.module.css'
import Typical from 'react-typical';
import { Roles } from "./RolesEnum";

export interface UserModal {
    id: string,
    name: string,
    password: string,
    roles: Roles[]
}

const USER_MODALS_TEST = [
    {
        id: "1",
        name: "Rita",
        password: "test",
        roles: [Roles.Admin, Roles.Staff]
    }
]

interface UserProps{
    onSignIn: (newUser: UserModal) => void
}

const SignIn: FC <UserProps> = ({onSignIn}) => {

    const [user, setUser] = useState<UserModal>()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onChangeNameHandler = (event: any) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const onChangePasswordHandler = (event: any) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const onSubmitHandler = (event: any) => {
        event.preventDefault();

        if(name === USER_MODALS_TEST[0].name && password === USER_MODALS_TEST[0].password){
            console.log("SIGN IN " , event.target.value)
            setUser(USER_MODALS_TEST[0])
            onSignIn(USER_MODALS_TEST[0])
        } else {
            return (
                <h2>ERROOOOOOOOOOOOOOOO !!!</h2>
            )
        }
    }


    return (
        <>

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
                    <div className="w-[80%] p-6 m-auto bg-none rounded-md shadow-xl shadow-[#01C38D]/40 ring ring-2 ring-[#009394] lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-[#01C38D] no-underline uppercase">
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
                                    className="block w-full px-4 py-2 mt-2 text-[#191E29] bg-white border rounded-md focus:border-[#696E79]focus:ring-[#696E79] focus:outline-none focus:ring focus:ring-opacity-40"
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
                            <div className="mt-12">
                                <button className="w-full px-4 py-2 tracking-wide text-[#191E29] transition-colors duration-200 transform bg-[#01C38D] rounded-md hover:bg-[#009394] focus:outline-none focus:bg-white">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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