import { FC } from "react"
import SignIn, { UserModal } from "./SignIn"

interface AutheticationProps{
    onGetNewUser: (newUser: UserModal) => void
}


const Authentication: FC <AutheticationProps> = ({onGetNewUser}) => {

    const onSignIn = (event: any) => {
        onGetNewUser(event)
    }

    return (
        <SignIn onSignIn={onSignIn} />
    )
}

export default Authentication