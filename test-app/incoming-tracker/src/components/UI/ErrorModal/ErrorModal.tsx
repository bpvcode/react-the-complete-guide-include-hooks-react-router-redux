import classNames from 'classnames'
import { FC } from 'react'
import styles from './ErrorModal.module.css'

export interface ErrorModalProps{
    title: string,
    message: string,
    isErrorHandler: (bol: boolean) => void
}

const ErrorModal: FC <ErrorModalProps> = ({title, message, isErrorHandler}) => {

    const onClickHandler = () => {
        isErrorHandler(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-tr from-[#01C38D]/30 to-[#191E29] flex justify-center items-center" onClick={onClickHandler}>
        <div className="bg-[#191E29]/60 rounded-lg">
            <div className="w-96 border-t-8 border-[#01C38D] rounded-lg flex">
            <div className="w-1/3 pt-7 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-[#01C38D] text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24" >
                <path xmlns="http://www.w3.org/2000/svg" d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentcolor"></path>
                </svg>
            </div>
            <div className="w-full pt-12 pr-4">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="py-4 text-sm text-white">{message}</p>
            </div>
            </div>

            <div className="p-8 flex justify-center items-center space-x-4">
            <a href="#" className="w-1/2 px-4 py-3 text-center text-white bg-[#01C38D] rounded-lg hover:bg-gray-100 hover:text-[#191E29] font-bold text-sm" onClick={onClickHandler}>OK</a>
            </div>
        </div>
        </div>
        // xmlns="http://www.w3.org/2000/svg"

        // <div className={classNames(styles.backdrop)} onClick={onClickHandler} >
        // <div className={"bg-slate-800 bg-opacity-75 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"}>
        // <div id={'card'} className={"bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"}>
        //     <div className={"p-7 sm:p-7"}>
        //         <div className={"text-center"}>
        //         <h1 className={"block text-m font-bold text-gray-800 dark:text-white"}>Forgot input data?</h1>
        //         <p className={"mt-7 text-lg text-gray-600 dark:text-gray-400"}>
        //             Please fill all input data needed before submit
        //         </p>
        //         </div>
        //         <div className={"mt-8"}>
        //         <div className={"grid gap-y-4"}>
        //             <button
        //                 type="button"
        //                 className={"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"}
        //                 onClick={onClickHandler}
        //             >
        //                 Ok
        //             </button>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
        // </div>
    )
}

export default ErrorModal