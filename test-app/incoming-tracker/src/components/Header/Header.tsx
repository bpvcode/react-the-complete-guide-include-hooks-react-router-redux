import { FC } from "react";
import styles from './Header.module.css'
import classNames from "classnames"


interface HeaderProps {
    onLogOut: () => void
}

const Header: FC<HeaderProps> = ({onLogOut}) => {

    const logOutHandler = () => {
        console.log("LOGOUT")
        onLogOut()
    }

    return (
    <header className={classNames(styles.appHeader)}>
        <h1 className={styles.headerLogo}>
        El Cabron Reports
        </h1>
        <div className={styles.headerRoutes}>
            <h3>
                Daily Report
            </h3>
            <h3>
                Shift Schedule
            </h3>
            <a onClick={logOutHandler}> LogOut</a>
        </div>
    </header>
    )
}

export default Header;