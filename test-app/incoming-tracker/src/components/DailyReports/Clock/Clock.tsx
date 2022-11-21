import { useState, useEffect, FC } from "react"
import { Shifts } from "../ShiftEnum"
import styles from './Clock.module.css'

interface clockProps {
    onSetShift: (shift:Shifts) => void
}

const Clock: FC<clockProps> = ({onSetShift}) => {

    const startLunchDate = 7
    const endLunchDate = 18
    const [date, setDate] = useState(new Date())
    const [hour, setHour] = useState<number>(date.getHours())
    const [min, setMin] = useState<number>(date.getMinutes())
    const [weekDay, setWeekDay] = useState<number>()
    const [shift, setShift] = useState<Shifts>()
    const [hourFormated, setHourFormated] = useState<string>()
    const [minFormated, setMinFormated] = useState<string>()


    useEffect(() => {
        const intervalMin = setInterval(() => setMin(new Date().getMinutes()), 1000);
        const intervalHour = setInterval(() => setHour(new Date().getHours()), 1000);
        const intervalShift = setInterval(() => setShift(getShift(new Date())), 1000)
        onSetShift(getShift(new Date()))
        return () => {
            clearInterval(intervalMin);
            clearInterval(intervalHour);
            clearInterval(intervalShift);
        };
      }, []);

    useEffect(() => {
        const allWeekday = new Array(7);
        allWeekday[0] = "Sunday";
        allWeekday[1] = "Monday";
        allWeekday[2] = "Tuesday";
        allWeekday[3] = "Wednesday";
        allWeekday[4] = "Thursday";
        allWeekday[5] = "Friday";
        allWeekday[6] = "Saturday";

        setHourFormated(`${hour}`)
        setMinFormated(`${min}`)
        setWeekDay(allWeekday[date.getDay()])
        setShift(shift)
        onSetShift(getShift(new Date()))
    })

    const getShift = (date: Date) => {
        if (date.getHours() > startLunchDate && date.getHours() < endLunchDate){
            return Shifts.Lunch
        } else {
            return Shifts.Dinner
        }
    }

    return (
        <div className={styles.Clock}>
            <h1>{hourFormated}h : {minFormated}m - {weekDay} </h1>
            <h1 className={styles.SecondH1}><b style={{color:"#01C38D"}}>{shift} Report</b></h1>
        </div>
    )
}

export default Clock