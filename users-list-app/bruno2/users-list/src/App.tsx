import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import  User  from './components/user/User';
import UserList from './components/userList/UserList';

const USERS_EXAMPLE = [
  {
    name:"Bruno V",
    jobTitle:"Software Developer",
  },
  {
    name:"O Beiro",
    jobTitle:"Music Producer"
  },
  // {
  //   name:"Hydra Cloe",
  //   jobTitle:"M&A - Merge and Acquisition"
  // },
  // {
  //   name:"John Doe",
  //   jobTitle:"Blockchain"
  // },
  // {
  //   name:"Peter Pan",
  //   jobTitle:"Devops engineer"
  // },
  // {
  //   name:"Anna Lee",
  //   jobTitle:"Head of Digital"
  // },
  // {
  //   name:"Joana Calhabrez",
  //   jobTitle:"UX & UI Lead"
  // }
]

const App = () => {

  const [users, setUsers] = useState(USERS_EXAMPLE)

  const onAddNewUser = (newUser: {name: string, jobTitle: string}) => {
    setUsers((previousUsers) => {
      return [newUser, ...previousUsers]
    })
  }

  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        {/* <h1>
          DevOps Summit 2023
        </h1> */}
          <User onAddNewUser={onAddNewUser}></User>
          <UserList users={users}/>
      </header>
    </div>
  );
}

export default App;
