import { FC } from 'react';
import UserExample from '../../userExample.jpg';
import { UserModal } from '../user/User';
import styles from './UserList.module.css'

export interface UserListProps{
    users: UserModal[]
}

const UserList: FC <UserListProps> = ({users}) => {

    return (
        <div className={"container flex flex-col mx-auto w-full items-center justify-center"}>
        <ul className={`flex flex-col ${styles.users}`}>
        {users.map((user: { name: string , jobTitle: string }) => (
            <li className={"border-gray-400 flex flex-row mb-2"}>
                <div className={"shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"}>
                    <div className={"flex flex-col w-10 h-10 justify-center items-center mr-4"}>
                        <a href="#" className={"block relative"}>
                            <img alt="profile image" src={UserExample} className={"mx-auto object-cover rounded-full h-10 w-10 "}/>
                        </a>
                    </div>
                    <div className={"flex-1 pl-1 md:mr-16"}>
                        <div className={"font-medium text-gray-600 dark:text-gray-200 text-base"}>
                            {user.name}
                        </div>
                        <div className={"text-gray-600 dark:text-gray-200 text-sm"}>
                            {user.jobTitle}
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
</div>
    )
}

export default UserList