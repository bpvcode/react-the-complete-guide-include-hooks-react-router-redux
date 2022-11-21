import React, { useState } from 'react';
import './App.css';
import Authentication from './components/Authentication/Authentication';
import { UserModal } from './components/Authentication/SignIn';
import DailyReports from './components/DailyReports/DailyReports';
import Header from './components/Header/Header';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';

const App = () => {

  const [user, setUser] = useState<UserModal>()
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>('')

  const onLogOut = () => {
    setUser(undefined)
  }

  const onGetNewUser = (event: any) => {
    console.log("APP " , event)
    setUser(event)
    setSelectedRestaurant(event.selectedRestaurant)
  }

  return (
    <div className="App font-sans">
      {!user && <Authentication onGetNewUser={onGetNewUser} />}
      {user && <Header onLogOut={onLogOut} title={selectedRestaurant}/>}
      {user && <DailyReports selectedRestaurant={selectedRestaurant} />}
    </div>
  );
}

export default App;
