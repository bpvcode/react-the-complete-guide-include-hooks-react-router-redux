import { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import UsersList from './components/UsersList/UsersList'

const usersTest = [
  {
    id: '1',
    username: "User1",
    age: 99
  },
  {
    id: '2',
    username: "User2",
    age: 88
  }
]

const App = () => {

  const [users, setUsers] = useState(usersTest)


  const onAddNewUser = (newUser) => {
    setUsers((previousUsers) => {
      return [newUser, ...previousUsers]
    })
  }

  return (
    <div>
      <NewUser onAddNewUser={onAddNewUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
