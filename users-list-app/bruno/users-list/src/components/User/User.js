import Card from "../UI/Card";
import styles from './User.module.css'

const User = (props) => {

    return (
        <div>
            <Card className={styles.container}>
            <p>{props.username} ({props.age} years old)</p>
            </Card>
        </div>
    )
}

export default User;