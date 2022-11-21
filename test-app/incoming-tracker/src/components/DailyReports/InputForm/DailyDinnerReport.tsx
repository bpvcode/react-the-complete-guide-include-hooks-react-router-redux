import { FC, useEffect, useState } from "react";
import DailyLunchReport, { DailyLunch } from "./DailyLunchReport";
import styles from './DailyDinnerReport.module.css'
import { DailyReport } from "../DailyReports";
import { Restaurants } from "../../Authentication/RolesEnum";

interface DailyDinnerReportProps {
    lunchTotalRefeicoes: number;
    lunchTotalCaixa: number;
    lunchTotalMB: number;
    lunchResponsavel: string;
    lunchNotas: string;
    islunchFirstReport: boolean;
    lunchCreatedTime: Date;
    dailyReport: (report: DailyReport) => void;
    isDailyReportDone: (bool: boolean) => void;
}

export interface FinalReport {
    totalRefeiçoes: number;
    totalCaixa: number;
    totalMultibanco: number;
    totalDinheiroEsperado: number;
    totalDinheiroReal: number;
    totalDesvios: number;
}

const DailyDinnerReport: FC<DailyDinnerReportProps> = ({lunchTotalRefeicoes, lunchTotalCaixa, lunchTotalMB, lunchResponsavel, lunchNotas, islunchFirstReport, lunchCreatedTime, dailyReport, isDailyReportDone}) => {

    const [finalReport, setFinalReport] = useState<FinalReport>()
    const [dinnerTotalRefeiçoes, setdinnerTotalRefeiçoes] = useState<number>(0)
    const [dinnerTotalCaixa, setDinnerTotalCaixa] = useState<number>(0)
    const [dinnerTotalMB, setDinnerTotalMB] = useState<number>(0)
    const [dinnerResponsavel, setDinnerResponsavel] = useState<string>('')
    const [dinnerNotas, setDinnerNotas] = useState<string>('')
    const [isDinnerFirstReport, setIsDinnerFirstReport] = useState(true)
    const [totalRefeiçoes, setTotalRefeiçoes] = useState<number>(0)
    const [totalDinheiroEsperado, setTotalDinheiroEsperado] = useState<number>(0)
    const [totalDinheiroReal, setTotalDinheiroReal] = useState<number>(0)
    const [totalMB, setTotalMB] = useState<number>(0)
    const [totalCaixa, setTotalCaixa] = useState<number>(0)
    const [totalDesvios, setTotalDesvios] = useState<number>(0)

    const [totalPlataformas, setTotalPlataformas] = useState<number>(0)
    const [enteredTotalUber, setEnteredTotalUber] = useState<number>(0)
    const [enteredTotalBolt, setEnteredTotalBolt] = useState<number>(0)
    const [enteredTotalGlovo, setEnteredTotalGlovo] = useState<number>(0)
    const [enteredTotalZomato, setEnteredTotalZomato] = useState<number>(0)
    const [enteredTotalDespesas, setEnteredTotalDespesas] = useState<number>(0)

    useEffect(()=> {
        setTotals()
    })

    const setTotals = () => {
        setTotalRefeiçoes(lunchTotalRefeicoes + Number(dinnerTotalRefeiçoes))
        setTotalCaixa(lunchTotalCaixa + Number(dinnerTotalCaixa))
        setTotalMB(lunchTotalMB + Number(dinnerTotalMB))
        setTotalPlataformas(enteredTotalUber+enteredTotalBolt+enteredTotalGlovo+enteredTotalZomato)
        setTotalDinheiroEsperado((lunchTotalCaixa + Number(dinnerTotalCaixa)) - (lunchTotalMB + Number(dinnerTotalMB)) - totalPlataformas - enteredTotalDespesas)
        setTotalDesvios(totalDinheiroReal - totalDinheiroEsperado)
    }

    const getReport = (dailyLunch: DailyLunch) => {
        setdinnerTotalRefeiçoes(dailyLunch.numeroRefeicoes)
        setDinnerTotalCaixa(dailyLunch.caixa)
        setDinnerTotalMB(dailyLunch.multibanco)
        setDinnerResponsavel(dailyLunch.responsavel)
        setDinnerNotas(dailyLunch.notas)
        setIsDinnerFirstReport(false)
    }

    const enteredTotalDespesasHandler = (event: any) => {
        setEnteredTotalDespesas(Number(event.target.value))
        setTotalDesvios(totalDinheiroReal - totalDinheiroEsperado)
    }
    const enteredTotaDinheiroRealHandler = (event: any) => {
        setTotalDinheiroReal(Number(event.target.value))
    }
    const enteredTotalUberHandler = (event: any) => {
        setEnteredTotalUber(Number(event.target.value))
    }
    const enteredTotalBoltHandler = (event: any) => {
        setEnteredTotalBolt(Number(event.target.value))
    }
    const enteredTotalGlovoHandler = (event: any) => {
        setEnteredTotalGlovo(Number(event.target.value))
    }
    const enteredTotalZomatoHandler = (event: any) => {
        setEnteredTotalZomato(Number(event.target.value))
    }

    const onSubmit = () => {
        const finalReport = {
            totalRefeiçoes: totalRefeiçoes,
            totalCaixa: totalCaixa,
            totalMultibanco: totalMB,
            totalDinheiroEsperado: totalDinheiroEsperado,
            totalDinheiroReal: totalDinheiroReal,
            totalDesvios: totalDesvios

        }
        const newDailyReport: DailyReport = {
            lunchReport: {
                numeroRefeicoes: lunchTotalRefeicoes,
                caixa: lunchTotalCaixa,
                multibanco: lunchTotalMB,
                responsavel: lunchResponsavel,
                notas: lunchNotas,
                isFirstReportDone: islunchFirstReport,
                createdTime: lunchCreatedTime,

            },
            dinnerReport: {
                numeroRefeicoes: dinnerTotalRefeiçoes,
                caixa: dinnerTotalCaixa,
                multibanco: dinnerTotalMB,
                responsavel: dinnerResponsavel,
                notas: dinnerNotas,
                isFirstReportDone: isDinnerFirstReport,
                createdTime: new Date(),

            },
            finalReport: finalReport,
            restaurant: '' as Restaurants
        }
        console.log("##### New Daily Report - ", newDailyReport)
        setFinalReport(finalReport)
        dailyReport(newDailyReport)
        isDailyReportDone(true)
    }

    console.log("##### Final Report - ", finalReport)

    return (
        <>
        {isDinnerFirstReport ?
            (<DailyLunchReport getReport={getReport}/>)
            :
            (
            <div className="max-w-sm mx-auto px-6">
                <div className="relative flex flex-wrap">
                    <div className="w-full relative">
                        <div className="md:mt-6">
                            <form onSubmit={onSubmit}>
                                <hr className={styles.hr}></hr>
                                    <span className="px-1 text-sm text-white">PLATAFORMAS</span>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">UBER</span>
                                        <input placeholder="Valor faturado na UBER" type="number" min={0} onChange={enteredTotalUberHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">BOLT</span>
                                        <input placeholder="Valor faturado na BOLT" type="number" min={0} onChange={enteredTotalBoltHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">GLOVO</span>
                                        <input placeholder="Valor faturado na GLOVO" type="number" min={0} onChange={enteredTotalGlovoHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">ZOMATO</span>
                                        <input placeholder="Valor faturado na ZOMATO" type="number" min={0} onChange={enteredTotalZomatoHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <hr className={styles.hr}></hr>
                                    <span className="px-1 text-sm text-white">DESPESAS</span>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">EXTRA</span>
                                        <input placeholder="Valor extra de despesas ocorridas" type="number" min={0} onChange={enteredTotalDespesasHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                <hr className={styles.hr}></hr>
                                <div className="mx-auto max-w-lg ">
                                <span className="px-1 text-sm text-white">TOTAIS</span>
                                <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">TOTAL REFEIÇÕES</span>
                                        <input placeholder="Valor calculado automaticamente" value={totalRefeiçoes} type="number" min={0} disabled={true}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-[#696E79] border-2 border-gray-white placeholder-white text-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">TOTAL CAIXA</span>
                                        <input placeholder="Valor calculado automaticamente" value={totalCaixa} type="number" min={0} disabled={true}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-[#696E79] border-2 border-gray-white placeholder-white text-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">TOTAL MULTIBANCO</span>
                                        <input placeholder="Valor calculado automaticamente" value={totalMB} type="number" min={0} disabled={true}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-[#696E79] border-2 border-gray-white placeholder-white text-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">TOTAL PLATAFORMAS</span>
                                        <input placeholder="Valor calculado automaticamente" value={totalPlataformas} type="number" min={0} disabled={true}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-[#696E79] border-2 border-gray-white placeholder-white text-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">TOTAL DINHEIRO ESPERADO</span>
                                        <input placeholder="Valor calculado automaticamente" value={totalDinheiroEsperado} type="number" min={0} disabled={true}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-[#01C38D] border-2 border-gray-white placeholder-white text-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">TOTAL DINHEIRO REAL</span>
                                        <input placeholder="Valor extra de despesas ocorridas" type="number" min={0} onChange={enteredTotaDinheiroRealHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">TOTAL DESVIO</span>
                                        <input placeholder="Valor calculado automaticamente" value={totalDesvios} type="number" min={0} disabled={true}
                                            className="text-md font-bold slashed-zero block px-3 py-2 rounded-lg w-full
                                            bg-[#696E79] border-2 border-gray-white placeholder-white text-white shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <hr className={styles.hr}></hr>
                                <span className="px-1 text-sm text-white">STAFF INFO</span>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">Responsável</span>
                                        <input placeholder="Nome da pessoa que regista" type="text"
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">Notas</span>
                                        <input placeholder="Notas" type="text"
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <button className="mt-8 mb-6 text-lg font-semibold
                                        bg-[#01C38D] w-full text-white rounded-lg
                                        px-6 py-3 block shadow-xl hover:text-white hover:bg-[#009394]">
                                        Registar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}

export default DailyDinnerReport