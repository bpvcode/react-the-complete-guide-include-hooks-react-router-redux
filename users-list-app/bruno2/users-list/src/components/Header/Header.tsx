import { FC } from 'react';
import styles from './Header.module.css'

const Header: FC = () => {
    return (
        <div className={styles.header}>
        <h1 className={styles.logo}>Devops Summit 2023</h1>
        {/* <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div> */}
        </div>
    )
}

export default Header;