import { FC, useState } from 'react'
import { Restaurants } from '../Authentication/RolesEnum'
import Clock from './Clock/Clock'
import DailyDinnerReport, { FinalReport } from './InputForm/DailyDinnerReport'
import DailyLunchReport, { DailyLunch } from './InputForm/DailyLunchReport'
import { Shifts } from './ShiftEnum'
import Typical from 'react-typical';
import styles from './DailyReports.module.css'

interface DailyReportsProps{
    selectedRestaurant: string
}

export interface DailyReport {
    lunchReport: DailyLunch;
    dinnerReport: DailyLunch;
    finalReport: FinalReport;
    restaurant: Restaurants;
}

const DailyReports: FC<DailyReportsProps> = ({selectedRestaurant}) => {

    const [enteredDailyReport, setEnteredDailyReport] = useState<DailyReport>()
    const [shift, setShift] = useState<Shifts>()
    const [lunchTotalRefeicoes, setLunchTotalRefeicoes] = useState<number>(0)
    const [lunchTotalCaixa, setLunchTotalCaixa] = useState<number>(0)
    const [lunchTotalMB, setLunchTotalMB] = useState<number>(0)
    const [lunchResponsavel, setLunchResponsavel] = useState<string>('')
    const [lunchNotas, setLunchNotas] = useState<string>('')
    const [lunchIsFirstReportDone, setLunchIsFirstReportDone] = useState<boolean>(false)
    const [lunchCreatedTime, setLunchCreatedTime] = useState<Date>(new Date())
    const [isDailyReporCompleteDone, setIsDailyReporCompleteDone] = useState<boolean>(false)


    const onSetShift = (shift: Shifts) => {
        setShift(shift)
    }

    const getReport = (dailyLunch: DailyLunch) => {
        setLunchTotalRefeicoes(dailyLunch.numeroRefeicoes)
        setLunchTotalCaixa(dailyLunch.caixa)
        setLunchTotalMB(dailyLunch.multibanco)
        setLunchResponsavel(dailyLunch.responsavel)
        setLunchNotas(dailyLunch.notas)
        setLunchIsFirstReportDone(dailyLunch.isFirstReportDone)
        setLunchCreatedTime(dailyLunch.createdTime)
        const report = {
            shift: shift,
            numeroRefeicoes: dailyLunch.numeroRefeicoes,
            caixa: dailyLunch.caixa,
            multibanco: dailyLunch.multibanco,
            responsavel: dailyLunch.responsavel,
            notas: dailyLunch.notas,
            isFirstReportDone: dailyLunch.isFirstReportDone,
            createdTime: dailyLunch.createdTime,
        }
    }


    const dailyReport = (reportFinal: DailyReport) => {
        const rep: DailyReport = {
            ...reportFinal,
            restaurant: selectedRestaurant as Restaurants
        }
        setEnteredDailyReport(rep)
    }

    const getDailyReportCompleteDone = (bool: boolean) => {
        console.log("BOOOL : ",  bool)
        setIsDailyReporCompleteDone(bool)
    }

    return (
        <>
        <Clock onSetShift={onSetShift}/>
        {/* // TODO: CHANGE BETWEEN `=== Shifts.Lunch` AND `=== Shifts.Dinner` to : */}

        { isDailyReporCompleteDone
            ? (
                <>
                <div className={styles.SignInScreen}>
                <div className={styles.Typing}>
                    <Typical
                    steps={[
                        "Daily report is already DONE ✔️",
                        4000,
                        "Wait until next shift opens for registry",
                        4000,
                        "Meanwhile take a rest and thanks for your awesome work 🙌",
                        4000
                    ]}
                    loop={Infinity}
                    wrapper="span"
                    />
                </div>
                </div>
                </>
            )
            : (
                <>
                { shift === Shifts.Lunch
                    ? (
                        <DailyLunchReport getReport={getReport}/>
                    )
                    : (
                        <DailyDinnerReport
                            lunchTotalRefeicoes={100}
                            lunchTotalCaixa={1000}
                            lunchTotalMB={500}
                            lunchResponsavel={'Bruno'}
                            lunchNotas={'Hello'}
                            islunchFirstReport={false}
                            lunchCreatedTime={lunchCreatedTime}
                            dailyReport={dailyReport}
                            isDailyReportDone={getDailyReportCompleteDone}/>
                    )
                }
                </>
            )
        }
        </>
    )
}

export default DailyReports