import classNames from "classnames"
import { FC } from "react"
import styles from './ErrorModal.module.css'

export interface ErrorModalProps{
    isErrorHandler: (bol: boolean) => void
}

const ErrorModal: FC <ErrorModalProps> = ({isErrorHandler}) => {

    const onClickHandler = () => {
        isErrorHandler(false)
    }

    return(
    <div className={classNames(styles.backdrop)} onClick={onClickHandler}>
    <div className={"bg-slate-800 bg-opacity-75 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"}>
    <div id={'card'} className={"bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"}>
        <div className={"p-7 sm:p-7"}>
            <div className={"text-center"}>
            <h1 className={"block text-m font-bold text-gray-800 dark:text-white"}>Forgot input data?</h1>
            <p className={"mt-7 text-lg text-gray-600 dark:text-gray-400"}>
                Please fill all input data needed before submit
            </p>
            </div>
            <div className={"mt-8"}>
            <div className={"grid gap-y-4"}>
                <button
                    type="button"
                    className={"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"}
                    onClick={onClickHandler}
                >
                    Ok
                </button>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    )
}

export default ErrorModal