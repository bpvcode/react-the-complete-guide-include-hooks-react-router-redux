import { FC, useState } from "react";
import styles from './Header.module.css'
import classNames from "classnames"
import classnames from "classnames";


interface HeaderProps {
    onLogOut: () => void
    title: string
}

const Header: FC<HeaderProps> = ({onLogOut, title}) => {

    const [choosedDailyReport, setchoosedDailyReport] = useState<boolean>(true)
    const [choosedShiftSchedule, setchoosedShiftSchedule] = useState<boolean>(false)
    const [choosedLogOut, setchoosedLogOut] = useState<boolean>(false)

    const logOutHandler = () => {
        setchoosedDailyReport(false)
        setchoosedShiftSchedule(false)
        setchoosedLogOut(true)
        onLogOut()
    }

    const choosedDailyReportHandler = () => {
        setchoosedDailyReport(true)
        setchoosedShiftSchedule(false)
        setchoosedLogOut(false)
    }
    const choosedShiftScheduleHandler = () => {
        setchoosedDailyReport(false)
        setchoosedShiftSchedule(true)
        setchoosedLogOut(false)
    }

    return (
    <header className={classNames(styles.appHeader)}>
        <a className={styles.headerLogo}>
            {title} Reports
        </a>
        <div className={classnames(styles.headerRoutes, 'labelHeader')} id={'ts'}>
            <a onClick={choosedDailyReportHandler}>
                <label>Daily Report</label>
            </a>
            <a onClick={choosedShiftScheduleHandler}>
                <label>Shift Schedule</label>
            </a>
            <a onClick={logOutHandler}>
                <label>LogOut</label>
            </a>
        </div>
    </header>
    )
}

export default Header;