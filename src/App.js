import React from 'react';
import './App.css';
import userData from '../src/userData/userData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const btnClickEvent = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <Header users={users}></Header>
        <div className="row">
          {
            userData.map(users => <Users key={users.id} click={btnClickEvent} users={users}></Users>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
