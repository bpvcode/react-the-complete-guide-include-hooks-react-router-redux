import React, { useState } from 'react';
import './App.css';
import Typical from 'react-typical';
import Authentication from './components/Authentication/Authentication';
import Header from './components/Header/Header';

const App = () => {

  const [user, setUser] = useState()

  const onLogOut = () => {
    setUser(undefined)
  }

  const onGetNewUser = (event: any) => {
    console.log("APP " , event)
    setUser(event)
  }

  return (
    <div className="App font-sans">
      {user && <Header onLogOut={onLogOut}/>}
      {!user && <Authentication onGetNewUser={onGetNewUser} />}
    </div>
  );
}

export default App;
