import { FC, useState } from "react";
import styles from './DailyDinnerReport.module.css'

interface DailyLunchReport {
    getReport: (dailyLunch: DailyLunch) => void
}

export interface DailyLunch {
    numeroRefeicoes: number;
    caixa: number;
    multibanco: number;
    responsavel: string;
    notas: string;
    isFirstReportDone: boolean;
    createdTime: Date;
}

const DailyLunchReport: FC<DailyLunchReport> = ({getReport}) => {

    const [isFirstReportDone, setIsFirstReportDone] = useState<boolean>(false);
    const [enteredNumeroRefeicoes, setEnteredNumeroRefeicoes] = useState<number>(0);
    const [enteredCaixa, setEnteredCaixa] = useState<number>(0);
    const [enteredMultibanco, setEnteredMultibanco] = useState<number>(0);
    const [enteredResponsavel, setEnteredResponsavel] = useState<string>('');
    const [enteredNotas, setEnteredNotas] = useState<string>('');

    const enteredNumeroRefeicoesHandler = (event: any) => {
        setEnteredNumeroRefeicoes(event.target.value as number)
    }
    const enteredCaixaHandler = (event: any) => {
        setEnteredCaixa(event.target.value as number)
    }
    const enteredMultibancoHandler = (event: any) => {
        setEnteredMultibanco(event.target.value as number)
    }
    const enteredResponsavelHandler= (event: any) => {
        setEnteredResponsavel(event.target.value)
    }
    const enteredNotasHandler = (event: any) => {
        setEnteredNotas(event.target.value)
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        const report: DailyLunch = {
            numeroRefeicoes: enteredNumeroRefeicoes,
            caixa: enteredCaixa,
            multibanco: enteredMultibanco,
            responsavel: enteredResponsavel,
            notas: enteredNotas,
            isFirstReportDone: true,
            createdTime: new Date(),
        }
        setIsFirstReportDone(true)
        getReport(report)
        setEnteredNumeroRefeicoes(0)
        setEnteredCaixa(0)
        setEnteredMultibanco(0)
        setEnteredResponsavel('')
        setEnteredNotas('')
        setIsFirstReportDone(true)
    }

    return (
        <>
        <div className="max-w-sm mx-auto px-6">
                <div className="relative flex flex-wrap">
                    <div className="w-full relative">
                        <div className="md:mt-6">
                            <form onSubmit={onSubmit}>
                                <div className="mx-auto max-w-lg ">
                                    <hr className={styles.hr}></hr>
                                    <span className="px-1 text-sm text-white">REPORT DIARIO</span>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">Nº de refeições</span>
                                        <input placeholder="Nº de refeições" type="number" min={0} onChange={enteredNumeroRefeicoesHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">Caixa</span>
                                        <input placeholder="Caixa" type="number" min={0} onChange={enteredCaixaHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">MB</span>
                                        <input placeholder="MB" type="number" min={0} onChange={enteredMultibancoHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <hr className={styles.hr}></hr>
                                <span className="px-1 text-sm text-white">STAFF INFO</span>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">Responsável</span>
                                        <input placeholder="Nome da pessoa que regista" type="text" onChange={enteredResponsavelHandler}
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-[#696E79]">Notas</span>
                                        <input placeholder="Notas" type="text" onChange={enteredNotasHandler}
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
        </>
    )
}

export default DailyLunchReport