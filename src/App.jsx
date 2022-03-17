import React, {useState} from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ReposPage } from './Pages/ReposPage';
import { Users } from './Pages/Users'
import {setLocalStorage, getLocalStorage} from './store/localStorage'
import './App.css';

function App() {
  

  return (
    <>
    <header>
      <Link to='/'>Home</Link>
      <Link to='/repositories'>Repositories</Link>
      <Link to='/users'>Users</Link>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/repositories" element={<ReposPage />} />
      <Route path="/users" element={<Users />} />
    </Routes>

    </>
  );
}

export default App;
