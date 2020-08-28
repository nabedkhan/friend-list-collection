import React from 'react';
import './App.css';
import userData from '../src/userData/userData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [users, setUsers] = useState([]);

  const btnClickEvent = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
  }

  // write value in input box
  const [search, setSearch] = useState("");
  const userSearch = (event) => setSearch(event.target.value);

  // when search show user components
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const results = userData.filter(people => {
      const { first, last } = people.name;
      return first.toLowerCase().includes(search) || last.toLowerCase().includes(search);
    });
    setSearchResult(results);

  }, [search]);


  return (
    <div className="App">
      <div className="container-fluid">

        <Header users={users} value={search} userSearch={userSearch}></Header>

        <div className="row" style={{ minHeight: '81vh' }}>
          {
            searchResult.map(users => <Users key={users.id} click={btnClickEvent} users={users}></Users>)
          }
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
