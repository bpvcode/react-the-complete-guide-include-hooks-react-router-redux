import Card from "../UI/Card";
import User from "../User/User";
import styles from './UsersList.module.css'

const UsersList = (props) => {

    if(props.users.length === 0){
        return <h2>No users found</h2>
    }

    return (
        <Card className={styles.container}>
        <ul>
            {props.users.map(user => (
                <User
                key={user.id}
                username={user.username}
                age={user.age}
                />
            ))}
        </ul>
        </Card>
    )
}

export default UsersList;